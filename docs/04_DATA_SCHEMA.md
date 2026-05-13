# データ構造・コンテンツ管理
## 生成AI向けデータスキーマ定義書

> **専門家チーム**: データアーキテクト、コンテンツマネージャー、バックエンドエンジニア

---

## 📊 データファイル一覧

### `src/content/` ディレクトリ

| ファイル | 用途 | 主要データ |
|---------|------|-----------|
| `hero.ts` | Heroセクション | タイトル、サブタイトル、統計、CTA |
| `problems.ts` | Problemセクション | Before/After比較データ |
| `roi.ts` | ROI計算 | コスト比較、ROI計算式 |
| `program.ts` | Weaponsセクション | 4つの武器の詳細 |
| `pricing.ts` | Pricingセクション | 料金、特典、価値スタック |
| `faq.ts` | FAQセクション | 14項目の質問と回答 |
| `closing.ts` | Closingセクション | クロージングメッセージ、CTA |
| `index.ts` | Barrel file | 全エクスポート |

---

## 📋 データ型定義

### Hero Data (`hero.ts`)

```typescript
export const heroData = {
  badge: string;                    // バッジテキスト
  title: string;                    // タイトル（改行含む）
  subtitle: string;                 // サブタイトル
  cta: {
    main: string;                   // メインCTAテキスト
    sub: string;                    // サブテキスト
  };
  stats: Array<{
    value: string;                  // 数値
    unit: string;                   // 単位
    label: string;                  // ラベル
    highlight?: boolean;            // ハイライト表示フラグ
  }>;
  specialOffers: Array<{
    text: string;
    color: string;
  }>;
};
```

### Problem Data (`problems.ts`)

```typescript
export const problemData = {
  title: string;
  subtitle: string;
  before: {
    label: string;
    items: string[];                // 課題リスト
    costCalculation: {
      label: string;
      formula: string;
      total: string;
    };
  };
  after: {
    label: string;
    items: string[];                // 解決策リスト
    costSummary: {
      label: string;
      amount: string;
    };
  };
};
```

### ROI Data (`roi.ts`)

```typescript
export const roiData = {
  headline: string;
  breakEvenPoint: {
    description: string;
    calculation: string;
  };
  comparison: {
    title: string;
    competitor: {
      name: string;
      annualFee: number;
      seminarFee: number;
      seminarsPerYear: number;
      elearningFee?: number;
      elearningCount?: number;
      totalCost: number;
      description: string;
    };
    ourAssociation: {
      name: string;
      monthlyFee: number;
      totalCost: number;
      description: string;
      savings: number;
      message: string;
    };
  };
  roiCalculation: {
    title: string;
    description: string;
    result: string;
  };
  valueStack: {
    totalValue: number;
    monthlyPrice: number;
    multiplier: number;
  };
};
```

### Program Data (`program.ts`)

```typescript
export const programData = {
  title: string;
  subtitle: string;
  weapons: Array<{
    id: number;
    name: string;
    icon: string;
    description: string;
    details: {
      schedule?: Array<{
        day: string;
        type: string;
        themes: string[];
      }>;
      categories?: Array<{
        name: string;
        count: number;
        topics: string[];
      }>;
      tools?: Array<{
        category: string;
        examples: string[];
      }>;
      schedule?: {
        day: string;
        duration: string;
        benefits: string[];
      };
      community?: {
        platforms: string[];
        features: string[];
      };
      externalValue: number;
      externalDescription: string;
    };
  }>;
};
```

### Pricing Data (`pricing.ts`)

```typescript
export const pricingData = {
  planName: string;
  monthlyPrice: number;
  monthlyPriceWithTax: number;
  yearlyPrice: number;
  yearlyPriceWithTax: number;
  features: string[];               // 機能リスト
  valueStack: {
    totalValue: number;              // 総額相当価値
    monthlyPrice: number;
    items: Array<{
      name: string;
      value: number;
      period: string;
    }>;
  };
  bonuses: Array<{
    type: string;                   // "PDF" | "Excel" | "PPT"
    name: string;
  }>;
  specialOffers: Array<{
    name: string;
    description?: string;
    price?: number;
  }>;
  comparison: {
    competitor: {
      name: string;
      annualFee: number;
      seminarFee: number;
      seminarsPerYear: number;
      totalHiddenCost: number;
    };
    ourAssociation: {
      name: string;
      monthlyFee: number;
      seminarsIncluded: boolean;
      totalCost: number;
    };
  };
};
```

### FAQ Data (`faq.ts`)

```typescript
export const faqData: Array<{
  question: string;                 // 質問文
  answer: string;                   // 回答文
}>;
```

### Closing Data (`closing.ts`)

```typescript
export const closingData = {
  headline: string;
  message: string;                  // 改行含む（\n）
  cta: {
    main: string;
    sub: string;
  };
  urgency: {
    text: string;
    highlight: boolean;
  };
};
```

---

## 🔄 データ更新のワークフロー

### テキスト変更時

1. **対象ファイル**: `src/content/*.ts` を編集
2. **型定義**: 既存の型定義を維持
3. **確認**: `npm run build` でエラーがないことを確認
4. **デプロイ**: Gitにコミット・プッシュ

### 新しいデータ項目追加時

1. **型定義の更新**: 該当するデータファイルの型を拡張
2. **デフォルト値**: 既存データに影響しないよう注意
3. **コンポーネント更新**: 新しいデータを使用するコンポーネントを更新

---

## 📝 データ管理の原則

### DO（推奨）

✅ **データは`src/content/`に集約**
✅ **コンポーネントからは読み取り専用**
✅ **型定義を維持**
✅ **Barrel file経由でエクスポート**

### DON'T（非推奨）

❌ **コンポーネント内にテキストをハードコーディング**
❌ **型定義を変更せずにデータ構造を変更**
❌ **データファイル間で循環参照**

---

## 🔍 データ検索・参照方法

### 特定のテキストを探す

```bash
# 特定のテキストを含むファイルを検索
grep -r "月額10,000円" src/content/
```

### データの使用箇所を確認

```bash
# 特定のデータが使用されているコンポーネントを検索
grep -r "heroData" src/components/
```

---

## 📊 現在のデータ値（主要な数値）

### 価格関連
- **月額会費**: 10,000円（税別）
- **年額会費**: 100,000円（税別）
- **総額相当価値**: 836,000円

### 統計数値
- **会員数**: 400名突破
- **コンサル実績**: 50社+
- **e-learning**: 50本+
- **ツール**: 30種

### ROI計算
- **セミナー相場**: 5,000円/回
- **月2回で**: 10,000円（月額会費と同額）
- **年間節約**: 約4万円

---

**最終更新**: 2024年11月






