import { Video, FileText, Users } from 'lucide-react';
import { programData } from '@/content';
import { CtaBanner } from './CtaBanner';

const icons = { 1: Video, 2: Users, 3: FileText };
const accentColors = [
  { bg: 'bg-teal-500', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', num: 'text-teal-500/20' },
  { bg: 'bg-navy-500', light: 'bg-navy-50', border: 'border-navy-100', text: 'text-navy-600', num: 'text-navy-500/20' },
  { bg: 'bg-teal-700', light: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', num: 'text-teal-700/20' },
];

export const Weapons = () => {
  const weapons = programData.weapons;

  return (
    <>
      <section className="py-24 bg-teal-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-white px-3 py-1 rounded-full border border-teal-200 mb-4">3 Pillars</span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-4">{programData.title}</h2>
            <p className="text-text-tertiary mt-4 text-base md:text-lg max-w-2xl mx-auto">{programData.subtitle}</p>
          </div>

          <div className="space-y-6">
            {weapons.map((weapon, idx) => {
              const Icon = icons[weapon.id as keyof typeof icons];
              const ac = accentColors[idx];

              return (
                <div
                  key={weapon.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden animate-fade-up hover-lift"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Left: number + icon header */}
                    <div className={`${ac.bg} p-6 md:p-8 flex flex-col justify-center items-center text-white relative overflow-hidden md:col-span-2`}>
                      {/* Big background number */}
                      <span className={`absolute right-4 top-2 text-9xl font-black ${ac.num} text-white/10 leading-none select-none`}>
                        0{weapon.id}
                      </span>
                      <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center border border-white/20 mb-4 relative z-10">
                        <Icon size={30} />
                      </div>
                      <span className="text-white/70 text-xs font-bold mb-1 relative z-10">0{weapon.id}</span>
                      <h3 className="font-bold text-lg text-center leading-snug relative z-10">{weapon.name}</h3>
                    </div>

                    {/* Right: content */}
                    <div className="p-6 md:p-8 md:col-span-3 flex flex-col justify-center">
                      <p className="text-sm text-text-tertiary mb-5 leading-relaxed">{weapon.description}</p>

                      <div className={`rounded-xl p-4 border ${ac.border} ${ac.light}`}>
                        {weapon.themes && (
                          <>
                            <p className={`text-xs font-bold ${ac.text} mb-3`}>テーマ例</p>
                            <ul className="space-y-2">
                              {weapon.themes.map((theme, i) => (
                                <li key={i} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed">
                                  <CheckMark className={ac.text} />
                                  <span>{theme}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                        {weapon.benefits && (
                          <>
                            <p className={`text-xs font-bold ${ac.text} mb-3`}>含まれるもの</p>
                            <ul className="space-y-2">
                              {weapon.benefits.map((b, i) => (
                                <li key={i} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed">
                                  <CheckMark className={ac.text} />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        )}
                      </div>

                      {weapon.features && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {weapon.features.map((f, i) => (
                            <span key={i} className={`text-[10px] border px-2 py-1 rounded-full ${ac.border} ${ac.text} bg-white`}>{f}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CtaBanner message="これだけのコンテンツが、月額5,500円で使い放題。" />
    </>
  );
};

// Small helper
const CheckMark = ({ className }: { className: string }) => (
  <span className={`font-bold flex-shrink-0 ${className}`}>✓</span>
);
