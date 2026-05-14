import { curriculumData } from '@/content';

export const Curriculum = () => {
  const { title, subtitle, sessions } = curriculumData;

  return (
    <section id="curriculum" className="py-20 md:py-24 bg-navy-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
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

        <div className="space-y-5">
          {sessions.map((s, i) => (
            <div
              key={s.no}
              className="bg-white rounded-2xl border border-navy-100 shadow-card overflow-hidden hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="grid md:grid-cols-[140px_1fr] gap-0">
                {/* Number block */}
                <div className="gradient-cta text-white p-5 md:p-6 flex md:flex-col items-center justify-center text-center">
                  <div className="text-xs font-bold tracking-widest opacity-80 mr-3 md:mr-0 md:mb-2">第{i + 1}回</div>
                  <div className="text-3xl md:text-5xl font-black leading-none">{s.no}</div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-7">
                  <div className="text-teal-600 text-xs md:text-sm font-bold mb-1">{s.tagline}</div>
                  <h3 className="text-lg md:text-xl font-bold text-navy-500 mb-3 leading-snug">{s.title}</h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-text-tertiary text-xs md:text-sm mt-10">
          ※ カリキュラムは時期により内容を最適化します。最新の月次テーマは会員サイトでご確認いただけます。
        </p>
      </div>
    </section>
  );
};
