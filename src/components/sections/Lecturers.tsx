import { User, Briefcase, GraduationCap, Sparkles } from 'lucide-react';
import { lecturersData } from '@/content';

const placeholderGradients = [
  'from-teal-500 to-teal-700',
  'from-navy-500 to-navy-700',
  'from-teal-600 to-navy-700',
];
const placeholderIcons = [GraduationCap, Briefcase, Sparkles];

export const Lecturers = () => {
  const { title, subtitle, items } = lecturersData;

  return (
    <section id="lecturers" className="py-20 md:py-28 bg-teal-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-teal-200 mb-4">
            LECTURERS
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3">{title}</h2>
          <p className="text-text-tertiary mt-4 text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-6">
          {items.map((l, idx) => {
            const isPhoto = !!l.avatarSrc;
            const PlaceholderIcon = placeholderIcons[(idx - 1 + placeholderIcons.length) % placeholderIcons.length];
            const placeholderGrad = placeholderGradients[(idx - 1 + placeholderGradients.length) % placeholderGradients.length];
            return (
              <div key={l.id} className="bg-white rounded-3xl shadow-card overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: `${idx * 0.08}s` }}>
                <div className="grid md:grid-cols-[280px_1fr] gap-0">
                  {/* Avatar / Visual */}
                  {isPhoto ? (
                    <div className="relative bg-navy-100 min-h-[280px] md:min-h-full overflow-hidden">
                      <img
                        src={l.avatarSrc!}
                        alt={l.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ objectPosition: 'center 25%' }}
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent p-4 text-white">
                        <p className="text-xs font-bold opacity-80">代表理事</p>
                        <p className="text-lg font-bold">{l.name}</p>
                      </div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${placeholderGrad} flex flex-col items-center justify-center p-8 text-white relative overflow-hidden min-h-[280px]`}>
                      <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                      <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                      <div className="relative z-10 text-center">
                        <div className="w-28 h-28 bg-white/15 backdrop-blur-sm border-2 border-white/25 rounded-full flex items-center justify-center mx-auto mb-4">
                          <User className="w-14 h-14 text-white" strokeWidth={1.5} />
                        </div>
                        <p className="font-bold text-lg">{l.name}</p>
                        <p className="text-xs opacity-80 mt-1">{l.nameEn}</p>
                        <div className="mt-4 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                          <PlaceholderIcon className="w-3.5 h-3.5" />
                          <span className="text-[10px] font-bold tracking-widest">GUEST LECTURER</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col">
                    {!isPhoto && (
                      <div className="hidden md:block mb-3">
                        <p className="font-bold text-navy-500 text-xl">{l.name}</p>
                        <p className="text-[10px] text-text-tertiary tracking-widest">{l.nameEn}</p>
                      </div>
                    )}
                    {isPhoto && (
                      <div className="hidden md:block mb-3">
                        <p className="text-teal-600 font-bold tracking-wider text-xs">REPRESENTATIVE</p>
                        <p className="font-bold text-navy-500 text-xl md:text-2xl">{l.name} <span className="text-sm font-normal text-text-tertiary ml-2">{l.nameEn}</span></p>
                      </div>
                    )}
                    <p className="text-teal-600 text-xs md:text-sm font-bold mb-4">{l.role}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {l.qualifications.map((q, i) => (
                        <span key={i} className="text-[10px] md:text-xs bg-navy-50 text-navy-600 border border-navy-100 px-2.5 py-1 rounded-full">
                          {q}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4 flex-1">
                      {l.bio}
                    </p>

                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-[11px] md:text-xs text-text-tertiary font-bold mb-2">担当テーマ</p>
                      <div className="flex flex-wrap gap-1.5">
                        {l.themes.map((t, i) => (
                          <span key={i} className="text-[10px] md:text-xs text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-1 rounded">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-text-tertiary text-xs md:text-sm mt-8">
          ※ ゲスト講師A・B・Cはプライバシー保護のため匿名表記としています。実際の登壇者は会員サイトで公開しています。
        </p>
      </div>
    </section>
  );
};
