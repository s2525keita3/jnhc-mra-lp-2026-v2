// React / Library imports
import { useState, useEffect } from 'react';

// Constants / Config
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

// Components
import { RichCtaButton } from '@/shared/components/RichCtaButton';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-sm md:text-base font-bold leading-tight text-text-primary transition-colors">
          一般社団法人<br className="md:hidden" /> 全国訪問看護経営研究協会
        </div>
        <div className="hidden md:block">
            <RichCtaButton text="会員申し込み" href={STRIPE_CHECKOUT_URL} className="!px-6 !py-2 text-sm" />
        </div>
        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="md:hidden gradient-cta text-white font-bold py-2 px-4 rounded-[50px] text-sm shadow-cta"
        >
            申し込み
        </a>
      </div>
    </header>
  );
};

