// React / Library imports
import { HelpCircle } from 'lucide-react';
import { faqData } from '@/content';

export const FAQ = () => {
  return (
    <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-12 flex justify-center items-center animate-fade-up">
                <HelpCircle className="mr-3 text-baum-500"/> よくある質問
            </h2>
            <div className="space-y-4 text-left">
                {faqData.map((faq, index) => (
                  <details key={index} className="group p-5 bg-bg-orange-light rounded-xl border border-baum-100 cursor-pointer transition-all hover:shadow-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <summary className="font-bold text-text-primary list-none flex justify-between items-center text-lg">
                        {faq.question}
                        <span className="transition group-open:rotate-180 text-text-tertiary">▼</span>
                    </summary>
                    <p className="text-sm text-text-secondary mt-4 pt-4 border-t border-baum-100 leading-relaxed">
                        {faq.answer}
                    </p>
                  </details>
                ))}
            </div>
        </div>
    </section>
  );
};

