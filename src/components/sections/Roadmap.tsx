import { Users, TrendingUp, Building2, Landmark, CheckCircle, ArrowRight } from 'lucide-react';
import { roadmapData } from '@/content';
import { CtaBanner } from './CtaBanner';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, TrendingUp, Building2, Landmark,
};

export const Roadmap = () => {
  const { eyebrow, title, lead, logic, benchmarks, transformation } = roadmapData;

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">
            <span className="text-baum-600 font-bold tracking-widest text-sm uppercase bg-baum-50 px-3 py-1 rounded-full border border-baum-200">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-text-primary" style={{whiteSpace:'pre-line'}}>
              {title}
            </h2>
            <p className="text-text-tertiary mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {lead}
            </p>
          </div>

          {/* Why 1億 logic */}
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {logic.map((item) => (
              <div key={item.number} className="bg-baum-50 rounded-2xl p-7 border border-baum-100">
                <div className="text-baum-500 font-black text-5xl mb-3">{item.number}</div>
                <div className="text-baum-700 font-bold text-lg md:text-xl mb-1 leading-snug">{item.value}</div>
                <div className="text-text-primary font-bold text-sm md:text-base mb-3">{item.label}</div>
                <p className="text-text-tertiary text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Benchmarks */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-text-primary">
              年商1億ステーションの「各分野レベル」
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {benchmarks.map((item) => {
                const Icon = iconMap[item.icon] ?? Users;
                return (
                  <div key={item.area} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center gap-3 px-5 py-4 bg-baum-50 border-b border-baum-100">
                      <Icon className="text-baum-500 w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-text-primary">{item.area}</span>
                    </div>
                    <div className="p-5 grid sm:grid-cols-2 gap-4">
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400 font-bold mb-2">今の状態</p>
                        <p className="text-sm text-slate-500 leading-relaxed break-words">{item.current}</p>
                      </div>
                      <div className="relative pl-4 border-l-2 border-baum-200 min-w-0">
                        <p className="text-xs text-baum-600 font-bold mb-2">目指すレベル</p>
                        <p className="text-sm text-text-primary leading-relaxed font-medium break-words">{item.target}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transformation timeline */}
          <div className="bg-stone-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold">{transformation.title}</h3>
              <p className="text-stone-400 mt-3 text-sm">{transformation.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {transformation.steps.map((step, i) => (
                <div key={i} className="relative">
                  {i < transformation.steps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-5 w-6 h-6 text-baum-600 z-10" />
                  )}
                  <div className="bg-stone-800/70 rounded-xl p-6 border border-stone-700 h-full">
                    <div className="inline-block bg-baum-700/40 text-baum-300 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-baum-600/40">
                      {step.period}
                    </div>
                    <ul className="space-y-3">
                      {step.changes.map((change, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-stone-200">
                          <CheckCircle className="text-baum-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <CtaBanner message="6〜12ヶ月後の自分のステーションを変えたい方へ" />
    </>
  );
};
