import { TerminalHeader } from '@/components/terminal-header';
import { TerminalContent } from '@/components/terminal-content';
import { CommandInput } from '@/components/command-input';
import { useTerminal } from '@/hooks/use-terminal';
import { useEffect, useRef } from 'react';

export default function Terminal() {
  const {
    history,
    currentCommand,
    terminalRef,
    executeCommand,
    handleKeyDown,
    handleCommandChange
  } = useTerminal();

  const desktopInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClick = () => {
      if (desktopInputRef.current && window.innerWidth >= 1024) {
        desktopInputRef.current.focus();
      }
    };

    const handleFocus = () => {
      if (desktopInputRef.current && window.innerWidth >= 1024) {
        desktopInputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('focus', handleFocus);
    
    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col terminal-bg">
      <TerminalHeader />
      
      {/* Main content area - adjusted height to account for fixed bottom input */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden" style={{ height: 'calc(100vh - 120px)' }}>
        <TerminalContent 
          history={history}
          terminalRef={terminalRef}
          currentCommand={currentCommand}
          onCommandChange={handleCommandChange}
          onKeyDown={handleKeyDown}
          onExecuteCommand={executeCommand}
        />
      </div>
      
      {/* Desktop Command Input - Fixed at bottom, always visible */}
      <div className="hidden lg:block bg-[var(--terminal-bg)] border-t border-green-400 p-4 flex-shrink-0" style={{ height: '60px' }}>
        <div className="flex items-center max-w-full h-full">
          <span className="text-green-400 mr-2 text-sm flex-shrink-0">user@priyanshu:~$</span>
          <input 
            ref={desktopInputRef}
            type="text" 
            value={currentCommand}
            onChange={(e) => handleCommandChange(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-green-400 outline-none flex-1 font-mono text-sm min-w-0"
            autoComplete="off"
            placeholder="Type a command..."
          />
          <span className="cursor ml-1 text-sm">|</span>
        </div>
      </div>
    </div>
  );
}
