export const Profile = () => {
  return (
    <section className="py-20 bg-bg-cream">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-card border border-baum-100 overflow-hidden flex flex-col md:flex-row hover-lift animate-fade-up">
          <div className="md:w-1/3 relative bg-slate-100">
             {/* Vertical Rectangle Photo */}
             <div className="h-full w-full relative min-h-[400px]">
                <img 
                  src="/teacher_john.JPG" 
                  alt="代表理事 渋谷慶太" 
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ objectPosition: 'center 30%' }}
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white md:hidden">
                    <p className="text-xs opacity-80">代表理事</p>
                    <p className="text-xl font-bold">渋谷 慶太</p>
                </div>
             </div>
          </div>
          
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="hidden md:block mb-6">
               <p className="text-baum-500 font-bold tracking-wider text-sm">REPRESENTATIVE</p>
               <h2 className="text-3xl font-bold text-text-primary">渋谷 慶太 <span className="text-lg font-normal text-text-tertiary ml-2">Keita Shibuya</span></h2>
               <p className="text-sm text-text-tertiary">一般社団法人 全国訪問看護経営研究協会 代表理事</p>
            </div>

            <div className="prose prose-slate text-text-secondary leading-relaxed">
              <p className="font-bold text-text-primary text-lg mb-4">
                「綺麗事抜きで、現場で使える武器を。」
              </p>
              <p className="mb-4">
                多くのコンサルタントが教科書的な理論を語る中、私は「今の現場」で通用する生きたノウハウにこだわります。
              </p>
              <p className="mb-4">
                採用難の時代に常勤スタッフ50名を抱え、月間3,500件の訪問を回し続ける「組織作りの極意」。SNS総フォロワー11万人を熱狂させ、広告費ゼロで人とお金を集める「マーケティングの正解」。
              </p>
              <p>
                これらは全て、私が自身の事業で血を流しながら検証し、全国50社以上の支援先で再現性を確認した「事実」です。失敗しない経営の型を、あなたに継承します。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-baum-100">
               <div className="text-center">
                  <div className="text-2xl font-bold text-text-primary">50<span className="text-sm font-normal">社+</span></div>
                  <div className="text-xs text-text-tertiary">支援実績</div>
               </div>
               <div className="text-center border-l border-baum-100">
                  <div className="text-2xl font-bold text-text-primary">11<span className="text-sm font-normal">万+</span></div>
                  <div className="text-xs text-text-tertiary">SNSフォロワー</div>
               </div>
               <div className="text-center border-l border-baum-100">
                  <div className="text-2xl font-bold text-text-primary">5<span className="text-sm font-normal">億</span></div>
                  <div className="text-xs text-text-tertiary">年商規模</div>
               </div>
               <div className="text-center border-l border-baum-100">
                  <div className="text-2xl font-bold text-text-primary">5<span className="text-sm font-normal">店舗</span></div>
                  <div className="text-xs text-text-tertiary">展開</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





