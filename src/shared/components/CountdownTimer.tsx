import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  totalSlots?: number;
  remainingSlots?: number;
  className?: string;
}

export const CountdownTimer = ({ 
  totalSlots = 100, 
  remainingSlots = 43,
  className = "" 
}: CountdownTimerProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const percentage = (remainingSlots / totalSlots) * 100;

  return (
    <div className={`bg-white rounded-xl p-6 border-2 border-baum-500 shadow-card-hover ${className}`}>
      <div className="text-center mb-4">
        <p className="text-sm text-text-tertiary font-bold mb-2">限定100名 → 残り</p>
        <div className="text-4xl md:text-5xl font-bold text-baum-500 mb-2">
          {remainingSlots}<span className="text-2xl text-text-primary">名</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full gradient-cta transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-xs text-text-tertiary mt-2">
          残り{remainingSlots}名で締め切り
        </p>
      </div>
    </div>
  );
};








