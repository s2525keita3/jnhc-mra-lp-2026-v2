import { User } from 'lucide-react';
import { lecturersData } from '@/content';

export const Lecturers = () => {
  const { title, subtitle, items } = lecturersData;

  return (
    <section id="lecturers" className="py-20 md:py-24 bg-teal-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-teal-200 mb-4">
            LECTURERS
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3">{title}</h2>
          <p className="text-text-tertiary mt-4 text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-6">
          {items.map((l) => (
            <div key={l.id} className="bg-white rounded-2xl border-t-4 border-teal-500 shadow-card overflow-hidden">
              <div className="grid md:grid-cols-[260px_1fr] gap-0">
                {/* Avatar */}
                <div className="bg-navy-50 flex flex-col items-center justify-center p-6 md:p-8 text-center min-h-[200px]">
                  {l.avatarSrc ? (
                    <img
                      src={l.avatarSrc}
                      alt={l.name}
                      className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full border-4 border-white shadow-md mb-4"
                      style={{ objectPosition: 'center 30%' }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white border-4 border-teal-100 flex items-center justify-center mb-4 shadow-sm">
                      <User className="w-16 h-16 text-teal-300" strokeWidth={1.5} />
                    </div>
                  )}
                  <p className="font-bold text-navy-500 text-base md:text-lg">{l.name}</p>
                  <p className="text-text-tertiary text-[10px] md:text-xs mt-1">{l.nameEn}</p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-teal-600 text-xs md:text-sm font-bold mb-3">{l.role}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {l.qualifications.map((q, i) => (
                      <span key={i} className="text-[10px] md:text-xs bg-navy-50 text-navy-600 border border-navy-100 px-2 py-1 rounded-full">
                        {q}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-text-secondary leading-relaxed mb-4">
                    {l.bio}
                  </p>

                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-[11px] md:text-xs text-text-tertiary font-bold mb-2">担当テーマ</p>
                    <div className="flex flex-wrap gap-1.5">
                      {l.themes.map((t, i) => (
                        <span key={i} className="text-[10px] md:text-xs text-teal-700 bg-teal-50 border border-teal-200 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-tertiary text-xs md:text-sm mt-8">
          ※ ゲスト講師A・B・Cはプライバシー保護のため匿名表記としています。実際の登壇者は会員サイトで公開しています。
        </p>
      </div>
    </section>
  );
};
