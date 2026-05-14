import { CheckCircle, X } from 'lucide-react';
import { problemData } from '@/content';
import { CtaBanner } from './CtaBanner';

export const Problem = () => {
  return (
    <>
      <section className="py-20 bg-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-up">
            <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-100 px-3 py-1 rounded-full border border-teal-200 mb-4">
              現状の課題
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
              {problemData.title}
            </h2>
            <p className="text-text-tertiary mt-4 max-w-2xl mx-auto leading-relaxed">
              {problemData.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-2xl shadow-card p-6 md:p-8 border-t-4 border-gray-300 animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-gray-100 text-gray-600 text-sm font-bold px-3 py-1 rounded-full">{problemData.before.label}</span>
                <span className="text-2xl">😰</span>
              </div>
              <ul className="space-y-4">
                {problemData.before.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 pb-3 border-b border-gray-50 last:border-0 last:pb-0">
                    <X className="text-red-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="bg-white rounded-2xl shadow-card-hover p-6 md:p-8 border-t-4 border-teal-500 animate-fade-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="gradient-cta text-white text-sm font-bold px-3 py-1 rounded-full">{problemData.after.label}</span>
                <span className="text-2xl">😊</span>
              </div>
              <ul className="space-y-4">
                {problemData.after.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 pb-3 border-b border-teal-50 last:border-0 last:pb-0">
                    <CheckCircle className="text-teal-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t border-teal-100">
                <p className="text-xl font-bold text-navy-500">{problemData.after.price}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBanner message="「持続可能なステーション」を目指す経営者に向けた実践コミュニティです" />
    </>
  );
};
