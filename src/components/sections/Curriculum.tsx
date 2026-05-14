import { Brain, Handshake, Laptop, Smartphone, FileText, Users, CheckCircle } from 'lucide-react';
import { curriculumData } from '@/content';

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Brain, Handshake, Laptop, Smartphone, FileText, Users,
};

export const Curriculum = () => {
  const { title, subtitle, sessions } = curriculumData;

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-navy-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-teal-200 mb-4">
            CURRICULUM
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight mt-3">
            {title}
          </h2>
          <p className="text-text-tertiary mt-4 text-sm md:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {sessions.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Brain;
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.no}
                className="bg-white rounded-2xl shadow-card overflow-hidden animate-fade-up hover-lift"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-0 ${reverse ? 'md:[direction:rtl]' : ''}`}>
                  {/* Visual block */}
                  <div className={`bg-gradient-to-br ${s.gradient} p-8 md:p-10 text-white flex flex-col justify-center relative overflow-hidden min-h-[260px] [direction:ltr]`}>
                    {/* Background photo */}
                    {s.image && (
                      <img
                        src={s.image}
                        alt=""
                        aria-hidden="true"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                    )}
                    {/* Gradient overlay for readability */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-80 pointer-events-none`} />
                    {/* Decorative background */}
                    <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-bold tracking-widest opacity-80 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full">
                          第{i + 1}回
                        </span>
                      </div>
                      <div className="flex items-end gap-4 mb-4">
                        <span className="text-7xl md:text-8xl font-black leading-none">{s.no}</span>
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-white/15 border border-white/25 rounded-2xl flex items-center justify-center mb-1 backdrop-blur-sm">
                          <Icon size={36} />
                        </div>
                      </div>
                      <p className="text-xs md:text-sm font-bold opacity-90 tracking-wide">{s.tagline}</p>
                    </div>
                  </div>

                  {/* Content block */}
                  <div className="p-8 md:p-10 flex flex-col justify-center [direction:ltr]">
                    <h3 className="text-xl md:text-2xl font-bold text-navy-500 mb-4 leading-snug">{s.title}</h3>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-5">{s.body}</p>

                    <ul className="space-y-2 pt-4 border-t border-navy-100">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle className="text-teal-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-text-tertiary text-xs md:text-sm mt-12">
          ※ カリキュラムは時期により内容を最適化します。最新の月次テーマは会員サイトでご確認いただけます。
        </p>
      </div>
    </section>
  );
};
