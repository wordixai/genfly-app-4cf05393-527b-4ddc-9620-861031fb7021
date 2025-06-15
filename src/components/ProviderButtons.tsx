import React from 'react';
import { Button } from '@/components/ui/button';

const providers = [
  {
    name: 'Google',
    icon: (
      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">G</span>
      </div>
    )
  },
  {
    name: 'OpenAI',
    icon: (
      <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">O</span>
      </div>
    )
  },
  {
    name: 'Anthropic',
    icon: (
      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-xs">A</span>
      </div>
    )
  }
];

const ProviderButtons = () => {
  return (
    <div className="grid grid-cols-3 gap-4 pb-3">
      {providers.map((provider, index) => (
        <Button
          key={index}
          variant="ghost"
          className="whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 text-muted-foreground hover:bg-accent hover:text-accent-foreground h-11 flex items-center justify-center rounded-lg p-4"
        >
          <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
            <div className="overflow-hidden rounded-full">
              {provider.icon}
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
};

export default ProviderButtons;