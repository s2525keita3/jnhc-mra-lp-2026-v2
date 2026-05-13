import { closingData } from '@/content';
import { RichCtaButton } from '@/shared/components';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Closing = () => {
  return (
    <section className="py-20 bg-bg-cream">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-card-hover border-2 border-baum-500 animate-fade-up">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            {closingData.message}
          </p>
          <div className="max-w-md mx-auto">
            <RichCtaButton 
              text={closingData.cta.main} 
              subtext={closingData.cta.sub}
              href={STRIPE_CHECKOUT_URL}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};






