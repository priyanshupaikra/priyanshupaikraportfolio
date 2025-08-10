import { useState, useCallback, useRef, useEffect } from 'react';
import { portfolioData, availableCommands } from '@/data/portfolio-data';

export interface HistoryEntry {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: number;
}

export function useTerminal() {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState('');
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      setTimeout(() => {
        terminalRef.current!.scrollTop = terminalRef.current!.scrollHeight;
      }, 100);
    }
  }, []);

  const addToHistory = useCallback((entry: Omit<HistoryEntry, 'timestamp'>) => {
    setHistory(prev => [...prev, { ...entry, timestamp: Date.now() }]);
  }, []);

  const executeCommand = useCallback((command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add command to display history
    addToHistory({
      type: 'command',
      content: `user@priyanshu:~$ ${command}`
    });

    // Add to command history for navigation
    if (cmd && cmd !== '') {
      setCommandHistory(prev => {
        // Avoid duplicates by checking if the command is already at the top
        if (prev[0] !== command) {
          return [command, ...prev.slice(0, 49)]; // Keep last 50 commands
        }
        return prev;
      });
      setHistoryIndex(-1);
    }

    // Handle commands
    if (cmd === 'clear') {
      setHistory([]);
      return;
    }

    if (cmd === '') {
      return;
    }

    if (portfolioData[cmd]) {
      const data = portfolioData[cmd];
      addToHistory({
        type: 'output',
        content: `<div class="mt-4">
          <div class="text-green-400 font-bold border-b border-green-400 pb-2">${data.title}</div>
          <pre class="text-white mt-3 whitespace-pre-wrap leading-relaxed">${data.content}</pre>
        </div>`
      });
    } else {
      addToHistory({
        type: 'error',
        content: `Command not found: ${command}`
      });
      addToHistory({
        type: 'output',
        content: `<span class="text-yellow-400">Type 'help' to see available commands</span>`
      });
    }
  }, [addToHistory]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    
    if (e.key === 'Enter') {
      executeCommand(input.value);
      setCurrentCommand('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const partial = input.value.toLowerCase();
      const matches = availableCommands.filter(cmd => cmd.startsWith(partial));
      if (matches.length === 1) {
        setCurrentCommand(matches[0]);
      }
    }
  }, [executeCommand, historyIndex, commandHistory]);

  const handleCommandChange = useCallback((value: string) => {
    setCurrentCommand(value);
    setHistoryIndex(-1);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [history, scrollToBottom]);

  return {
    history,
    currentCommand,
    terminalRef,
    executeCommand,
    handleKeyDown,
    handleCommandChange,
    scrollToBottom
  };
}
