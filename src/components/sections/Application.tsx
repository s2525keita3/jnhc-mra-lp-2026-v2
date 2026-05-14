import { CheckCircle, CreditCard, Lock, Mail } from 'lucide-react';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';
import { pricingData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';

export const Application = () => {
  return (
    <section id="apply" className="py-20 md:py-24 bg-navy-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-teal-200 mb-4">
            APPLICATION
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3">会員申し込み</h2>
          <p className="text-text-tertiary mt-4 text-sm md:text-base">Stripeで安全に決済いただけます</p>
        </div>

        <div className="bg-white rounded-2xl shadow-card-hover overflow-hidden border-t-4 border-teal-500 animate-fade-up">
          <div className="grid md:grid-cols-5 h-full">
            <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">{pricingData.planName}</h3>
              <p className="text-text-tertiary text-sm mb-6">全国の仲間と共に成長する実践コミュニティ</p>

              <ul className="space-y-3">
                {pricingData.features.map((item, i) => (
                  <li key={i} className="flex items-center text-text-secondary text-sm font-medium">
                    <CheckCircle className="text-teal-500 mr-3 flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-2 bg-teal-50 p-8 md:p-10 flex flex-col justify-center items-center border-t md:border-t-0 md:border-l border-teal-100">
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
                  <Lock size={14} className="text-teal-500" />
                  <span>Stripeで安全に決済</span>
                </p>
                <p className="flex items-center justify-center gap-1.5 text-xs text-text-tertiary">
                  <Mail size={14} className="text-teal-500" />
                  <span>領収書は自動送付</span>
                </p>
                <p className="flex items-center justify-center gap-1.5 text-xs text-text-tertiary">
                  <CreditCard size={14} className="text-teal-500" />
                  <span>クレジットカード自動決済</span>
                </p>
              </div>

              <div className="mt-6 text-[10px] text-text-light text-center leading-relaxed">
                <p>※ 毎月自動引き落とし</p>
                <p>※ <strong>最低6ヶ月間</strong>継続。7ヶ月目以降は会員サイトよりいつでも解約可能。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-text-tertiary mb-3">ご不明な点はお気軽にお問い合わせください</p>
          <a
            href="mailto:info@jnhc-mra.example.com"
            className="inline-flex items-center gap-2 bg-white border border-navy-200 text-navy-600 font-bold px-6 py-3 rounded-full hover:bg-navy-50 transition-colors"
          >
            <Mail size={16} />
            お問い合わせフォーム
          </a>
          <p className="text-xs text-text-light mt-3">※ 担当者より24時間以内に折り返しご連絡します。</p>
        </div>
      </div>
    </section>
  );
};
