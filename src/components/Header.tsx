import React from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-background">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">OR</span>
          </div>
          <span className="font-semibold text-lg">OpenRouter</span>
        </div>
        
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input 
            placeholder="Search" 
            className="pl-10 w-64 h-8 text-sm bg-muted/50 border-0 focus:bg-background"
          />
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Models</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Chat</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Rankings</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Enterprise</a>
        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
        <Button variant="ghost" size="sm" className="text-sm">
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Header;