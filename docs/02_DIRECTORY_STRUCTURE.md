# ディレクトリ構造・ファイル構成
## 生成AI向けファイルマップ

> **専門家チーム**: ソフトウェアアーキテクト、プロジェクトマネージャー

---

## 📂 完全なディレクトリ構造

```
jnhc-mra-lp_new/
├── public/                          # 静的アセット
│   └── teacher_john.JPG            # 講師プロフィール画像
│
├── src/                             # ソースコード
│   ├── App.tsx                      # メインアプリケーション（セクション順序定義）
│   │
│   ├── components/                  # UIコンポーネント
│   │   ├── layout/                  # レイアウトコンポーネント
│   │   │   ├── Header.tsx          # 固定ヘッダー
│   │   │   ├── Footer.tsx          # フッター
│   │   │   ├── ProgressBar.tsx     # スクロール進捗バー
│   │   │   ├── StickyCta.tsx       # 固定CTA
│   │   │   └── index.ts            # Barrel file
│   │   │
│   │   ├── sections/                # セクションコンポーネント
│   │   │   ├── Hero.tsx            # ファーストビュー
│   │   │   ├── Problem.tsx         # 課題提示
│   │   │   ├── RoiSection.tsx      # ROI・コスト比較
│   │   │   ├── Weapons.tsx         # 4つの強力な武器
│   │   │   ├── ValueStack.tsx      # 価値スタック
│   │   │   ├── Pricing.tsx         # 料金・申し込み
│   │   │   ├── Testimonials.tsx    # お客様の声
│   │   │   ├── Profile.tsx         # 講師プロフィール
│   │   │   ├── FAQ.tsx             # よくある質問
│   │   │   ├── Closing.tsx         # クロージングCTA
│   │   │   └── index.ts            # Barrel file
│   │   │
│   │   ├── ui/                      # UIコンポーネント
│   │   │   ├── RichCtaButton.tsx   # CTAボタン
│   │   │   └── index.ts            # Barrel file
│   │   │
│   │   └── legal/                   # 法的文書
│   │       ├── LegalDocuments.tsx  # 利用規約・プライバシーポリシー
│   │       └── index.ts            # Barrel file
│   │
│   ├── content/                     # コンテンツデータ（テキスト分離）
│   │   ├── hero.ts                 # Heroセクションのテキスト
│   │   ├── problems.ts             # Problemセクションのテキスト
│   │   ├── roi.ts                  # ROI計算・比較データ
│   │   ├── program.ts              # Weapons（4つの武器）の詳細
│   │   ├── pricing.ts              # 料金・特典データ
│   │   ├── faq.ts                  # よくある質問（14項目）
│   │   ├── closing.ts              # クロージングメッセージ
│   │   └── index.ts                # Barrel file
│   │
│   ├── shared/                      # 共通リソース
│   │   ├── components/             # 共通コンポーネント（旧構造、互換性のため残存）
│   │   ├── constants/              # 定数
│   │   │   ├── stripe.ts          # Stripe決済URL
│   │   │   └── index.ts           # Barrel file
│   │   ├── layout/                 # レイアウト（旧構造、互換性のため残存）
│   │   └── types/                 # 型定義（空、将来拡張用）
│   │
│   └── features/                    # 機能コンポーネント（旧構造、互換性のため残存）
│       ├── hero/
│       ├── problem/
│       ├── roi/
│       ├── weapons/
│       ├── value-stack/
│       ├── testimonials/
│       ├── profile/
│       ├── pricing/
│       ├── faq/
│       └── closing/
│
├── docs/                            # ドキュメント（新規作成）
│   ├── 00_PROJECT_OVERVIEW.md
│   ├── 01_TECHNICAL_STACK.md
│   ├── 02_DIRECTORY_STRUCTURE.md
│   └── ... (その他のドキュメント)
│
├── dist/                            # ビルド出力（自動生成）
│   ├── assets/
│   └── index.html
│
├── node_modules/                    # 依存パッケージ（自動生成）
│
├── index.html                       # HTMLテンプレート（Tailwind設定含む）
├── index.tsx                        # Reactエントリーポイント
├── vite.config.ts                   # Vite設定
├── tsconfig.json                    # TypeScript設定
├── package.json                     # 依存関係とスクリプト
├── package-lock.json                # 依存関係ロックファイル
│
└── ドキュメントファイル
    ├── AI_HANDOFF.md               # 技術的な詳細
    ├── LP_STRUCTURE_ANALYSIS.md    # LP構造分析
    └── MARKETING_CREATIVE_BIBLE.md # マーケティング戦略
```

