import { useEffect, useRef } from 'react';

interface CommandInputProps {
  currentCommand: string;
  onCommandChange: (value: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onExecuteCommand: (command: string) => void;
}

export function CommandInput({ 
  currentCommand, 
  onCommandChange, 
  onKeyDown, 
  onExecuteCommand 
}: CommandInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Only focus if click is within the right terminal area
      const target = e.target as HTMLElement;
      const rightSide = target.closest('.terminal-right-side');
      if (rightSide && inputRef.current) {
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
    <div className="terminal-gray border-t border-green-400 p-2 sm:p-4">
      <div className="flex items-center">
        <span className="text-green-400 mr-1 sm:mr-2 text-xs sm:text-sm flex-shrink-0">user@priyanshu:~$</span>
        <input 
          ref={inputRef}
          type="text" 
          value={currentCommand}
          onChange={(e) => onCommandChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="bg-transparent text-green-400 outline-none flex-1 font-mono text-xs sm:text-sm min-w-0"
          autoComplete="off"
          placeholder="Type a command..."
        />
        <span className="cursor ml-1 text-xs sm:text-sm">|</span>
      </div>
      
      {/* Mobile Command Buttons */}
      <div className="mt-3 sm:hidden">
        <div className="text-xs terminal-muted mb-2">Quick Commands:</div>
        <div className="grid grid-cols-3 gap-1.5">
          {quickCommands.map((command) => (
            <button
              key={command}
              onClick={() => onExecuteCommand(command)}
              className="terminal-gray border border-green-400 px-2 py-1.5 text-xs rounded hover:bg-green-400 hover:text-black transition-colors text-center touch-manipulation"
            >
              {command}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
