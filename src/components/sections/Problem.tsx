import { CheckCircle, X } from 'lucide-react';
import { problemData } from '@/content';
import { CtaBanner } from './CtaBanner';

export const Problem = () => {
  return (
    <>
      <section className="py-20 bg-bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
              {problemData.title}
            </h2>
            <p className="text-text-tertiary mt-4 max-w-2xl mx-auto leading-relaxed">
              {problemData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-card p-6 md:p-8 border-l-8 border-slate-300 hover-lift animate-fade-up">
              <div className="flex items-center mb-6">
                <span className="bg-slate-200 text-slate-600 text-sm font-bold px-3 py-1 rounded-full">{problemData.before.label}</span>
                <span className="ml-3 text-2xl">😰</span>
              </div>
              <ul className="space-y-4">
                {problemData.before.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="text-red-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-card-hover p-6 md:p-8 border-l-8 border-baum-500 hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <span className="gradient-cta text-white text-sm font-bold px-3 py-1 rounded-full">{problemData.after.label}</span>
                <span className="ml-3 text-2xl">😊</span>
              </div>
              <ul className="space-y-4">
                {problemData.after.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-baum-200">
                <p className="text-xl font-bold text-baum-500">{problemData.after.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner message="「持続可能なステーション」を目指す経営者に向けた実践コミュニティです" />
    </>
  );
};
