import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Key, 
  CreditCard, 
  Shield, 
  BarChart3, 
  Zap, 
  Database,
  ExternalLink
} from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Signup',
    description: 'Create an account to get started. You can set up an org for your team later.',
    icon: <Key className="w-5 h-5" />
  },
  {
    number: 2,
    title: 'Buy credits',
    description: 'Credits can be used with any model or provider.',
    icon: <CreditCard className="w-5 h-5" />,
    pricing: [
      { tier: 'API', price: '$10' },
      { tier: 'May 25', price: '$10' }
    ]
  },
  {
    number: 3,
    title: 'Get your API key',
    description: 'Create an API key and start making requests. Fully OpenAI-compatible.',
    icon: <Shield className="w-5 h-5" />,
    apiKey: 'OPENROUTER_API_KEY'
  }
];

const features = [
  {
    title: 'One API for Any Model',
    description: 'Access all major models through a single, unified interface. OpenAI SDK works out of the box.',
    icon: <Database className="w-8 h-8 text-blue-600" />,
    cta: 'Browse all'
  },
  {
    title: 'Higher Availability',
    description: 'Reliable AI models via our distributed infrastructure. Fall back to other providers when one goes down.',
    icon: <Zap className="w-8 h-8 text-green-600" />,
    cta: 'Learn more'
  },
  {
    title: 'Price and Performance',
    description: 'Keep costs in check without sacrificing speed. OpenRouter runs at the edge, adding just ~25ms between you and your difference.',
    icon: <BarChart3 className="w-8 h-8 text-orange-600" />,
    cta: 'Learn more'
  },
  {
    title: 'Custom Data Policies',
    description: 'Protect your organization with fine-grained data policies. Ensure prompts only go to the models and providers you trust.',
    icon: <Shield className="w-8 h-8 text-purple-600" />,
    cta: 'View docs'
  }
];

const FeaturesSection = () => {
  return (
    <div className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                  
                  {step.pricing && (
                    <div className="space-y-2">
                      {step.pricing.map((price, idx) => (
                        <div key={idx} className="flex justify-between items-center bg-muted p-2 rounded">
                          <span className="text-sm">{price.tier}</span>
                          <span className="font-semibold">{price.price}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {step.apiKey && (
                    <div className="bg-muted p-3 rounded font-mono text-sm">
                      <div className="flex items-center gap-2">
                        <Key className="w-4 h-4" />
                        <span>{step.apiKey}</span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ••••••••••••••••••••••••••••
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader className="p-0 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  {feature.icon}
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  {feature.cta}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;