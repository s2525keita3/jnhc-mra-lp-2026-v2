import { Users, TrendingUp, Building2, Landmark, CheckCircle } from 'lucide-react';
import { roadmapData } from '@/content';
import { CtaBanner } from './CtaBanner';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users, TrendingUp, Building2, Landmark,
};

export const Roadmap = () => {
  const { eyebrow, title, lead, logic, benchmarks, transformation } = roadmapData;

  return (
    <>
      <section className="py-24 bg-navy-50">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-16">
            <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-6">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-text-primary" style={{ whiteSpace: 'pre-line' }}>
              {title}
            </h2>
            <p className="text-text-tertiary mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {lead}
            </p>
          </div>

          {/* Vertical timeline - Why 1億 */}
          <div className="relative mb-20">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-teal-200 hidden md:block" />

            <div className="space-y-6">
              {logic.map((item, i) => (
                <div key={item.number} className="flex gap-5 md:gap-8">
                  {/* Circle number */}
                  <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0 relative z-10 shadow-cta">
                    {i + 1}
                  </div>
                  <div className="bg-white rounded-2xl border border-navy-100 p-5 md:p-6 flex-1 shadow-card">
                    <div className="text-teal-600 font-bold text-sm mb-1">{item.value}</div>
                    <h3 className="font-bold text-text-primary text-base md:text-lg mb-2">{item.label}</h3>
                    <p className="text-text-tertiary text-sm leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benchmarks */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-3 text-text-primary">
              年商1億ステーションの「各分野レベル」
            </h3>
            <p className="text-center text-text-tertiary text-sm mb-10">各分野で達成すべき水準を明確化しました</p>
            <div className="grid md:grid-cols-2 gap-4">
              {benchmarks.map((item) => {
                const Icon = iconMap[item.icon] ?? Users;
                return (
                  <div key={item.area} className="bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-card">
                    <div className="flex items-center gap-3 px-5 py-4 bg-navy-500">
                      <Icon className="text-teal-300 w-5 h-5 flex-shrink-0" />
                      <span className="font-bold text-white">{item.area}</span>
                    </div>
                    <div className="p-5 grid sm:grid-cols-2 gap-4">
                      <div className="min-w-0">
                        <p className="text-xs text-gray-400 font-bold mb-2 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-gray-300 inline-block" />
                          今の状態
                        </p>
                        <p className="text-sm text-gray-500 leading-relaxed break-words">{item.current}</p>
                      </div>
                      <div className="relative pl-4 border-l-2 border-teal-200 min-w-0">
                        <p className="text-xs text-teal-600 font-bold mb-2 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-teal-500 inline-block" />
                          目指すレベル
                        </p>
                        <p className="text-sm text-text-primary leading-relaxed font-medium break-words">{item.target}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Transformation - 参加後の変化 */}
          <div className="bg-navy-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold">{transformation.title}</h3>
              <p className="text-navy-200 mt-3 text-sm">{transformation.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {transformation.steps.map((step, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <div className="inline-block bg-teal-500/20 text-teal-300 text-xs font-bold px-3 py-1 rounded-full mb-4 border border-teal-400/30">
                    {step.period}
                  </div>
                  <ul className="space-y-3">
                    {step.changes.map((change, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                        <CheckCircle className="text-teal-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                        {change}
                      </li>
                    ))}
                  </ul>
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
