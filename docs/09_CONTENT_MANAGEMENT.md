# コンテンツ管理・更新ガイド
## 生成AI向けコンテンツ管理マニュアル

> **専門家チーム**: コンテンツマネージャー、コピーライター、マーケター

---

## 📝 コンテンツ更新の基本原則

### 黄金ルール

1. **すべてのテキストは`src/content/`に集約**
2. **コンポーネントからは読み取り専用**
3. **型定義を維持**
4. **更新後はビルド確認**

---

## 📂 コンテンツファイル一覧と更新方法

### 1. Heroセクション (`src/content/hero.ts`)

**更新可能な項目**:
- `badge`: バッジテキスト
- `title`: メインタイトル（改行は`\n`）
- `subtitle`: サブタイトル
- `cta.main`: CTAメインテキスト
- `cta.sub`: CTAサブテキスト
- `stats`: 統計数値（value, unit, label）

**更新例**:
```typescript
export const heroData = {
  badge: "新しいバッジテキスト",
  title: "新しいタイトル\n2行目",
  // ...
};
```

### 2. Problemセクション (`src/content/problems.ts`)

**更新可能な項目**:
- `title`: セクションタイトル
- `subtitle`: サブタイトル
- `before.items`: Beforeリスト（課題）
- `after.items`: Afterリスト（解決策）
- `before.costCalculation`: コスト計算式
- `after.costSummary`: コストサマリー

### 3. ROIセクション (`src/content/roi.ts`)

**更新可能な項目**:
- `comparison.competitor`: 競合データ（市場価格）
- `comparison.ourAssociation`: 自社データ
- `roiCalculation`: ROI計算式

**注意**: 数値は`number`型で管理

### 4. Program/Weaponsセクション (`src/content/program.ts`)

**更新可能な項目**:
- `title`: セクションタイトル
- `subtitle`: サブタイトル
- `weapons[].name`: 武器名
- `weapons[].description`: 説明文
- `weapons[].details`: 詳細データ

### 5. Pricingセクション (`src/content/pricing.ts`)

**更新可能な項目**:
- `planName`: プラン名
- `monthlyPrice`: 月額価格（税別）
- `yearlyPrice`: 年額価格（税別）
- `features`: 機能リスト
- `valueStack.items`: 価値スタック項目
- `bonuses`: 特典リスト
- `specialOffers`: 特別オファー

**重要**: 価格変更時は`valueStack.totalValue`も再計算

### 6. FAQセクション (`src/content/faq.ts`)

**更新可能な項目**:
- `faqData[].question`: 質問文
- `faqData[].answer`: 回答文

**追加方法**:
```typescript
export const faqData = [
  // 既存の質問...
  {
    question: "新しい質問",
    answer: "新しい回答"
  }
];
```

### 7. Closingセクション (`src/content/closing.ts`)

**更新可能な項目**:
- `headline`: ヘッドライン
- `message`: メッセージ（改行は`\n`）
- `cta.main`: CTAメインテキスト
- `cta.sub`: CTAサブテキスト
- `urgency.text`: 緊急性テキスト

---

## 🔄 コンテンツ更新ワークフロー

### ステップ1: ファイル編集

```bash
# 例: Heroセクションのタイトルを変更
# src/content/hero.ts を編集
```

### ステップ2: ビルド確認

```bash
npm run build
```

### ステップ3: ローカル確認

```bash
npm run dev
# → ブラウザで確認
```

### ステップ4: コミット・プッシュ

```bash
git add src/content/hero.ts
git commit -m "Update: Heroセクションのタイトル変更"
git push
```

---

## ⚠️ 注意事項

### 型定義の維持

```typescript
// ✅ 正しい（型定義に準拠）
export const heroData: HeroData = {
  title: "タイトル",
  // ...
};

// ❌ 間違い（型定義を無視）
export const heroData = {
  newField: "新しいフィールド", // 型定義にない
  // ...
};
```

### 改行の扱い

```typescript
// ✅ 正しい（\nを使用）
title: "1行目\n2行目"

// ❌ 間違い（実際の改行）
title: `1行目
2行目`
```

### 数値の扱い

```typescript
// ✅ 正しい（number型）
monthlyPrice: 10000

// ❌ 間違い（文字列）
monthlyPrice: "10000"
```

---

## 📊 コンテンツ更新の影響範囲

### 影響を受けるコンポーネント

| コンテンツファイル | 影響コンポーネント |
|-------------------|------------------|
| `hero.ts` | `Hero.tsx` |
| `problems.ts` | `Problem.tsx` |
| `roi.ts` | `RoiSection.tsx` |
| `program.ts` | `Weapons.tsx` |
| `pricing.ts` | `Pricing.tsx`, `ValueStack.tsx` |
| `faq.ts` | `FAQ.tsx` |
| `closing.ts` | `Closing.tsx` |

---

## 🔍 コンテンツ検索方法

### 特定のテキストを探す

```bash
# プロジェクト全体で検索
grep -r "月額10,000円" src/content/

# 特定のファイルで検索
grep "月額10,000円" src/content/pricing.ts
```

### 使用箇所を確認

```bash
# 特定のデータが使用されているコンポーネント
grep -r "heroData" src/components/
```

---

## 📝 コンテンツ更新チェックリスト

- [ ] 対象ファイルを特定
- [ ] 型定義を確認
- [ ] テキストを更新
- [ ] `npm run build`でエラー確認
- [ ] ローカルで動作確認
- [ ] Gitにコミット
- [ ] プッシュしてデプロイ

---

**最終更新**: 2024年11月






