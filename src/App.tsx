import { lazy, Suspense } from 'react';

import { ProgressBar, Header, Footer, StickyCta } from '@/components/layout';
import { LegalDocuments } from '@/components/legal';

const Hero       = lazy(() => import('@/components/sections').then(m => ({ default: m.Hero })));
const Problem    = lazy(() => import('@/components/sections').then(m => ({ default: m.Problem })));
const Mission    = lazy(() => import('@/components/sections').then(m => ({ default: m.Mission })));
const Roadmap    = lazy(() => import('@/components/sections').then(m => ({ default: m.Roadmap })));
const Levels     = lazy(() => import('@/components/sections').then(m => ({ default: m.Levels })));
const Weapons    = lazy(() => import('@/components/sections').then(m => ({ default: m.Weapons })));
const Testimonial = lazy(() => import('@/components/sections').then(m => ({ default: m.Testimonial })));
const Pricing    = lazy(() => import('@/components/sections').then(m => ({ default: m.Pricing })));
const Profile    = lazy(() => import('@/components/sections').then(m => ({ default: m.Profile })));
const FAQ        = lazy(() => import('@/components/sections').then(m => ({ default: m.FAQ })));
const Closing    = lazy(() => import('@/components/sections').then(m => ({ default: m.Closing })));

const S = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-96" />}>{children}</Suspense>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-baum-500 selection:text-white">
      <ProgressBar />
      <Header />

      <main>
        {/* 1. ファーストビュー */}
        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>

        {/* 2. 課題の認識 → CTA */}
        <S><Problem /></S>

        {/* 3. コンセプト・覚悟 → CTA */}
        <S><Mission /></S>

        {/* 4. なぜ1億か・参加後の変化 → CTA */}
        <S><Roadmap /></S>

        {/* 5. 現在地確認（レベル定義） → CTA */}
        <S><Levels /></S>

        {/* 6. 3つの柱（具体的なコンテンツ） → CTA */}
        <S><Weapons /></S>

        {/* 7. 実績・社会的証明（Pricing直前） */}
        <S><Testimonial /></S>

        {/* 8. 申込 */}
        <S><Pricing /></S>

        {/* 9. プロフィール */}
        <S><Profile /></S>

        {/* 10. FAQ */}
        <S><FAQ /></S>

        {/* 11. クロージング */}
        <S><Closing /></S>
      </main>

      <LegalDocuments />
      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;
