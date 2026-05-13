# AIハンドオフ・ドキュメント (AI Handoff Documentation)

**プロジェクト名:** 一般社団法人 全国訪問看護経営研究協会 ランディングページ  
**最終更新:** 2024年11月  
**目的:** 訪問看護ステーション開業支援・経営改善のための有料会員募集LP

---

## 📋 目次

1. [プロジェクト概要](#1-プロジェクト概要-project-identity)
2. [ディレクトリ構造](#2-ディレクトリ構造-file-tree)
3. [デザインシステム](#3-デザインシステム-design-dna)
4. [データ構造とコンテンツ](#4-データ構造とコンテンツ-data-schema)
5. [コンポーネントアーキテクチャ](#5-コンポーネントアーキテクチャ-component-map)
6. [運用・開発ルール](#6-運用開発ルール-development-rules)

---

## 1. プロジェクト概要 (Project Identity)

### プロジェクト名
`visiting-nursing-association-lp`

### 目的
訪問看護経営者・管理者向けの実践型学習プラットフォームの有料会員募集ランディングページ。経営改善、財務管理、AI活用、採用・定着などの実践的なノウハウを提供するサービスを紹介。

### 技術スタック

| カテゴリ | 技術 | バージョン |
|---------|------|-----------|
| **Framework** | React | 19.2.0 |
| **Language** | TypeScript | 5.8.2 |
| **Bundler** | Vite | 6.2.0 |
| **Styling** | Tailwind CSS | v4 (CDN) |
| **Icons** | Lucide React | 0.554.0 |
| **Build Tool** | @vitejs/plugin-react | 5.0.0 |

### 開発環境

- **開発サーバー:** `npm run dev` (ポート: 3000)
- **ビルド:** `npm run build`
- **プレビュー:** `npm run preview`
- **ホスト:** 0.0.0.0 (全インターフェース)

### 環境変数

```env
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...
```

---

## 2. ディレクトリ構造 (File Tree)

```
jnhc-mra-lp_new/
├── app/
│   └── globals.css              # グローバルCSS（現在は空）
├── public/                      # 静的アセット配置ディレクトリ
│   └── teacher_john.JPG         # 講師プロフィール画像
├── dist/                        # ビルド出力ディレクトリ（自動生成）
│   ├── assets/
│   └── index.html
├── node_modules/                # 依存パッケージ（自動生成）
├── App.tsx                      # メインアプリケーションコンポーネント（全セクション含む）
├── index.tsx                    # Reactエントリーポイント
├── index.html                   # HTMLテンプレート（Tailwind設定含む）
├── vite.config.ts               # Vite設定ファイル
├── tsconfig.json                # TypeScript設定
├── package.json                 # 依存関係とスクリプト
├── package-lock.json            # 依存関係ロックファイル
├── metadata.json                # プロジェクトメタデータ
└── README.md                    # プロジェクト説明
```

### ディレクトリの役割

- **`App.tsx`**: 全コンポーネントが単一ファイルに集約（約1,126行）
- **`public/`**: 画像ファイルなどの静的アセット（Viteではルートパス `/` でアクセス可能）
- **`index.html`**: Tailwind CSS設定とカスタムスタイルを含むHTMLテンプレート
- **`vite.config.ts`**: ビルド設定、エイリアス設定（`@/` → プロジェクトルート）

---

## 3. デザインシステム (Design DNA)

### カラーパレット

#### メインカラー（オレンジ系 - バウムブルーム）

```javascript
baum: {
  50: '#FFF8F0',   // 最も薄い
  100: '#FFF5EB',
  200: '#FFE6CC',
  300: '#FFD6AD',
  400: '#FFB570',
  500: '#FF6B00',  // メインカラー（最重要）
  600: '#E55A00',
  700: '#CC5000',
  800: '#A33F00',
  900: '#6B2A00',  // 最も濃い
}
```

#### テキストカラー

```javascript
text: {
  primary: '#000000',    // メインテキスト
  secondary: '#333333',  // セカンダリテキスト
  tertiary: '#666666',   // サブテキスト
  light: '#999999',      // 軽いテキスト
}
```

#### 背景カラー

```javascript
bg: {
  white: '#FFFFFF',           // 白背景
  cream: '#FFF8F0',           // クリーム背景
  'orange-light': '#FFF5EB', // オレンジライト背景
}
```

### グラデーション

```css
/* CTAボタン用グラデーション */
.gradient-cta {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
}

/* 背景グラデーション */
.gradient-bg {
  background: linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%);
}

/* テキストグラデーション */
.gradient-text {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8533 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### フォント

**フォントファミリー:**
```css
font-family: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
```

**フォントウェイト:**
- `400`: 通常
- `500`: 中太字
- `700`: 太字
- `900`: 極太字

### UIルール

#### 角丸（Border Radius）

```javascript
'xl': '24px',      // カード、セクション
'2xl': '32px',     // 大きなカード
'3xl': '48px',     // 特大カード
'full': '9999px',  // 完全な円形
'[50px]': '50px',  // CTAボタン専用（インライン指定）
```

#### シャドウ（Shadow）

```javascript
'sm': '0 2px 8px rgba(0, 0, 0, 0.04)',                    // 軽いシャドウ
'md': '0 4px 24px rgba(0, 0, 0, 0.08)',                   // 通常シャドウ
'lg': '0 12px 40px rgba(0, 0, 0, 0.12)',                   // 強いシャドウ
'cta': '0 8px 24px rgba(255, 107, 0, 0.3)',               // CTAボタン用
'cta-hover': '0 12px 32px rgba(255, 107, 0, 0.4)',        // CTAホバー時
'card': '0 4px 24px rgba(0, 0, 0, 0.08)',                  // カード用
'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',          // カードホバー時
```

### アニメーション

#### キーフレーム定義

```javascript
fadeUp: {
  '0%': { opacity: '0', transform: 'translateY(40px)' },
  '100%': { opacity: '1', transform: 'translateY(0)' }
}
// 使用: animate-fade-up (0.8s ease-out forwards)

fadeIn: {
  '0%': { opacity: '0' },
  '100%': { opacity: '1' }
}
// 使用: animate-fade-in (1s ease-out forwards)

slideInLeft: {
  '0%': { opacity: '0', transform: 'translateX(-50px)' },
  '100%': { opacity: '1', transform: 'translateX(0)' }
}
// 使用: animate-slide-in-left (0.6s ease-out forwards)

slideInRight: {
  '0%': { opacity: '0', transform: 'translateX(50px)' },
  '100%': { opacity: '1', transform: 'translateX(0)' }
}
// 使用: animate-slide-in-right (0.6s ease-out forwards)

scaleIn: {
  '0%': { opacity: '0', transform: 'scale(0.9)' },
  '100%': { opacity: '1', transform: 'scale(1)' }
}
// 使用: animate-scale-in (0.5s ease-out forwards)
```

#### ホバーエフェクト

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

### 主要コンポーネントスタイル

#### CTAボタン（RichCtaButton）

```typescript
// 基本クラス
baseClasses = "relative group overflow-hidden rounded-[50px] transform 
               transition-all duration-300 shadow-cta 
               hover:-translate-y-0.5 hover:shadow-cta-hover 
               active:translate-y-0"

// グラデーションクラス
gradientClasses = "gradient-cta" // オレンジグラデーション
```

#### カード

```typescript
// 基本カード
className = "bg-white rounded-xl shadow-card border border-baum-100 
             hover-lift transition duration-300"

// ホバー時
// - translateY(-8px)
// - shadow-card-hover
```

---

## 4. データ構造とコンテンツ (Data Schema)

### コンポーネント内データ構造

#### Weaponsコンポーネント - コンテンツデータ

```typescript
type TabType = 'finance' | 'sales' | 'recruit' | 'ai';

type ContentItem = {
  title: string;
  type: string; // "基礎" | "実務" | "応用" | "戦略" | "実践" | "管理" | "文化" | "集客" | "面接" | "選考" | "定着" | "入門"
};

const content: Record<TabType, ContentItem[]> = {
  finance: [
    { title: "PL（損益計算書）徹底説明", type: "基礎" },
    { title: "BS (貸借対照表) 解説", type: "基礎" },
    // ... 9項目
  ],
  sales: [
    { title: "なぜ今、訪問看護に営業が必要なのか？", type: "戦略" },
    // ... 6項目
  ],
  recruit: [
    { title: "差がつく求人票の作り方", type: "集客" },
    // ... 7項目
  ],
  ai: [
    { title: "ChatGPTとは何か？", type: "入門" },
    // ... 7項目
  ]
};
```

#### Pricingコンポーネント - 機能リスト

```typescript
const features: string[] = [
  "eラーニング動画 全講座見放題",
  "実務テンプレート・資料DLし放題",
  "月1回の会員限定Zoom勉強会",
  "会員限定コミュニティ参加権",
  "アカウント共有OK (スタッフ教育に最適)"
];
```

#### Testimonialsコンポーネント - ユーザー証言

```typescript
// インラインで定義（型定義なし）
// 構造:
{
  name: string;        // "T.K. 様"
  phase: string;      // "開業前 6ヶ月"
  rating: number;      // 5（固定）
  comment: string;     // 証言テキスト（<strong>タグ含む）
  borderColor: string; // "border-baum-500" | "border-baum-400" | "border-baum-600"
}
```

#### RoiSection - ROIデータ

```typescript
type RoiCardData = {
  number: string;  // "01" - "05"
  title: string;   // "テンプレート価値"
  amount: string;   // "10万円"
  desc: string;    // "実務で使えるテンプレート群"
};

type TimelineItemData = {
  step: string;    // "STEP 01" (表示されない、円のみ)
  label: string;   // "テンプレート価値"
  amount: string;  // "10万円" | "+100万円"
  total: string;   // "10万円" | "110万円"
  isLeft: boolean; // レイアウト制御
};
```

#### LegalDocuments - 法的データ

```typescript
// 特定商取引法に基づく表記
{
  販売業者: "一般社団法人 全国訪問看護経営研究協会",
  運営統括責任者: "渋谷 慶太",
  所在地: "〒XXX-XXXX [住所記載箇所]",
  電話番号: "03-XXXX-XXXX（受付時間：平日10:00-18:00）",
  メールアドレス: "support@example.com",
  販売価格: "月額10,000円（税別）",
  // ... その他
}
```

---

## 5. コンポーネントアーキテクチャ (Component Map)

### コンポーネント階層

```
App
├── ProgressBar          # スクロール進捗バー（固定トップ）
├── Header               # 固定ヘッダー（スクロールで背景変化）
└── main
    ├── Hero             # ヒーローセクション（FV）
    ├── Problem          # BEFORE/AFTER比較セクション
    ├── RoiSection       # ROI（投資対効果）セクション
    │   ├── RoiCard      # ROIカード（5つの投資回収方法）
    │   └── TimelineItem # タイムラインアイテム（5ステップ）
    ├── Weapons          # 4つの強力な武器セクション
    ├── Testimonials     # 参加者の声（3件）
    ├── Profile          # 代表理事プロフィール
    ├── Pricing          # 有料会員プラン・料金
    └── FAQ              # よくある質問（7件）
└── footer
    ├── LegalDocuments   # 法的表記（特定商取引法、利用規約、プライバシーポリシー）
    ├── Footer           # フッター
    └── StickyCta        # 固定CTA（スクロールで表示）
```

### コンポーネント詳細

#### 1. ProgressBar
- **役割:** ページトップのスクロール進捗バー
- **状態:** `scrollProgress` (0-1)
- **依存:** なし
- **スタイル:** `gradient-cta`、固定位置（`fixed top-0`）

#### 2. Header
- **役割:** 固定ヘッダー、会員申し込みボタン
- **状態:** `isScrolled` (スクロールで背景変化)
- **依存:** `RichCtaButton`
- **スタイル:** スクロール時 `bg-white/95 backdrop-blur-md`

#### 3. Hero
- **役割:** ファーストビュー、メインメッセージ
- **状態:** なし
- **依存:** `RichCtaButton`
- **データ:** 統計（87%, 328社）
- **画像:** Unsplash（`loading="eager"`、`fetchPriority="high"`）

#### 4. Problem
- **役割:** BEFORE/AFTER比較
- **状態:** なし
- **依存:** `X`, `CheckCircle`, `Star` (lucide-react)
- **アニメーション:** `animate-fade-up`（遅延0.2s）

#### 5. RoiSection
- **役割:** 投資対効果の説明
- **状態:** なし
- **依存:** `RoiCard`, `TimelineItem`, `Wallet`, `PieChart`, `BarChart3`
- **データ:** 5つの投資回収方法、タイムライン（5ステップ）

#### 6. Weapons
- **役割:** 4つの強力な武器の紹介
- **状態:** `activeTab` ('finance' | 'sales' | 'recruit' | 'ai')
- **依存:** `PlayCircle`, `Download`, `Users`, `Layers`, `ShieldCheck`, `FileText`, `CheckCircle`
- **最適化:** `content`を`useMemo`、`handleTabChange`を`useCallback`

#### 7. Testimonials
- **役割:** ユーザー証言（3件）
- **状態:** なし
- **依存:** `Star`
- **アニメーション:** `animate-fade-up`（遅延0.2s, 0.3s）

#### 8. Profile
- **役割:** 代表理事プロフィール
- **状態:** なし
- **依存:** なし
- **画像:** `/teacher_john.JPG`（`loading="lazy"`）

#### 9. Pricing
- **役割:** 有料会員プラン・料金表示
- **状態:** なし
- **依存:** `RichCtaButton`, `CheckCircle`, `CreditCard`, `Lock`
- **データ:** `features`配列（`useMemo`で最適化）
- **ID:** `id="apply"`（アンカーリンク用）

#### 10. FAQ
- **役割:** よくある質問（7件）
- **状態:** なし（`<details>`要素で制御）
- **依存:** `HelpCircle`
- **アニメーション:** `animate-fade-up`（遅延0.1s-0.6s）

#### 11. LegalDocuments
- **役割:** 法的表記（特定商取引法、利用規約、プライバシーポリシー）
- **状態:** なし（`<details>`要素で制御）
- **依存:** なし

#### 12. Footer
- **役割:** フッター、リンク集
- **状態:** なし
- **依存:** なし

#### 13. StickyCta
- **役割:** 固定CTA（スクロールで表示）
- **状態:** `isVisible` (スクロール600px以上で表示)
- **依存:** `RichCtaButton`
- **スタイル:** `translate-y-full` → `translate-y-0`

### 共通コンポーネント

#### RichCtaButton
- **役割:** 統一されたCTAボタン
- **Props:**
  ```typescript
  {
    text: string;           // ボタンテキスト
    subtext?: string;       // サブテキスト（オプション）
    onClick?: () => void;   // クリックハンドラー（オプション）
    href?: string;          // リンクURL（オプション）
    className?: string;     // 追加クラス（オプション）
  }
  ```
- **スタイル:** 角丸50px、オレンジグラデーション、ホバーエフェクト

---

## 6. 運用・開発ルール (Development Rules)

### 画像の配置と参照

#### 配置場所
- **`public/`** ディレクトリに配置
- 例: `public/teacher_john.JPG`

#### 参照方法
```tsx
// ルートパスで参照
<img src="/teacher_john.JPG" alt="..." />
```

#### 画像最適化ルール

1. **FV（First View）画像:**
   ```tsx
   <img 
     src="..." 
     loading="eager" 
     fetchPriority="high" 
   />
   ```

2. **FV以外の画像:**
   ```tsx
   <img 
     src="..." 
     loading="lazy" 
   />
   ```

3. **WebP推奨:**
   - 現在は`.JPG`を使用中
   - 将来的に`.webp`への変換を推奨
   - 変換後はパスを`.webp`に更新

### パフォーマンス最適化

#### 1. 再レンダリング抑制

```typescript
// 大きなオブジェクトはuseMemoでメモ化
const content = useMemo(() => ({ ... }), []);

// イベントハンドラーはuseCallbackでメモ化
const handleTabChange = useCallback((tab) => {
  setActiveTab(tab);
}, []);
```

#### 2. イベントリスナー最適化

```typescript
// スクロールイベントにはpassive: trueを追加
window.addEventListener('scroll', handleScroll, { passive: true });
```

#### 3. アニメーション

- フェードアップアニメーション: `animate-fade-up`（0.8s）
- 遅延指定: `style={{ animationDelay: '0.2s' }}`
- ホバーエフェクト: `hover-lift`クラス

### 状態管理

- **React Hooks:** `useState`, `useEffect`, `useMemo`, `useCallback`のみ使用
- **グローバル状態管理:** なし（すべてローカル状態）
- **外部ライブラリ:** なし

### スタイリング規則

#### Tailwindクラス順序（推奨）

1. **Layout:** `fixed`, `absolute`, `relative`, `flex`, `grid`
2. **Position:** `top-0`, `left-0`, `right-0`, `bottom-0`
3. **Box Model:** `w-full`, `h-full`, `p-4`, `m-4`
4. **Typography:** `text-*`, `font-*`, `leading-*`
5. **Visual:** `bg-*`, `border-*`, `rounded-*`, `shadow-*`
6. **Misc:** `transition-*`, `hover:*`, `group`

#### カスタムクラス

- `.gradient-cta`: CTAボタン用グラデーション
- `.gradient-bg`: 背景グラデーション
- `.gradient-text`: テキストグラデーション
- `.hover-lift`: カードホバーエフェクト

### コード品質ルール

#### 1. 未使用コードの削除
- 未使用のインポートは削除
- 未使用の変数・関数は削除
- デバッグコード（`console.log`等）は削除

#### 2. 型安全性
- TypeScriptを使用
- Propsには型定義を明示
- `any`型の使用は避ける

#### 3. コメント
- 解決済みのTODOコメントは削除
- 複雑なロジックには説明コメントを追加

### 環境変数

```env
# .env.local
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...
```

**注意:** `import.meta.env.VITE_*`形式でアクセス

### ビルドとデプロイ

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

### ブラウザサポート

- モダンブラウザ（Chrome, Firefox, Safari, Edge最新版）
- レスポンシブデザイン（モバイル・タブレット・デスクトップ対応）

---

## 📝 重要な注意事項

### デザイン変更時の注意

1. **カラーパレット:** `index.html`のTailwind設定を変更
2. **アニメーション:** `index.html`のkeyframes定義を変更
3. **グラデーション:** `index.html`の`.gradient-*`クラスを変更

### コンテンツ更新時の注意

1. **テキスト内容:** `App.tsx`内の各コンポーネントを直接編集
2. **画像更新:** `public/`ディレクトリに配置後、パスを更新
3. **料金変更:** `Pricing`コンポーネント内の数値を更新

### パフォーマンス維持

1. **画像最適化:** WebP形式への変換を推奨
2. **バンドルサイズ:** 未使用インポートの定期チェック
3. **再レンダリング:** `useMemo`/`useCallback`の適切な使用

---

## 🔗 関連リソース

- **Tailwind CSS:** https://tailwindcss.com/
- **Lucide Icons:** https://lucide.dev/
- **React 19:** https://react.dev/
- **Vite:** https://vitejs.dev/

---

**このドキュメントは、他のAIがプロジェクトを理解し、開発を継続できるように設計されています。**







