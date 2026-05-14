import { useState } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { levelsData } from '@/content';
import { CtaBanner } from './CtaBanner';

const colorMap: Record<string, { tab: string; active: string; badge: string; lv4bg: string; dot: string; border: string }> = {
  red:    { tab: 'border-rose-400 text-rose-600',     active: 'bg-rose-600 text-white border-transparent',    badge: 'bg-rose-50 text-rose-700 border-rose-200',    lv4bg: 'bg-rose-50 border-rose-200',    dot: 'bg-rose-500',    border: 'border-rose-300' },
  orange: { tab: 'border-amber-400 text-amber-600',   active: 'bg-amber-600 text-white border-transparent',   badge: 'bg-amber-50 text-amber-700 border-amber-200', lv4bg: 'bg-amber-50 border-amber-200',  dot: 'bg-amber-500',   border: 'border-amber-300' },
  yellow: { tab: 'border-yellow-400 text-yellow-700', active: 'bg-yellow-500 text-white border-transparent',  badge: 'bg-yellow-50 text-yellow-700 border-yellow-200', lv4bg: 'bg-yellow-50 border-yellow-200', dot: 'bg-yellow-500', border: 'border-yellow-300' },
  green:  { tab: 'border-emerald-500 text-emerald-700', active: 'bg-emerald-600 text-white border-transparent', badge: 'bg-emerald-50 text-emerald-700 border-emerald-200', lv4bg: 'bg-emerald-50 border-emerald-200', dot: 'bg-emerald-500', border: 'border-emerald-300' },
  blue:   { tab: 'border-blue-500 text-blue-700',     active: 'bg-blue-600 text-white border-transparent',    badge: 'bg-blue-50 text-blue-700 border-blue-200',    lv4bg: 'bg-blue-50 border-blue-200',    dot: 'bg-blue-500',    border: 'border-blue-300' },
  purple: { tab: 'border-purple-500 text-purple-700', active: 'bg-purple-600 text-white border-transparent',  badge: 'bg-purple-50 text-purple-700 border-purple-200', lv4bg: 'bg-purple-50 border-purple-200', dot: 'bg-purple-500', border: 'border-purple-300' },
};

export const Levels = () => {
  const { eyebrow, title, subtitle, departments } = levelsData;
  const [activeId, setActiveId] = useState(departments[0].id);
  const [expanded, setExpanded] = useState(false);
  const dept = departments.find(d => d.id === activeId)!;
  const c = colorMap[dept.color];

  return (
    <>
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-12">
            <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-6">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-text-primary">
              {title}
            </h2>
            <p className="text-text-tertiary mt-4 text-base max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Department tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {departments.map(d => {
              const isActive = d.id === activeId;
              const tc = colorMap[d.color];
              return (
                <button
                  key={d.id}
                  onClick={() => { setActiveId(d.id); setExpanded(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                    isActive ? tc.active + ' shadow-md' : 'bg-white ' + tc.tab + ' hover:bg-gray-50'
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          {/* KGI */}
          <p className="text-center text-text-tertiary text-sm mb-8 bg-navy-50 rounded-xl py-3 max-w-2xl mx-auto border border-navy-100">
            <span className="font-bold text-navy-500">KGI：</span>{dept.kgi}
          </p>

          {/* Lv1-3 summary */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {dept.levels.slice(0, 3).map((lv) => (
              <div key={lv.level} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-black text-white flex-shrink-0">
                    {lv.level}
                  </span>
                  <span className="text-xs text-gray-500 font-bold truncate">{lv.range}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{lv.items[0]}</p>
              </div>
            ))}
          </div>

          {/* Lv4 highlighted */}
          <div className={`rounded-2xl p-5 border-2 mb-4 ${c.lv4bg}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white ${c.dot}`}>4</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>{dept.levels[3].range}</span>
              <span className="text-xs font-bold text-teal-600 ml-auto">← 目指すレベル</span>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
              {dept.levels[3].items.map((item, i) => (
                <li key={i} className="flex items-start gap-1.5 text-xs text-text-secondary leading-relaxed">
                  <span className={`w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0 ${c.dot}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Expand toggle */}
          <div className="text-center mb-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-sm text-navy-500 font-bold hover:text-teal-600 transition-colors"
            >
              {expanded ? 'Lv1〜3の詳細を閉じる' : 'Lv1〜3の詳細を見る'}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Lv1-3 */}
          {expanded && (
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {dept.levels.slice(0, 3).map((lv) => (
                <div key={lv.level} className="bg-white rounded-xl p-5 border border-gray-200 shadow-card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-black text-white">{lv.level}</span>
                    <span className="text-xs text-gray-500 font-bold">{lv.range}</span>
                  </div>
                  <ul className="space-y-2">
                    {lv.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-gray-500 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 1億円 standard */}
          <div className="bg-navy-500 rounded-2xl p-6 md:p-8 text-white">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-white text-base md:text-lg">
                協会が定める「年商1億円基準」― {dept.label}部門 Lv4
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {dept.standard.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-teal-400 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-white/80 leading-relaxed break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-text-tertiary text-sm mt-8">
            6部門すべてで<span className="font-bold text-teal-600"> Lv4 </span>を達成した状態が、協会の定める「年商1億円ステーション」です。
          </p>
        </div>
      </section>
      <CtaBanner message="自分の現在地がわかった。次は、仲間と一緒に動き出す番です。" />
    </>
  );
};
