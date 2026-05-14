import { CheckCircle } from 'lucide-react';
import { courseIntroData } from '@/content';

export const CourseIntro = () => {
  const { title, lead, points } = courseIntroData;

  return (
    <section id="course-intro" className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight">
            {title}
          </h2>
          <div className="mt-6 mx-auto w-16 h-1 bg-teal-500 rounded-full" />
        </div>

        <p className="text-text-secondary leading-relaxed text-base md:text-lg text-center max-w-3xl mx-auto mb-10">
          {lead}
        </p>

        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 md:p-8">
          <p className="font-bold text-navy-500 text-center mb-5">こんな方におすすめです</p>
          <ul className="grid md:grid-cols-2 gap-3">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm md:text-base text-text-secondary leading-relaxed">
                <CheckCircle className="text-teal-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
