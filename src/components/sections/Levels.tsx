import { useState } from 'react';
import { CheckCircle, Target, ChevronDown } from 'lucide-react';
import { levelsData } from '@/content';
import { CtaBanner } from './CtaBanner';

const colorMap: Record<string, { tab: string; active: string; badge: string; lv4: string; dot: string }> = {
  red:    { tab: 'border-red-400 text-red-500',      active: 'bg-red-500 text-white border-transparent',      badge: 'bg-red-50 text-red-600 border-red-200',      lv4: 'border-red-300 bg-red-50',      dot: 'bg-red-500' },
  orange: { tab: 'border-orange-400 text-orange-500', active: 'bg-orange-500 text-white border-transparent',   badge: 'bg-orange-50 text-orange-600 border-orange-200', lv4: 'border-orange-300 bg-orange-50', dot: 'bg-orange-500' },
  yellow: { tab: 'border-yellow-400 text-yellow-600', active: 'bg-yellow-500 text-white border-transparent',   badge: 'bg-yellow-50 text-yellow-700 border-yellow-200', lv4: 'border-yellow-300 bg-yellow-50', dot: 'bg-yellow-500' },
  green:  { tab: 'border-green-500 text-green-600',   active: 'bg-green-600 text-white border-transparent',    badge: 'bg-green-50 text-green-700 border-green-200',   lv4: 'border-green-300 bg-green-50',   dot: 'bg-green-500' },
  blue:   { tab: 'border-blue-500 text-blue-600',     active: 'bg-blue-600 text-white border-transparent',     badge: 'bg-blue-50 text-blue-700 border-blue-200',     lv4: 'border-blue-300 bg-blue-50',     dot: 'bg-blue-500' },
  purple: { tab: 'border-purple-500 text-purple-600', active: 'bg-purple-600 text-white border-transparent',   badge: 'bg-purple-50 text-purple-700 border-purple-200', lv4: 'border-purple-300 bg-purple-50', dot: 'bg-purple-500' },
};

export const Levels = () => {
  const { eyebrow, title, subtitle, departments } = levelsData;
  const [activeId, setActiveId] = useState(departments[0].id);
  const [expanded, setExpanded] = useState(false);
  const dept = departments.find(d => d.id === activeId)!;
  const c = colorMap[dept.color];

  return (
    <>
      <section className="py-24 bg-bg-cream">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-12">
            <span className="text-baum-600 font-bold tracking-widest text-sm uppercase bg-white px-3 py-1 rounded-full border border-baum-200">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight text-text-primary">
              {title}
            </h2>
            <p className="text-text-tertiary mt-4 text-base max-w-2xl mx-auto">{subtitle}</p>
          </div>

          {/* Department tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {departments.map(d => {
              const isActive = d.id === activeId;
              const tc = colorMap[d.color];
              return (
                <button
                  key={d.id}
                  onClick={() => { setActiveId(d.id); setExpanded(false); }}
                  className={`px-4 py-2 rounded-full text-sm font-bold border-2 transition-all ${
                    isActive ? tc.active + ' shadow-md' : 'bg-white ' + tc.tab + ' hover:bg-baum-50'
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          <p className="text-center text-text-tertiary text-sm mb-8">
            <span className="font-bold text-text-secondary">KGI：</span>{dept.kgi}
          </p>

          {/* Lv1-3 summary row (always visible) */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {dept.levels.slice(0, 3).map((lv) => (
              <div key={lv.level} className="bg-white rounded-xl p-4 border border-slate-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-full bg-slate-300 flex items-center justify-center text-xs font-black text-white flex-shrink-0">
                    {lv.level}
                  </span>
                  <span className="text-xs text-slate-500 font-bold truncate">{lv.range}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">{lv.items[0]}</p>
              </div>
            ))}
          </div>

          {/* Lv4 - always visible, highlighted */}
          <div className={`rounded-xl p-5 border-2 mb-4 ${c.lv4}`}>
            <div className="flex items-center gap-2 mb-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white ${c.dot}`}>4</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${c.badge}`}>{dept.levels[3].range}</span>
              <span className="text-xs font-bold text-baum-600 ml-auto">← 目指すレベル</span>
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

          {/* Expand button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 text-sm text-baum-600 font-bold hover:underline"
            >
              {expanded ? 'Lv1〜3の詳細を閉じる' : 'Lv1〜3の詳細を見る'}
              <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Expanded Lv1-3 detail */}
          {expanded && (
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {dept.levels.slice(0, 3).map((lv) => (
                <div key={lv.level} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-7 rounded-full bg-slate-300 flex items-center justify-center text-xs font-black text-white">{lv.level}</span>
                    <span className="text-xs text-slate-500 font-bold">{lv.range}</span>
                  </div>
                  <ul className="space-y-2">
                    {lv.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-500 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* 1億円 standard box */}
          <div className={`rounded-2xl p-6 md:p-8 border-2 ${c.lv4}`}>
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-5 h-5 text-baum-500 flex-shrink-0" />
              <h3 className="font-bold text-text-primary text-base md:text-lg">
                協会が定める「年商1億円基準」― {dept.label}部門 Lv4
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {dept.standard.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="text-baum-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary leading-relaxed break-words">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-text-tertiary text-sm mt-8">
            6部門すべてで<span className="font-bold text-baum-600"> Lv4 </span>を達成した状態が、協会の定める「年商1億円ステーション」です。
          </p>
        </div>
      </section>
      <CtaBanner message="自分の現在地がわかった。次は、仲間と一緒に動き出す番です。" />
    </>
  );
};
