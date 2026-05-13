import { TrendingUp, Quote, Users } from 'lucide-react';
import { testimonialData } from '@/content';

export const Testimonial = () => {
  const { items } = testimonialData;

  return (
    <section className="py-24 bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-baum-900/50 px-4 py-2 rounded-full mb-6 border border-baum-700">
            <Users className="w-4 h-4 text-baum-300" />
            <span className="text-baum-200 text-sm font-bold">会員・ゲスト登壇者の実績</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">数字が、証明している</h2>
          <p className="text-stone-400 mt-3 text-sm">交流会・ウェビナーから生まれた実際の変化</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-stone-800/70 rounded-2xl p-6 border border-stone-700 flex flex-col">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center bg-stone-700/50 rounded-xl p-3">
                  <p className="text-stone-400 text-xs mb-1">before</p>
                  <p className="text-sm font-bold text-stone-300 leading-snug">{item.result.before}</p>
                </div>
                <div className="text-center bg-baum-900/60 rounded-xl p-3 border border-baum-700/50">
                  <p className="text-baum-400 text-xs mb-1 font-bold">after</p>
                  <p className="text-sm font-bold text-baum-200 leading-snug">{item.result.after}</p>
                </div>
              </div>
              <div className="bg-baum-800/30 rounded-lg px-3 py-2 mb-5 text-center">
                <span className="text-baum-300 text-xs font-bold">{item.result.detail}</span>
              </div>

              <div className="relative flex-1">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-stone-600" />
                <blockquote className="text-stone-300 text-sm leading-relaxed pl-5">
                  {item.quote}
                </blockquote>
              </div>

              <div className="mt-5 pt-4 border-t border-stone-700">
                <p className="text-white font-bold text-sm">{item.name}</p>
                <p className="text-stone-400 text-xs mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-stone-800/60 rounded-full px-5 py-2 border border-stone-700">
            <TrendingUp className="w-4 h-4 text-baum-400" />
            <span className="text-stone-300 text-sm">和歌山・足立区・名古屋・奈良・下関・岡山・東京杉並など全国から参加</span>
          </div>
        </div>
      </div>
    </section>
  );
};
