# コンポーネントアーキテクチャ
## 生成AI向けコンポーネント設計書

> **専門家チーム**: フロントエンドアーキテクト、Reactエキスパート、UIエンジニア

---

## 🏗️ コンポーネント階層構造

```
App.tsx (ルート)
├── ProgressBar (固定)
├── Header (固定)
├── main
│   ├── Hero (lazy)
│   ├── Problem (lazy)
│   ├── RoiSection (lazy)
│   ├── Weapons (lazy)
│   ├── ValueStack (lazy)
│   ├── Pricing (lazy)
│   ├── Testimonials (lazy)
│   ├── Profile (lazy)
│   ├── FAQ (lazy)
│   └── Closing (lazy)
├── LegalDocuments
├── Footer
└── StickyCta (固定)
```

---

## 📦 コンポーネント分類

### 1. Layout Components (`src/components/layout/`)

#### Header.tsx
- **役割**: 固定ヘッダー（常にCTAアクセス可能）
- **状態管理**: `isScrolled` (スクロール位置)
- **最適化**: `useCallback`でスクロールハンドラーをメモ化
- **依存**: `RichCtaButton`, `STRIPE_CHECKOUT_URL`

#### Footer.tsx
- **役割**: フッター（リンク集）
- **状態管理**: なし（静的）
- **依存**: なし

#### ProgressBar.tsx
- **役割**: スクロール進捗表示
- **状態管理**: `scrollProgress` (0-1)
- **最適化**: `useCallback`でスクロールハンドラーをメモ化
- **依存**: なし

#### StickyCta.tsx
- **役割**: 固定CTA（スクロール中も表示）
- **状態管理**: `isVisible` (表示/非表示)
- **最適化**: `useCallback`でスクロールハンドラーをメモ化
- **依存**: `RichCtaButton`, `STRIPE_CHECKOUT_URL`

### 2. Section Components (`src/components/sections/`)

#### Hero.tsx
- **役割**: ファーストビュー（価値提案）
- **データ**: `heroData` from `@/content`
- **最適化**: `useMemo`でタイトル行をメモ化
- **画像**: `loading="eager"`, `fetchPriority="high"`

#### Problem.tsx
- **役割**: 課題提示（Before/After）
- **データ**: `problemData` from `@/content`
- **最適化**: `useMemo`でアイテムリストをメモ化

#### RoiSection.tsx
- **役割**: ROI・コスト比較
- **データ**: `roiData` from `@/content`
- **最適化**: `useMemo`でデータをメモ化

#### Weapons.tsx
- **役割**: 4つの強力な武器の詳細
- **データ**: `programData` from `@/content`
- **状態管理**: `activeTab` (タブ切り替え)
- **最適化**: `useMemo`でコンテンツをメモ化、`useCallback`でタブハンドラーをメモ化

#### ValueStack.tsx
- **役割**: 価値スタック（836万円相当）
- **データ**: `pricingData.valueStack` from `@/content`
- **最適化**: `useMemo`でデータをメモ化

#### Pricing.tsx
- **役割**: 料金・申し込み
- **データ**: `pricingData` from `@/content`
- **ID**: `id="apply"` (アンカーリンク用)
- **最適化**: `useMemo`でリストをメモ化
- **依存**: `RichCtaButton`, `STRIPE_CHECKOUT_URL`

#### Testimonials.tsx
- **役割**: お客様の声
- **データ**: 静的データ（コンポーネント内）
- **最適化**: `useMemo`でデータをメモ化

#### Profile.tsx
- **役割**: 講師プロフィール
- **画像**: `/teacher_john.JPG` (lazy loading)
- **状態管理**: なし（静的）

#### FAQ.tsx
- **役割**: よくある質問（14項目）
- **データ**: `faqData` from `@/content`
- **最適化**: `useMemo`でデータをメモ化

#### Closing.tsx
- **役割**: クロージングCTA
- **データ**: `closingData` from `@/content`
- **最適化**: `useMemo`でデータをメモ化
- **依存**: `RichCtaButton`, `STRIPE_CHECKOUT_URL`

### 3. UI Components (`src/components/ui/`)

#### RichCtaButton.tsx
- **役割**: CTAボタン（再利用可能）
- **Props**:
  - `text: string` - メインテキスト
  - `subtext?: string` - サブテキスト（オプション）
  - `href?: string` - リンクURL
  - `onClick?: () => void` - クリックハンドラー
  - `className?: string` - 追加クラス
- **スタイル**: グラデーション、ホバーエフェクト、角丸50px

### 4. Legal Components (`src/components/legal/`)

#### LegalDocuments.tsx
- **役割**: 利用規約、プライバシーポリシー、特定商取引法
- **状態管理**: なし（静的、`<details>`タグで開閉）

---

## 🔄 コンポーネント間の依存関係

### データフロー

```
src/content/*.ts
    ↓
src/components/sections/*.tsx
    ↓
src/App.tsx
```

### コンポーネント依存

```
App.tsx
├── layout/ (Header, Footer, ProgressBar, StickyCta)
│   └── ui/ (RichCtaButton)
├── sections/ (全セクション)
│   └── ui/ (RichCtaButton)
└── legal/ (LegalDocuments)
```

---

## ⚡ パフォーマンス最適化

### Lazy Loading

```typescript
// App.tsx
const Hero = lazy(() => import('@/components/sections').then(m => ({ default: m.Hero })));

// 使用
<Suspense fallback={<div className="h-screen" />}>
  <Hero />
</Suspense>
```

**適用箇所**: すべてのセクションコンポーネント（Hero以外）

### メモ化

```typescript
// データのメモ化
const data = useMemo(() => contentData, []);

// イベントハンドラーのメモ化
const handleClick = useCallback(() => {
  // ...
}, []);
```

**適用箇所**: 
- データ配列: `useMemo`
- イベントハンドラー: `useCallback`
- 計算結果: `useMemo`

---

## 🎨 コンポーネントスタイルパターン

### セクションコンポーネントの基本構造

```typescript
export const SectionName = () => {
  // 1. データの読み込み（useMemo）
  const data = useMemo(() => sectionData, []);
  
  // 2. 状態管理（必要に応じて）
  const [state, setState] = useState();
  
  // 3. イベントハンドラー（useCallback）
  const handleEvent = useCallback(() => {
    // ...
  }, []);
  
  // 4. JSX
  return (
    <section className="py-20 bg-bg-cream">
      {/* コンテンツ */}
    </section>
  );
};
```

---

## 🔍 コンポーネント検索方法

### 特定の機能を持つコンポーネントを探す

```bash
# CTAボタンを含むコンポーネント
grep -r "RichCtaButton" src/components/

# 特定のデータを使用するコンポーネント
grep -r "heroData" src/components/
```

---

## 📝 コンポーネント作成時のチェックリスト

1. ✅ 適切なディレクトリに配置されているか
2. ✅ データは`@/content`から読み込んでいるか
3. ✅ `useMemo`/`useCallback`で最適化されているか
4. ✅ 型定義が適切か
5. ✅ Barrel file（`index.ts`）にエクスポートを追加したか
6. ✅ 画像の`loading`属性が適切か（FV以外は`lazy`）

---

**最終更新**: 2024年11月






