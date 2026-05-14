import { TrendingUp } from 'lucide-react';
import { testimonialData } from '@/content';

export const Testimonial = () => {
  const { items } = testimonialData;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-6">
            会員・ゲスト登壇者の実績
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4">数字が、証明している</h2>
          <p className="text-text-tertiary mt-3 text-sm">交流会・ウェビナーから生まれた実際の変化</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-card flex flex-col overflow-hidden hover-lift">
              {/* Top color bar */}
              <div className="h-1.5 gradient-cta" />

              <div className="p-6 flex flex-col flex-1">
                {/* Result numbers */}
                <div className="flex gap-3 mb-5">
                  <div className="flex-1 text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <p className="text-gray-400 text-xs mb-1">before</p>
                    <p className="text-sm font-bold text-gray-600 leading-snug">{item.result.before}</p>
                  </div>
                  <div className="flex items-center text-teal-400 font-bold text-lg">→</div>
                  <div className="flex-1 text-center bg-teal-50 rounded-xl p-3 border border-teal-200">
                    <p className="text-teal-600 text-xs mb-1 font-bold">after</p>
                    <p className="text-sm font-bold text-teal-700 leading-snug">{item.result.after}</p>
                  </div>
                </div>
                <div className="bg-navy-50 rounded-lg px-3 py-2 mb-5 text-center border border-navy-100">
                  <span className="text-navy-600 text-xs font-bold">{item.result.detail}</span>
                </div>

                {/* Quote */}
                <div className="relative flex-1">
                  <span className="text-5xl text-teal-100 font-serif leading-none absolute -top-2 -left-1 select-none">"</span>
                  <blockquote className="text-text-secondary text-sm leading-relaxed pl-4 pt-3">
                    {item.quote}
                  </blockquote>
                </div>

                {/* Attribution */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-navy-500 font-bold text-sm">{item.name}</p>
                  <p className="text-text-tertiary text-xs mt-0.5">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-navy-50 rounded-full px-5 py-2 border border-navy-100">
            <TrendingUp className="w-4 h-4 text-teal-500" />
            <span className="text-text-secondary text-sm">和歌山・足立区・名古屋・奈良・下関・岡山・東京杉並など全国から参加</span>
          </div>
        </div>
      </div>
    </section>
  );
};
