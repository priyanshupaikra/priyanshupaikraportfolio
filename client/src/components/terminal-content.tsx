import { asciiArt } from '@/data/portfolio-data';
import type { HistoryEntry } from '@/hooks/use-terminal';
import { useEffect, useRef } from 'react';

interface TerminalContentProps {
  history: HistoryEntry[];
  terminalRef: React.RefObject<HTMLDivElement>;
  currentCommand: string;
  onCommandChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onExecuteCommand: (command: string) => void;
}

export function TerminalContent({ 
  history, 
  terminalRef, 
  currentCommand, 
  onCommandChange, 
  onKeyDown, 
  onExecuteCommand 
}: TerminalContentProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const handleFocus = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('focus', handleFocus);
    
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const quickCommands = ['about', 'education', 'projects', 'experience', 'certifications', 'social', 'connect', 'help', 'clear'];
  return (
    <div 
      ref={terminalRef}
      className="flex-1 p-2 sm:p-4 overflow-y-auto terminal-scroll"
    >
      <div className="flex flex-col lg:flex-row h-full">
        {/* Left Side - Python Logo and ASCII Art (Fixed) */}
        <div className="lg:w-2/5 lg:border-r border-green-400 lg:pr-6 flex flex-col items-center justify-start lg:h-full mb-4 lg:mb-0">
          {/* Python Logo Animation */}
          <div className="mb-4 sm:mb-8 flex items-center justify-center mt-4 sm:mt-8">
            <svg
              width="60"
              height="60"
              viewBox="0 0 256 255"
              className="python-logo-animation sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]"
            >
              <defs>
                <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffd43b" />
                  <stop offset="100%" stopColor="#ffe873" />
                </linearGradient>
                <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#306998" />
                  <stop offset="100%" stopColor="#4b8bbe" />
                </linearGradient>
              </defs>
              <path
                d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"
                fill="url(#pyBlue)"
              />
              <path
                d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"
                fill="url(#pyYellow)"
              />
            </svg>
          </div>

          {/* Welcome ASCII Art */}
          <pre className="text-green-400 text-[0.6rem] sm:text-xs leading-tight mb-4 sm:mb-6 whitespace-pre-wrap text-center max-w-full overflow-x-auto">
            {asciiArt}
          </pre>

          {/* Static Welcome Message */}
          <div className="text-center px-2">
            <p className="text-green-400 mb-2 sm:mb-3 text-sm sm:text-base">Welcome to my interactive terminal portfolio!</p>
            <p className="text-white text-xs sm:text-sm mb-3 sm:mb-4">Available Commands:</p>
            <div className="text-left text-[0.65rem] sm:text-xs terminal-muted space-y-1 max-w-full sm:max-w-sm mx-auto">
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• about</span>
                <span className="text-gray-400">- Learn about me</span>
              </div>
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• education</span>
                <span className="text-gray-400">- Educational background</span>
              </div>
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• projects</span>
                <span className="text-gray-400">- Explore my projects</span>
              </div>
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• experience</span>
                <span className="text-gray-400">- Work experience</span>
              </div>
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• certifications</span>
                <span className="text-gray-400">- View certifications</span>
              </div>
              <div className="flex mt-2">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• social</span>
                <span className="text-gray-400">- Connect with me</span>
              </div>
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• help</span>
                <span className="text-gray-400">- Show help menu</span>
              </div>
              <div className="flex">
                <span className="text-green-400 w-20 sm:w-28 flex-shrink-0">• clear</span>
                <span className="text-gray-400">- Clear terminal</span>
              </div>
            </div>
            <p className="text-yellow-400 mt-3 sm:mt-4 text-xs sm:text-sm">Type a command and press Enter to get started!</p>
            <div className="block sm:hidden mt-2">
              <p className="text-blue-400 text-xs">Or use the quick buttons below!</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-blue-400 mt-2 text-sm">Try "connect" for quick access to all my social links!</p>
              <p className="text-purple-400 mt-1 text-xs">Use ↑/↓ arrows for command history, Tab for completion</p>
            </div>
          </div>
        </div>

        {/* Right Side - Terminal Interaction Only */}
        <div className="lg:w-3/5 lg:pl-6 flex flex-col terminal-right-side h-full">
          {/* Command History Display - Only executed commands and outputs */}
          <div className="flex-1 overflow-y-auto mb-4 terminal-scroll">
            {history.length === 0 && (
              <div className="text-center py-4 sm:py-8">
                <p className="text-green-400 mb-2 text-sm sm:text-base">Terminal Ready</p>
                <p className="text-gray-400 text-xs sm:text-sm hidden sm:block">Type a command and press Enter to start...</p>
                <p className="text-gray-400 text-xs sm:hidden">Use the quick buttons below to start...</p>
                <p className="text-purple-400 text-xs mt-2 hidden sm:block">↑/↓ arrows for history, Tab for completion</p>
              </div>
            )}
            {history.map((entry, index) => (
              <div key={`${entry.timestamp}-${index}`} className="mb-1">
                {entry.type === 'command' && (
                  <div className="text-green-400 text-sm sm:text-base break-all">{entry.content}</div>
                )}
                {entry.type === 'output' && (
                  <div className="text-xs sm:text-sm overflow-x-auto" dangerouslySetInnerHTML={{ __html: entry.content }} />
                )}
                {entry.type === 'error' && (
                  <div className="text-red-400 text-xs sm:text-sm break-all">Command not found: {entry.content.replace('Command not found: ', '')}</div>
                )}
              </div>
            ))}
          </div>

          {/* Command Input - Mobile Only */}
          <div className="flex-shrink-0 border-t border-green-400 pt-2 sm:pt-4 bg-[var(--terminal-bg)] lg:hidden">            
            {/* Mobile Command Buttons Only */}
            <div className="sm:hidden">
              <div className="text-xs terminal-muted mb-3 text-center">Quick Commands:</div>
              <div className="grid grid-cols-3 gap-2">
                {quickCommands.map((command) => (
                  <button
                    key={command}
                    onClick={() => onExecuteCommand(command)}
                    className="terminal-gray border border-green-400 px-3 py-2 text-xs rounded hover:bg-green-400 hover:text-black transition-colors text-center min-h-[44px]"
                  >
                    {command}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Hidden input for focus functionality */}
            <input 
              ref={inputRef}
              type="text" 
              value={currentCommand}
              onChange={(e) => onCommandChange(e.target.value)}
              onKeyDown={onKeyDown}
              className="absolute opacity-0 pointer-events-none"
              autoComplete="off"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
