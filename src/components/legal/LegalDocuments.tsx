export const LegalDocuments = () => {
    return (
        <section className="bg-bg-cream py-12 text-text-tertiary text-xs border-t border-baum-100">
            <div className="max-w-4xl mx-auto px-4 space-y-4">
                <h3 className="font-bold text-slate-400 mb-4 text-center">重要事項・法的表記</h3>
                
                <details className="group bg-white rounded-xl border border-baum-100" id="tokushoho">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-bg-orange-light">
                        特定商取引法に基づく表記
                        <span className="text-slate-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-slate-200 space-y-2 leading-relaxed">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                            <div className="font-bold bg-slate-50 p-1">販売業者</div>
                            <div className="md:col-span-3 p-1">一般社団法人 全国訪問看護経営研究協会</div>
                            <div className="font-bold bg-slate-50 p-1">運営統括責任者</div>
                            <div className="md:col-span-3 p-1">渋谷 慶太</div>
                            <div className="font-bold bg-slate-50 p-1">所在地</div>
                            <div className="md:col-span-3 p-1">〒231-0064 神奈川県横浜市中区野毛町2-90桜木町スカイハイツ405</div>
                            <div className="font-bold bg-slate-50 p-1">電話番号</div>
                            <div className="md:col-span-3 p-1">045-3451-0083（受付時間：平日09:00-18:00）</div>
                            <div className="font-bold bg-slate-50 p-1">メールアドレス</div>
                            <div className="md:col-span-3 p-1">info@jnhc-mra.or.jp</div>
                            <div className="font-bold bg-slate-50 p-1">販売価格</div>
                            <div className="md:col-span-3 p-1">月額5,500円（税込）</div>
                            <div className="font-bold bg-slate-50 p-1">商品代金以外の必要料金</div>
                            <div className="md:col-span-3 p-1">消費税、インターネット接続にかかる通信回線等の諸費用</div>
                            <div className="font-bold bg-slate-50 p-1">お支払い方法</div>
                            <div className="md:col-span-3 p-1">クレジットカード決済（Stripe）</div>
                            <div className="font-bold bg-slate-50 p-1">お支払い時期</div>
                            <div className="md:col-span-3 p-1">初回お申し込み時、および翌月以降毎月同日に自動決済</div>
                            <div className="font-bold bg-slate-50 p-1">商品の引き渡し時期</div>
                            <div className="md:col-span-3 p-1">決済完了後、直ちにご利用いただけます。</div>
                            <div className="font-bold bg-slate-50 p-1">返品・交換・キャンセル</div>
                            <div className="md:col-span-3 p-1">デジタルコンテンツの性質上、返品・返金はお受けしておりません。最低契約期間（6ヶ月）を設けております。解約をご希望の場合は、最低契約期間満了後、会員ページよりお手続きください。次回決済日の前日までに手続きを完了することで、次月の請求は発生しません。</div>
                        </div>
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-baum-100" id="terms">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-bg-orange-light">
                        利用規約
                        <span className="text-text-tertiary group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-baum-100 h-64 overflow-y-auto leading-relaxed scrollbar-thin">
                        <p className="mb-2 font-bold">第1条（適用）</p>
                        <p className="mb-2">本規約は、一般社団法人 全国訪問看護経営研究協会（以下「当協会」）が提供する有料会員サービス（以下「本サービス」）の利用条件を定めるものです。</p>
                        <p className="mb-2 font-bold">第2条（会員登録）</p>
                        <p className="mb-2">利用者は、本規約に同意の上、当協会所定の方法で入会を申し込み、当協会がこれを承認した時点で会員となります。</p>
                        <p className="mb-2 font-bold">第3条（利用料金および支払い）</p>
                        <p className="mb-2">会員は、月額5,500円（税込）の利用料金を支払うものとします。支払いはクレジットカードによる自動決済のみとします。</p>
                        <p className="mb-2 font-bold">第4条（契約期間および解約）</p>
                        <p className="mb-2">本サービスの最低契約期間は6ヶ月間とします。経営改善や人脈構築など、成果を出すには一定の期間が必要なため、最低6ヶ月の継続をお願いしております。6ヶ月未満での中途解約は原則として認められません。7ヶ月目以降は、次回決済日の前日までに所定の手続きを行うことで解約が可能です。</p>
                        <p className="mb-2 font-bold">第5条（禁止事項）</p>
                        <p className="mb-2">会員は、本サービスのコンテンツを第三者に譲渡・貸与・転売・公衆送信してはなりません。ただし、同一法人内のスタッフ間での共有はこの限りではありません。</p>
                        <p className="mb-2 font-bold">第6条（免責事項）</p>
                        <p className="mb-2">当協会は、本サービスの利用により会員に生じた損害について、当協会の故意または重過失による場合を除き、一切の責任を負いません。</p>
                        <p className="mt-4 text-slate-400">※ 全文は入会申し込み時の最終画面でもご確認いただけます。</p>
                    </div>
                </details>

                <details className="group bg-white rounded-xl border border-baum-100" id="privacy">
                    <summary className="p-3 font-bold cursor-pointer flex justify-between items-center hover:bg-bg-orange-light">
                        プライバシーポリシー
                        <span className="text-text-tertiary group-open:rotate-180 transition">▼</span>
                    </summary>
                    <div className="p-4 border-t border-baum-100 space-y-2 leading-relaxed">
                         <p>当協会は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、全従業員に個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</p>
                         <p className="font-bold mt-2">1. 個人情報の管理</p>
                         <p>当協会は、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・社員教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</p>
                         <p className="font-bold mt-2">2. 個人情報の利用目的</p>
                         <p>お客さまからお預かりした個人情報は、当協会からのご連絡や業務のご案内、ご質問に対する回答として、電子メールや資料のご送付に利用いたします。</p>
                         <p className="font-bold mt-2">3. 個人情報の第三者への開示・提供の禁止</p>
                         <p>当協会は、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</p>
                         <ul className="list-disc list-inside pl-4">
                            <li>お客さまの同意がある場合</li>
                            <li>法令に基づき開示することが必要である場合</li>
                            <li>決済代行会社（Stripe等）への必要最低限の情報提供</li>
                         </ul>
                    </div>
                </details>
            </div>
        </section>
    )
}
