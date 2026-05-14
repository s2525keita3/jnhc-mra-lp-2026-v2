import { Calendar, Clock, PlayCircle, Monitor, Users, CreditCard } from 'lucide-react';
import { programOverviewData } from '@/content';

const iconMap = [Calendar, Clock, PlayCircle, Monitor, Users, CreditCard];

export const ProgramOverview = () => {
  const { title, rows } = programOverviewData;

  return (
    <section id="overview" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-4">
            PROGRAM OVERVIEW
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary mt-3 leading-tight">{title}</h2>
        </div>

        {/* Block grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {rows.map((row, i) => {
            const Icon = iconMap[i] ?? Calendar;
            return (
              <div
                key={row.label}
                className="bg-white rounded-2xl border border-navy-100 shadow-card p-6 hover-lift animate-fade-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-navy-50">
                  <div className="w-10 h-10 gradient-cta rounded-xl flex items-center justify-center flex-shrink-0 shadow-cta">
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <p className="font-bold text-navy-500 text-sm">{row.label}</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{row.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
