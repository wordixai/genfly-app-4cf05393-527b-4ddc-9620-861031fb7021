import React from 'react';

const stats = [
  { value: '8.4T', label: 'Monthly Tokens', color: 'text-foreground' },
  { value: '2.5M+', label: 'Global Users', color: 'text-foreground' },
  { value: '60+', label: 'Active Providers', color: 'text-foreground' },
  { value: '400+', label: 'Models', color: 'text-blue-600' }
];

const StatsSection = () => {
  return (
    <div className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-3xl md:text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;