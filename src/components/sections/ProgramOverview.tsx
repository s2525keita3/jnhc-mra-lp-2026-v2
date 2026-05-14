import { programOverviewData } from '@/content';

export const ProgramOverview = () => {
  const { title, rows } = programOverviewData;

  return (
    <section id="overview" className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-4">
            PROGRAM OVERVIEW
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3 leading-tight">{title}</h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-navy-100 shadow-card">
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-1 md:grid-cols-[200px_1fr] ${i !== rows.length - 1 ? 'border-b border-navy-100' : ''}`}
            >
              <div className="bg-navy-50 px-5 py-4 md:px-6 md:py-5 font-bold text-navy-500 text-sm md:text-base">
                {row.label}
              </div>
              <div className="px-5 py-4 md:px-6 md:py-5 text-text-secondary text-sm md:text-base bg-white leading-relaxed">
                {row.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
