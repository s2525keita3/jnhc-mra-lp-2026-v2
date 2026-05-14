import { useMemo } from 'react';
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { heroData } from '@/content';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Hero = () => {
  const titleLines = useMemo(() => heroData.title.split('\n'), []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-white text-text-primary overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 gradient-cta" />

      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[150px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm mb-8 animate-fade-up">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          {heroData.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.2] tracking-tight mb-6 animate-fade-up">
          {titleLines.map((line, i) => (
            <span key={i} className={i === 0 ? 'text-text-primary' : 'block mt-2 gradient-text'}>
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto whitespace-pre-line animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {heroData.subtitle}
        </p>

        {/* Stats strip */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-up" style={{ animationDelay: '0.15s' }}>
          {heroData.stats.map((stat, i) => (
            <div
              key={i}
              className={`rounded-xl px-5 py-3 text-center min-w-[110px] transition-all ${
                stat.highlight
                  ? 'gradient-cta text-white shadow-cta'
                  : 'bg-navy-50 border border-navy-100'
              }`}
            >
              {stat.value && (
                <div className={`text-xl font-bold ${stat.highlight ? 'text-white' : 'text-navy-500'}`}>
                  {stat.value}
                  {stat.unit && <span className="text-base ml-0.5">{stat.unit}</span>}
                  {stat.valueSubtext && <span className="text-sm ml-1">{stat.valueSubtext}</span>}
                </div>
              )}
              <div className={`text-xs mt-0.5 leading-tight ${stat.highlight ? 'text-white/80' : 'text-text-tertiary'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-sm mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <RichCtaButton text={heroData.cta.main} subtext={heroData.cta.sub} href={STRIPE_CHECKOUT_URL} />
        </div>

        {/* Social proof */}
        <p className="mt-6 text-xs text-text-light animate-fade-up" style={{ animationDelay: '0.25s' }}>
          和歌山・足立区・名古屋・奈良・下関・岡山・東京杉並など全国から参加
        </p>
      </div>
    </section>
  );
};
