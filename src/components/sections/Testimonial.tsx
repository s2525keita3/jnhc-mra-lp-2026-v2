import { User, TrendingUp, Quote } from 'lucide-react';
import { testimonialData } from '@/content';

const avatarGradients = [
  'from-teal-400 to-teal-600',
  'from-navy-400 to-navy-600',
  'from-teal-500 to-navy-600',
];

export const Testimonial = () => {
  const { items } = testimonialData;

  return (
    <section id="testimonial" className="py-20 md:py-28 bg-navy-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-teal-100 rounded-full blur-[120px] opacity-30 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-navy-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-14">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-teal-200 mb-4">
            VOICE
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3">受講者の声</h2>
          <p className="text-text-tertiary mt-4 text-sm md:text-base">交流会・ウェビナーから生まれた実際の変化</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={item.id} className="bg-white rounded-3xl shadow-card overflow-hidden flex flex-col hover-lift animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              {/* Visual header */}
              <div className={`bg-gradient-to-br ${avatarGradients[idx % 3]} p-6 text-white relative overflow-hidden`}>
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-bold text-base">{item.name}</p>
                    <p className="text-[11px] opacity-90 mt-0.5 leading-snug">{item.role}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="px-5 pt-5">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="text-center bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <p className="text-[10px] text-gray-400 mb-1 font-bold">BEFORE</p>
                    <p className="text-xs font-bold text-gray-600 leading-snug">{item.result.before}</p>
                  </div>
                  <div className="text-center bg-teal-50 rounded-xl p-3 border border-teal-200">
                    <p className="text-[10px] text-teal-600 mb-1 font-bold">AFTER</p>
                    <p className="text-xs font-bold text-teal-700 leading-snug">{item.result.after}</p>
                  </div>
                </div>
                <div className="bg-navy-50 border border-navy-100 rounded-lg px-3 py-2 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-navy-500" />
                    <span className="text-xs font-bold text-navy-600">{item.result.detail}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="p-5 pt-4 flex-1 flex flex-col">
                <Quote className="text-teal-200 w-6 h-6 mb-2" />
                <blockquote className="text-text-secondary text-sm leading-relaxed flex-1">
                  {item.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
