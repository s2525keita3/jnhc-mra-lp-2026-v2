import { missionData } from '@/content';
import { CtaBanner } from './CtaBanner';

export const Mission = () => {
  const { eyebrow, title, lead, commitment } = missionData;

  return (
    <>
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-baum-300 font-bold tracking-widest text-sm uppercase bg-baum-900/50 px-3 py-1 rounded-full border border-baum-700">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-white" style={{whiteSpace:'pre-line'}}>
              {title}
            </h2>
            <p className="text-stone-300 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {lead}
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
              {commitment.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {commitment.items.map((item) => (
                <div key={item.number} className="bg-stone-800/70 rounded-xl p-6 border border-stone-700">
                  <span className="text-baum-400 font-bold text-4xl">{item.number}</span>
                  <h4 className="text-white font-bold text-base mt-3 mb-3">{item.title}</h4>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBanner message="この覚悟に共感できるなら、あなたが求めている仲間がここにいます" />
    </>
  );
};
