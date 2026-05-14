import { ArrowRight, Mail } from 'lucide-react';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 bg-white text-text-primary overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-1.5 gradient-cta" />

      {/* Background decoration */}
      <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-[150px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-50 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-sm mb-8">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
          全国訪問看護経営研究協会
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl font-bold leading-[1.3] tracking-tight mb-8">
          <span className="block text-text-primary">年商1億ステーションへの</span>
          <span className="block mt-2 gradient-text">ロードマップが、ここにある</span>
        </h1>

        {/* Subtitle - 参考サイト風2-3文構成 */}
        <div className="text-base md:text-lg text-text-secondary leading-relaxed mb-10 max-w-2xl mx-auto space-y-3">
          <p>訪問看護経営者にとって、経営・採用・組織を体系的に学ぶ機会は限られています。</p>
          <p>しかし、20年続くステーションを創るためには「現役経営者の実践知」が必須です。</p>
          <p>現役の経営者・専門家から直接学び、全国の仲間と繋がる実践コミュニティです。</p>
        </div>

        {/* CTA buttons - 参考サイト風2ボタン */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
          <a
            href={STRIPE_CHECKOUT_URL}
            className="w-full sm:w-auto gradient-cta text-white font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 shadow-cta hover:shadow-cta-hover transition-all"
          >
            会員申し込み
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#course-intro"
            className="w-full sm:w-auto bg-white border-2 border-navy-200 text-navy-600 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-navy-50 transition-colors"
          >
            <Mail className="w-4 h-4" />
            詳細を見る
          </a>
        </div>

        <p className="mt-6 text-xs text-text-light">
          月額5,500円（税込）／最低6ヶ月／オンライン参加
        </p>
      </div>
    </section>
  );
};
