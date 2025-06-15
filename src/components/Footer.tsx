import React from 'react';
import { Github, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">OR</span>
            </div>
            <span className="font-semibold text-lg">OpenRouter</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Product</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">Models</a>
                  <a href="#" className="block hover:text-foreground">Chat</a>
                  <a href="#" className="block hover:text-foreground">Rankings</a>
                  <a href="#" className="block hover:text-foreground">Enterprise</a>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Developers</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">Documentation</a>
                  <a href="#" className="block hover:text-foreground">API Reference</a>
                  <a href="#" className="block hover:text-foreground">SDKs</a>
                  <a href="#" className="block hover:text-foreground">Status</a>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Company</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">About</a>
                  <a href="#" className="block hover:text-foreground">Blog</a>
                  <a href="#" className="block hover:text-foreground">Careers</a>
                  <a href="#" className="block hover:text-foreground">Partners</a>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-sm">Legal</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <a href="#" className="block hover:text-foreground">Privacy</a>
                  <a href="#" className="block hover:text-foreground">Terms</a>
                  <a href="#" className="block hover:text-foreground">Security</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-border">
          <div className="text-sm text-muted-foreground">
            © 2023 - 2025 OpenRouter, Inc.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;