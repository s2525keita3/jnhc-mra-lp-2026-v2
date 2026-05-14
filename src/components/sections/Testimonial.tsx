import { User } from 'lucide-react';
import { testimonialData } from '@/content';

export const Testimonial = () => {
  const { items } = testimonialData;

  return (
    <section id="testimonial" className="py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-4">
            VOICE
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3">受講者の声</h2>
          <p className="text-text-tertiary mt-4 text-sm md:text-base">交流会・ウェビナーから生まれた実際の変化</p>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl border border-navy-100 shadow-card overflow-hidden hover-lift">
              <div className="grid md:grid-cols-[200px_1fr] gap-0">
                {/* Avatar block */}
                <div className="bg-navy-50 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-white border-4 border-teal-100 flex items-center justify-center mb-3 shadow-sm">
                    <User className="w-12 h-12 text-teal-300" strokeWidth={1.5} />
                  </div>
                  <p className="font-bold text-navy-500 text-sm">{item.name}</p>
                  <p className="text-text-tertiary text-[10px] mt-1 leading-snug">{item.role}</p>
                </div>

                {/* Content */}
                <div className="p-6 md:p-7">
                  {/* Result row */}
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <div className="bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                      <span className="text-[10px] text-gray-500 mr-1">before</span>
                      <span className="text-xs font-bold text-gray-600">{item.result.before}</span>
                    </div>
                    <span className="text-teal-400 font-bold">→</span>
                    <div className="bg-teal-50 border border-teal-200 rounded-full px-3 py-1">
                      <span className="text-[10px] text-teal-600 mr-1 font-bold">after</span>
                      <span className="text-xs font-bold text-teal-700">{item.result.after}</span>
                    </div>
                    <span className="text-[10px] text-navy-500 bg-navy-50 border border-navy-100 rounded-full px-2 py-1 font-bold">
                      {item.result.detail}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative">
                    <span className="text-5xl text-teal-100 font-serif leading-none absolute -top-3 -left-1 select-none">"</span>
                    <blockquote className="text-text-secondary text-sm md:text-base leading-relaxed pl-5">
                      {item.quote}
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
