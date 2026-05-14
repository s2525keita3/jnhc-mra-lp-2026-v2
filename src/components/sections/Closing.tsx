import { CheckCircle, Users, Heart, FileText } from 'lucide-react';
import { closingData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

const icons = { Users, Heart, FileText };

export const Closing = () => {
  return (
    <section className="py-24 bg-navy-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-200 rounded-full blur-[120px] opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">{closingData.headline}</h2>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-card-hover border-t-4 border-teal-500 animate-fade-up">
          <div className="mb-8">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed whitespace-pre-line">{closingData.message}</p>

            <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              {closingData.benefits.map((benefit, i) => {
                const Icon = icons[benefit.icon as keyof typeof icons] || CheckCircle;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-teal-50 border border-teal-200 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="text-teal-600" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text-primary">{benefit.title}</p>
                      <p className="text-xs text-text-tertiary">{benefit.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            <RichCtaButton text={closingData.cta.main} subtext={closingData.cta.sub} href={STRIPE_CHECKOUT_URL} className="w-full" />

            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-text-tertiary">
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-500" />
                <span>SSL暗号化</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle size={14} className="text-green-500" />
                <span>安全な決済</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
