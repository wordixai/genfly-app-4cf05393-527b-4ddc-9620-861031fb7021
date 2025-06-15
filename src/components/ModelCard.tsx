import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ModelCardProps {
  isMobile?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({ isMobile = false }) => {
  return (
    <>
      <Card className="group/card text-card-foreground transition-all duration-200 hover:text-slate-900 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-blue-600 md:border-blue-600">
        <CardContent className="p-0">
          <div className="space-y-2">
            <div>
              <a href="#" className="hover:underline">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-foreground font-medium">GPT-4.1</h3>
                  </div>
                  <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                    <div className="overflow-hidden rounded-full">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-[8px]">O</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="flex items-center">
                <span className="text-muted-foreground text-xs">
                  by{' '}
                  <a href="#" className="text-blue-600 hover:underline">
                    openai
                  </a>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
              <div>
                <p className="text-green-600 text-sm font-medium">47.0B</p>
                <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
              </div>
              <div>
                <p className="text-sm font-medium">771ms</p>
                <p className="text-muted-foreground text-[10px]">Latency</p>
              </div>
              <div>
                <p className="text-sm font-medium text-red-600">-1.71%</p>
                <p className="text-muted-foreground text-[10px]">Weekly growth</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {isMobile && (
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-500 text-sm font-medium">Featured Models</h2>
          <a href="#" className="text-blue-600 text-xs hover:underline flex items-center gap-1">
            View Trending
            <ExternalLink className="size-3" />
          </a>
        </div>
      )}
    </>
  );
};

export default ModelCard;