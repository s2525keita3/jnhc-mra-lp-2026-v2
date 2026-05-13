import { CheckCircle, Users, Heart, FileText } from 'lucide-react';
import { closingData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

const icons = { Users, Heart, FileText };

export const Closing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-bg-cream via-white to-bg-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-baum-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-baum-400 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">{closingData.headline}</h2>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-baum-500 via-baum-400 to-baum-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-[0_20px_60px_rgba(255,107,0,0.2)] border-4 border-baum-500 animate-fade-up">
            <div className="mb-8">
              <p className="text-base md:text-lg text-text-secondary leading-relaxed whitespace-pre-line">{closingData.message}</p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-baum-100">
                {closingData.benefits.map((benefit, i) => {
                  const Icon = icons[benefit.icon as keyof typeof icons] || CheckCircle;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-baum-100 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="text-baum-500" size={20} />
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
      </div>
    </section>
  );
};
