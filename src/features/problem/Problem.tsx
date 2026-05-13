// React / Library imports
import { CheckCircle, Star, X } from 'lucide-react';
import { problemData } from '@/content';

export const Problem = () => {
  return (
    <section className="py-20 bg-bg-cream">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
            {problemData.title}
          </h2>
          <p className="text-text-tertiary mt-4">
            {problemData.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-card p-8 border-l-8 border-slate-300 hover-lift animate-fade-up">
            <div className="flex items-center mb-6">
              <span className="bg-slate-200 text-slate-600 text-sm font-bold px-3 py-1 rounded-full">{problemData.before.label}</span>
              <span className="ml-3 text-2xl">😰</span>
            </div>
            <ul className="space-y-4">
              {problemData.before.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <X className="text-red-500 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <p className="text-sm text-text-tertiary mb-2">{problemData.before.costCalculation.label}</p>
              <p className="text-2xl font-bold text-red-500">
                {problemData.before.costCalculation.formula}
                <br />
                <span className="text-3xl">{problemData.before.costCalculation.total}</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-card-hover p-8 border-l-8 border-baum-500 relative overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Star size={100} className="text-baum-400" fill="currentColor" />
            </div>
            <div className="flex items-center mb-6 relative z-10">
              <span className="gradient-cta text-white text-sm font-bold px-3 py-1 rounded-full">{problemData.after.label}</span>
              <span className="ml-3 text-2xl">😎</span>
            </div>
            <ul className="space-y-4 relative z-10">
              {problemData.after.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-text-secondary">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-baum-200 relative z-10">
              <p className="text-sm text-text-tertiary mb-2">{problemData.after.costSummary.label}</p>
              <p className="text-2xl font-bold text-baum-500">
                {problemData.after.costSummary.amount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

