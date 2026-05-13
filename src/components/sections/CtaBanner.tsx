import { ArrowRight } from 'lucide-react';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants/stripe';

interface CtaBannerProps {
  message?: string;
}

export const CtaBanner = ({ message = "あなたも「年商1億」への道を一緒に歩みませんか？" }: CtaBannerProps) => (
  <div className="bg-baum-50 border-t border-b border-baum-200 py-8">
    <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-text-primary font-bold text-base md:text-lg text-center sm:text-left">{message}</p>
      <a
        href={STRIPE_CHECKOUT_URL}
        className="flex-shrink-0 gradient-cta text-white font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:opacity-90 transition-opacity shadow-cta whitespace-nowrap"
      >
        今すぐ仲間になる
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
    <p className="text-center text-text-tertiary text-xs mt-3">月額5,500円（税込）・6ヶ月経過後は解約可能</p>
  </div>
);
