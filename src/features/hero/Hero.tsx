// React / Library imports
import React from 'react';

// Components
import { RichCtaButton } from '@/shared/components';
import { heroData } from '@/content';

export const Hero = () => {
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
            {heroData.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {i === 0 ? (
                  <span className="text-text-primary">{line}</span>
                ) : (
                  <span className="block mt-2 gradient-text">{line}</span>
                )}
              </React.Fragment>
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
                <div className={`text-xl md:text-2xl font-bold ${stat.highlight ? 'text-white' : 'text-baum-500'}`}>
                  {stat.value}{stat.unit && <span className="text-base md:text-lg ml-0.5">{stat.unit}</span>}
                </div>
                <div className={`text-[10px] md:text-xs mt-1 leading-tight ${stat.highlight ? 'text-white/90' : 'text-text-tertiary'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 md:pt-4">
            <RichCtaButton text={heroData.cta.main} subtext={heroData.cta.sub} href="#apply" />
          </div>
        </div>
        
        <div className="hidden md:block relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute -inset-4 bg-baum-400 rounded-2xl blur-xl opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Dashboard and Team" 
            className="relative rounded-2xl shadow-lg border-4 border-white object-cover h-96 w-full"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
};

