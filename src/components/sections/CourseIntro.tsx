import { CheckCircle, Target, TrendingUp, Users, Award } from 'lucide-react';
import { courseIntroData } from '@/content';

const pointIcons = [Target, TrendingUp, Users, Award];

export const CourseIntro = () => {
  const { title, lead, points } = courseIntroData;

  return (
    <section id="course-intro" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-teal-700 font-bold tracking-widest text-xs uppercase bg-teal-50 px-3 py-1 rounded-full border border-teal-200 mb-4">
            ABOUT THE PROGRAM
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-text-primary leading-tight mt-3">
            {title}
          </h2>
          <div className="mt-6 mx-auto w-16 h-1 bg-teal-500 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center mb-14">
          {/* Image block */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-navy-100 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-white rounded-2xl shadow-card-hover overflow-hidden border-4 border-white">
              <img
                src="/DSC03550.JPG"
                alt="訪問看護経営者の実践コミュニティ"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-teal-100 shadow-sm">
                <p className="text-xs font-bold text-teal-700">「年商1億」は目標ではなく、持続可能の最低ライン</p>
              </div>
            </div>
          </div>

          {/* Text block */}
          <div>
            <p className="text-text-secondary leading-relaxed text-base md:text-lg mb-6">
              {lead}
            </p>
            <div className="bg-navy-50 border-l-4 border-teal-500 rounded-r-xl p-5">
              <p className="text-sm md:text-base text-navy-600 leading-relaxed font-medium">
                「代表一人頼みの経営」から「組織で回る経営」へ。<br />
                先輩経営者・専門家から直接学び、全国の仲間と繋がります。
              </p>
            </div>
          </div>
        </div>

        {/* Target audience block */}
        <div className="bg-gradient-to-br from-teal-50 to-navy-50 border border-teal-100 rounded-3xl p-6 md:p-10">
          <div className="text-center mb-6">
            <p className="text-xs md:text-sm tracking-widest font-bold text-teal-700">FOR WHOM</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-2">こんな方におすすめです</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {points.map((point, i) => {
              const Icon = pointIcons[i] ?? CheckCircle;
              return (
                <div key={i} className="bg-white rounded-xl p-5 border border-teal-100 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 gradient-cta rounded-xl flex items-center justify-center flex-shrink-0 shadow-cta">
                    <Icon className="text-white w-5 h-5" />
                  </div>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed pt-1">{point}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