---

## 📁 ディレクトリの役割と責任

### `src/components/` - UIコンポーネント

#### `layout/` - レイアウトコンポーネント
- **役割**: ページ全体のレイアウトを制御
- **コンポーネント**:
  - `Header.tsx`: 固定ヘッダー（常にCTAアクセス可能）
  - `Footer.tsx`: フッター（リンク集）
  - `ProgressBar.tsx`: スクロール進捗表示
  - `StickyCta.tsx`: 固定CTA（スクロール中も表示）

#### `sections/` - セクションコンポーネント
- **役割**: LPの各セクションを表現
- **原則**: データは`src/content/`から読み込む（ハードコーディング禁止）
- **コンポーネント**: 10個のセクションコンポーネント

#### `ui/` - UIコンポーネント
- **役割**: 再利用可能なUI部品
- **コンポーネント**:
  - `RichCtaButton.tsx`: CTAボタン（グラデーション、ホバーエフェクト）

#### `legal/` - 法的文書
- **役割**: 利用規約、プライバシーポリシー、特定商取引法
- **コンポーネント**: `LegalDocuments.tsx`

### `src/content/` - コンテンツデータ

- **役割**: すべてのテキストデータを集約管理
- **原則**: 
  - コンポーネントからは読み取り専用
  - 更新時はこのディレクトリのみ編集
  - 型定義を維持

### `src/shared/` - 共通リソース

- **constants/**: 定数（Stripe決済URLなど）
- **types/**: 型定義（将来拡張用）

### `src/features/` - 機能コンポーネント（旧構造）

- **注意**: 旧構造のため、現在は`src/components/sections/`を使用
- **互換性**: 既存のインポートパスを維持するため残存

---

## 🔄 ファイル命名規則

### コンポーネントファイル
- **命名**: PascalCase（例: `Hero.tsx`, `RichCtaButton.tsx`）
- **拡張子**: `.tsx` (TypeScript + JSX)

### データファイル
- **命名**: camelCase（例: `hero.ts`, `pricing.ts`）
- **拡張子**: `.ts` (TypeScript)

### Barrel Files
- **命名**: `index.ts`
- **役割**: ディレクトリ内のエクスポートを集約

---

## 📦 インポートパターン

### 推奨パターン

```typescript
// ✅ エイリアス使用
import { heroData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';
import { STRIPE_CHECKOUT_URL } from '@/shared/constants';

// ✅ Barrel file経由
import { Hero, Problem, Pricing } from '@/components/sections';
```

### 非推奨パターン

```typescript
// ❌ 相対パス（深い階層）
import { heroData } from '../../../content/hero';

// ❌ 直接インポート（Barrel fileがある場合）
import { Hero } from '@/components/sections/Hero';
```

---

## 🗂️ ファイルサイズ目安

### コンポーネントファイル
- **推奨**: 200行以下
- **最大**: 300行（超える場合は分割検討）

### データファイル
- **推奨**: 100行以下
- **最大**: 200行

---

## 📝 ファイル作成時のチェックリスト

1. ✅ 適切なディレクトリに配置されているか
2. ✅ 命名規則に従っているか
3. ✅ Barrel file（`index.ts`）にエクスポートを追加したか
4. ✅ 型定義が適切か
5. ✅ インポートパスがエイリアス（`@/`）を使用しているか

---

**最終更新**: 2024年11月






