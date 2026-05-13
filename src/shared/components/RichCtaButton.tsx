// React / Library imports
import { ArrowRight } from 'lucide-react';

interface RichCtaButtonProps {
  text: string;
  subtext?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const RichCtaButton = ({ text, subtext, onClick, href, className }: RichCtaButtonProps) => {
  const baseClasses = "relative group overflow-hidden rounded-[50px] transform transition-all duration-300 shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover active:translate-y-0";
  const gradientClasses = "gradient-cta";
  const isExternalLink = href?.startsWith('http');
  
  const content = (
    <>
      <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-opacity" />
      
      <div className="relative flex flex-col items-center justify-center px-8 py-4 md:py-5">
        <span className="font-bold text-white text-base md:text-lg tracking-wide flex items-center">
          {text} <ArrowRight className="ml-2 w-5 h-5" />
        </span>
        {subtext && (
          <span className="text-[10px] md:text-xs text-white/90 font-semibold mt-0.5 uppercase tracking-wider">
            {subtext}
          </span>
        )}
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternalLink ? '_blank' : undefined}
        rel={isExternalLink ? 'noreferrer noopener' : undefined}
        className={`${baseClasses} ${gradientClasses} ${className} block text-center`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${gradientClasses} ${className} w-full`}>
      {content}
    </button>
  );
};

