import { CheckCircle, CreditCard, Lock, Mail } from 'lucide-react';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';
import { pricingData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { UsageFlow } from '@/components/sections/UsageFlow';

export const Pricing = () => {
  return (
    <section id="apply" className="gradient-bg relative">
      <UsageFlow />
      
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow-card-hover overflow-hidden border-4 border-baum-500 relative hover-lift animate-fade-up">
            <div className="absolute top-0 right-0 gradient-cta text-white font-bold text-xs px-6 py-2 rounded-bl-xl shadow-cta z-20 tracking-widest uppercase">
              Standard Membership
            </div>

            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">{pricingData.planName}</h2>
                <p className="text-text-tertiary text-sm mb-6">全国の仲間と共に成長する実践コミュニティ</p>
                
                <ul className="space-y-3">
                  {pricingData.features.map((item, i) => (
                    <li key={i} className="flex items-center text-text-secondary text-sm font-medium">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-2 bg-bg-cream p-8 md:p-10 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-baum-100">
                <p className="text-text-tertiary text-xs font-bold mb-2">月額会費 (税込)</p>
                <div className="flex items-end text-text-primary mb-4">
                  <span className="text-5xl md:text-6xl font-bold tracking-tighter">{pricingData.monthlyPrice.toLocaleString()}</span>
                  <span className="text-xl font-bold mb-3 ml-1">円</span>
                </div>
                
                <RichCtaButton 
                  text="今すぐ仲間になる" 
                  subtext="Stripe決済ページへ"
                  href={STRIPE_CHECKOUT_URL}
                  className="w-full"
                />
                
                <div className="mt-4 space-y-2">
                  <p className="flex items-center justify-center gap-1.5 text-xs text-text-tertiary">
                    <Lock size={14} className="text-baum-500" />
                    <span>Stripeで安全に決済</span>
                  </p>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-text-tertiary">
                    <Mail size={14} className="text-baum-500" />
                    <span>領収書は自動送付</span>
                  </p>
                </div>
                
                <div className="mt-6 text-[10px] text-text-tertiary text-center space-y-2">
                  <p className="flex items-center justify-center gap-1">
                    <CreditCard size={12} /> クレジットカード自動決済
                  </p>
                  <div className="border-t border-baum-100 pt-2 mt-2 text-left leading-relaxed text-text-light">
                    <p>※ 毎月自動引き落とし</p>
                    <p>※ <strong>最低6ヶ月間</strong>継続。7ヶ月目以降は会員サイトよりいつでも解約可能。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
