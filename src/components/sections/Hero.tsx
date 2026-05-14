import { ArrowRight, MapPin } from 'lucide-react';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-text-primary overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 gradient-cta" />

      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[150px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
              全国訪問看護経営研究協会
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-[1.3] tracking-tight mb-6">
              <span className="block text-text-primary">年商1億ステーションへの</span>
              <span className="block mt-2 gradient-text">ロードマップが、ここにある</span>
            </h1>

            <div className="text-sm md:text-base text-text-secondary leading-relaxed mb-8 space-y-2.5 max-w-xl lg:max-w-none mx-auto">
              <p>訪問看護経営者にとって、経営・採用・組織を体系的に学ぶ機会は限られています。</p>
              <p>しかし、20年続くステーションを創るためには「現役経営者の実践知」が必須です。</p>
              <p>現役の経営者・専門家から直接学び、全国の仲間と繋がる実践コミュニティです。</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
              <a
                href={STRIPE_CHECKOUT_URL}
                className="w-full sm:w-auto gradient-cta text-white font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-cta hover:shadow-cta-hover transition-all"
              >
                会員申し込み
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#course-intro"
                className="w-full sm:w-auto bg-white border-2 border-navy-200 text-navy-600 font-bold px-7 py-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-navy-50 transition-colors"
              >
                詳細を見る
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-xs text-text-tertiary">
              <MapPin className="w-3.5 h-3.5 text-teal-500" />
              <span>和歌山・足立区・名古屋・奈良・下関・岡山・東京杉並など全国から参加</span>
            </div>
          </div>

          {/* Right: image block */}
          <div className="relative animate-fade-up" style={{ animationDelay: '0.15s' }}>
            <div className="absolute -inset-4 bg-gradient-to-br from-teal-200 to-navy-200 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-white rounded-3xl shadow-card-hover overflow-hidden border-4 border-white">
              <img
                src="/hero-image.png"
                alt="経営者同士のミーティング"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
            {/* Floating stat badges */}
            <div className="absolute -bottom-5 -left-3 md:-left-6 bg-white rounded-2xl shadow-card-hover px-4 py-3 border border-navy-100 hidden sm:block">
              <p className="text-[10px] text-text-tertiary font-bold">月額（税込）</p>
              <p className="text-xl font-black text-navy-500">¥5,500<span className="text-xs font-bold ml-1 text-text-tertiary">/月</span></p>
            </div>
            <div className="absolute -top-3 -right-3 md:-right-6 gradient-cta text-white rounded-2xl shadow-cta px-4 py-3 hidden sm:block">
              <p className="text-[10px] font-bold opacity-90">月2回ウェビナー</p>
              <p className="text-lg font-black">＋月1交流会</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
