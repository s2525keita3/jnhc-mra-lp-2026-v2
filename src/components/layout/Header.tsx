import { useState, useEffect, useCallback } from 'react';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navItems = [
    { label: 'コース概要', href: '#course-intro' },
    { label: 'カリキュラム', href: '#curriculum' },
    { label: '受講者の声', href: '#testimonial' },
    { label: '講師紹介', href: '#lecturers' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-white/80 backdrop-blur-sm py-3'}`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center gap-3">
        <div className="text-xs md:text-sm font-bold leading-tight text-text-primary flex-shrink-0">
          一般社団法人<br className="md:hidden" /> 全国訪問看護経営研究協会
        </div>

        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-bold text-text-secondary hover:text-teal-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={STRIPE_CHECKOUT_URL}
          target="_blank"
          rel="noreferrer noopener"
          className="gradient-cta text-white text-xs md:text-sm font-bold px-4 md:px-6 py-2 md:py-2.5 rounded-full hover:opacity-90 transition shadow-cta flex-shrink-0"
        >
          会員申し込み
        </a>
      </div>
    </header>
  );
};
