import { Video, FileText, Users } from 'lucide-react';
import { programData } from '@/content';
import { CtaBanner } from './CtaBanner';

const icons = { 1: Video, 2: FileText, 3: Users };

export const Weapons = () => {
  const weapons = programData.weapons;

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16 animate-fade-up">
            <span className="text-baum-500 font-bold tracking-widest text-sm uppercase bg-baum-50 px-3 py-1 rounded-full border border-baum-200">3 Pillars</span>
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mt-6">{programData.title}</h2>
            <p className="text-text-tertiary mt-4 text-base md:text-lg max-w-2xl mx-auto">{programData.subtitle}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {weapons.map((weapon, idx) => {
              const Icon = icons[weapon.id as keyof typeof icons];
              const colors = ['from-baum-500 to-baum-600', 'from-baum-600 to-baum-700', 'from-baum-400 to-baum-500'];

              return (
                <div key={weapon.id} className="bg-white rounded-xl shadow-card border border-baum-100 overflow-hidden hover-lift animate-fade-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className={`p-6 bg-gradient-to-br ${colors[idx]} text-white`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center border border-white/30 flex-shrink-0">
                        <Icon size={28} />
                      </div>
                      <div className="min-w-0">
                        <span className="text-white/70 text-xs font-bold">0{weapon.id}</span>
                        <h3 className="font-bold text-lg leading-snug">{weapon.name}</h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-text-tertiary mb-4 leading-relaxed">{weapon.description}</p>

                    <div className="bg-baum-50 rounded-xl p-4 border border-baum-100">
                      {weapon.themes && (
                        <>
                          <p className="text-xs font-bold text-baum-600 mb-2">テーマ例</p>
                          <ul className="space-y-1.5">
                            {weapon.themes.map((theme, i) => (
                              <li key={i} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed">
                                <span className="text-baum-500 font-bold flex-shrink-0">✓</span>
                                <span>{theme}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                      {weapon.benefits && (
                        <>
                          <p className="text-xs font-bold text-baum-600 mb-2">含まれるもの</p>
                          <ul className="space-y-1.5">
                            {weapon.benefits.map((b, i) => (
                              <li key={i} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed">
                                <span className="text-baum-500 font-bold flex-shrink-0">✓</span>
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
                          <span key={i} className="text-[10px] bg-baum-50 text-baum-700 border border-baum-100 px-2 py-1 rounded-full">{f}</span>
                        ))}
                      </div>
                    )}
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
