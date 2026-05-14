import { lazy, Suspense } from 'react';

import { ProgressBar, Header, Footer, StickyCta } from '@/components/layout';
import { LegalDocuments } from '@/components/legal';

const Hero            = lazy(() => import('@/components/sections').then(m => ({ default: m.Hero })));
const CourseIntro     = lazy(() => import('@/components/sections').then(m => ({ default: m.CourseIntro })));
const Curriculum      = lazy(() => import('@/components/sections').then(m => ({ default: m.Curriculum })));
const Testimonial     = lazy(() => import('@/components/sections').then(m => ({ default: m.Testimonial })));
const ProgramOverview = lazy(() => import('@/components/sections').then(m => ({ default: m.ProgramOverview })));
const Lecturers       = lazy(() => import('@/components/sections').then(m => ({ default: m.Lecturers })));
const Application     = lazy(() => import('@/components/sections').then(m => ({ default: m.Application })));
const FAQ             = lazy(() => import('@/components/sections').then(m => ({ default: m.FAQ })));

const S = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div className="h-96" />}>{children}</Suspense>
);

function App() {
  return (
    <div className="min-h-screen bg-white text-text-primary font-sans selection:bg-teal-500 selection:text-white">
      <ProgressBar />
      <Header />

      <main>
        {/* 1. ファーストビュー */}
        <Suspense fallback={<div className="h-screen" />}>
          <Hero />
        </Suspense>

        {/* 2. コース概要 */}
        <S><CourseIntro /></S>

        {/* 3. カリキュラム（6回） */}
        <S><Curriculum /></S>

        {/* 4. 受講者の声 */}
        <S><Testimonial /></S>

        {/* 5. プログラム概要（テーブル） */}
        <S><ProgramOverview /></S>

        {/* 6. 講師紹介 */}
        <S><Lecturers /></S>

        {/* 7. 申込 */}
        <S><Application /></S>

        {/* 8. FAQ */}
        <S><FAQ /></S>
      </main>

      <LegalDocuments />
      <Footer />
      <StickyCta />
    </div>
  );
}

export default App;
