// React / Library imports
import { useState, useEffect } from 'react';

// Constants / Config
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

// Components
import { RichCtaButton } from '@/shared/components/RichCtaButton';

export const StickyCta = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t-4 border-baum-500 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="hidden md:block flex-1">
          <p className="text-sm font-bold text-text-primary">オールインワン・会員制度</p>
          <p className="text-xs text-text-tertiary">月額10,000円で全ての経営資源をワンパッケージ化</p>
        </div>
        <div className="flex-1 md:flex-none md:w-64 w-full">
            <RichCtaButton text="今すぐ、スマートな経営環境を手に入れる" subtext="月額10,000円で全て無料" href={STRIPE_CHECKOUT_URL} className="!py-3 text-sm" />
        </div>
      </div>
    </div>
  );
};

