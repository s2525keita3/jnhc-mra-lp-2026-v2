// React / Library imports
import { useMemo } from 'react';

// Components
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { heroData } from '@/content';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Hero = () => {
  const titleLines = useMemo(() => heroData.title.split('\n'), []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 gradient-bg text-text-primary overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-baum-500 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-baum-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 md:space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border-2 border-baum-500 text-baum-600 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-baum-500 rounded-full animate-pulse"></span>
            {heroData.badge}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight">
            {titleLines.map((line, i) => (
              <span key={i} className={i === 0 ? 'text-text-primary' : 'block mt-2 gradient-text'}>
                {line}
              </span>
            ))}
          </h1>
          
          <p className="text-base md:text-lg text-text-secondary leading-relaxed whitespace-pre-line">
            {heroData.subtitle}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 pt-2">
            {heroData.stats.map((stat, i) => (
              <div 
                key={i} 
                className={`rounded-xl p-4 text-center transition-all duration-300 ${
                  stat.highlight 
                    ? 'bg-gradient-to-br from-baum-500 to-baum-600 text-white shadow-cta transform scale-105' 
                    : 'bg-white border border-baum-100 shadow-card hover:shadow-card-hover hover-lift'
                }`}
              >
                {stat.value && (
                  <div className={`text-xl md:text-2xl font-bold ${stat.highlight ? 'text-white' : 'text-baum-500'}`}>
                    {stat.value}{stat.unit && <span className="text-base md:text-lg ml-0.5">{stat.unit}</span>}
                    {stat.valueSubtext && (
                      <span className={`text-base md:text-lg ml-1 ${stat.highlight ? 'text-white' : 'text-baum-500'}`}>
                        {stat.valueSubtext}
                      </span>
                    )}
                  </div>
                )}
                <div className={`text-[10px] md:text-xs ${stat.value ? 'mt-1' : 'mt-0'} leading-tight ${stat.highlight ? 'text-white/90' : 'text-text-tertiary'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 md:pt-4">
            <RichCtaButton text={heroData.cta.main} subtext={heroData.cta.sub} href={STRIPE_CHECKOUT_URL} />
          </div>
        </div>
        
        <div className="hidden md:block relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-baum-400 rounded-2xl blur-xl opacity-20"></div>
          <img 
            src="/hero-image.png" 
            alt="経営者同士のミーティング" 
            className="relative rounded-2xl shadow-lg border-4 border-white object-cover h-96 w-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

