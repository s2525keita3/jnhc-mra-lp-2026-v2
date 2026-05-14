import { missionData } from '@/content';
import { CtaBanner } from './CtaBanner';

export const Mission = () => {
  const { eyebrow, title, lead, commitment } = missionData;

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
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

          {/* Divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-navy-100" />
            <span className="text-navy-500 font-bold text-sm tracking-widest px-4">{commitment.title}</span>
            <div className="flex-1 h-px bg-navy-100" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {commitment.items.map((item) => (
              <div key={item.number} className="rounded-2xl p-7 border border-navy-100 bg-white hover-lift transition-all">
                {/* Number circle */}
                <div className="w-12 h-12 gradient-cta rounded-full flex items-center justify-center text-white font-black text-xl mb-5 shadow-cta">
                  {item.number}
                </div>
                <h4 className="text-navy-500 font-bold text-base mb-3 leading-snug">{item.title}</h4>
                <p className="text-text-tertiary text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner message="この覚悟に共感できるなら、あなたが求めている仲間がここにいます" />
    </>
  );
};
