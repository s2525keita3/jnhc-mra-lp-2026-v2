import { CreditCard, MessageCircle, Zap } from 'lucide-react';
import { usageFlowData } from '@/content';

const icons = { CreditCard, MessageCircle, Zap };

export const UsageFlow = () => {
  return (
    <div className="py-12 bg-white/50">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-lg md:text-xl font-bold text-center text-text-primary mb-8">
          {usageFlowData.title}
        </h3>
        
        <div className="flex items-center justify-center gap-2 md:gap-6">
          {usageFlowData.steps.map((step, i) => {
            const Icon = icons[step.icon as keyof typeof icons];
            return (
              <div key={i} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-baum-100 rounded-full flex items-center justify-center text-baum-500 mb-2">
                    <Icon size={24} />
                  </div>
                  <p className="font-bold text-text-primary text-xs md:text-sm">{step.title}</p>
                  <p className="text-[10px] md:text-xs text-text-tertiary mt-0.5 max-w-[80px] md:max-w-none">{step.description}</p>
                </div>
                {i < usageFlowData.steps.length - 1 && (
                  <div className="text-baum-300 mx-2 md:mx-4 text-xl md:text-2xl">→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
