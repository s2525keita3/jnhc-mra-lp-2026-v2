# 技術スタック・環境設定
## 生成AI向け技術仕様書

> **専門家チーム**: フロントエンドアーキテクト、DevOpsエンジニア、パフォーマンスエンジニア

---

## 🛠️ 技術スタック詳細

### Core Framework & Language

| 技術 | バージョン | 用途 | 設定ファイル |
|------|-----------|------|-------------|
| **React** | 19.2.0 | UIフレームワーク | `package.json` |
| **TypeScript** | 5.8.2 | 型安全性 | `tsconfig.json` |
| **Vite** | 6.2.0 | ビルドツール・開発サーバー | `vite.config.ts` |

### Styling

| 技術 | バージョン | 用途 | 設定場所 |
|------|-----------|------|---------|
| **Tailwind CSS** | v4 (CDN) | ユーティリティファーストCSS | `index.html` (script tag) |
| **Lucide React** | 0.554.0 | アイコンライブラリ | `package.json` |

### Build & Development

| ツール | バージョン | 用途 |
|--------|-----------|------|
| **@vitejs/plugin-react** | 5.0.0 | React用Viteプラグイン |
| **@types/node** | 22.14.0 | Node.js型定義 |

---

## ⚙️ 環境設定

### 開発環境

```bash
# 開発サーバー起動
npm run dev
# → http://localhost:3000 でアクセス可能
# → ホスト: 0.0.0.0 (全インターフェース)

# プロダクションビルド
npm run build
# → dist/ ディレクトリに出力

# ビルド結果のプレビュー
npm run preview
```

### 環境変数

**ファイル**: `.env.local` (プロジェクトルート)

```env
# Stripe決済URL
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...

# その他の環境変数（必要に応じて追加）
```

**アクセス方法**:
```typescript
import.meta.env.VITE_STRIPE_CHECKOUT_URL
```

**注意**: `VITE_`プレフィックスが必要（Viteの仕様）

---

## 📁 パスエイリアス設定

### TypeScript設定 (`tsconfig.json`)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Vite設定 (`vite.config.ts`)

```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
  }
}
```

### 使用例

```typescript
// ✅ 推奨（エイリアス使用）
import { heroData } from '@/content';
import { RichCtaButton } from '@/components/ui/RichCtaButton';

// ❌ 非推奨（相対パス）
import { heroData } from '../../content/hero';
```

---

## 🎨 Tailwind CSS設定

### 設定場所
`index.html` 内の `<script>` タグ

### 主要設定項目

#### カラーパレット
```javascript
baum: {
  500: '#FF6B00',  // メインカラー（最重要）
  // ... その他の色階調
}
```

#### カスタムクラス
- `.gradient-cta` - CTAボタン用グラデーション
- `.gradient-bg` - 背景グラデーション
- `.gradient-text` - テキストグラデーション
- `.hover-lift` - カードホバーエフェクト

#### アニメーション
- `animate-fade-up` - フェードアップ（0.8s）
- `animate-fade-in` - フェードイン（1s）
- `animate-slide-in-left` - 左からスライドイン
- `animate-slide-in-right` - 右からスライドイン

---

## 📦 依存関係管理

### インストール済みパッケージ

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "lucide-react": "^0.554.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

### パッケージ追加時の注意

1. **新しい依存関係追加時**: `npm install <package-name>`
2. **型定義が必要な場合**: `npm install -D @types/<package-name>`
3. **ビルド後確認**: `npm run build` が通ることを確認

---

## 🔧 ビルド設定

### Vite設定の詳細

```typescript
// vite.config.ts
export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',  // 全インターフェースでアクセス可能
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
});
```

### ビルド出力

- **出力ディレクトリ**: `dist/`
- **アセット**: `dist/assets/`
- **エントリーポイント**: `dist/index.html`

---

## 🌐 ブラウザサポート

### 対応ブラウザ
- Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Edge（最新版）

### 非対応
- IE11（Internet Explorer）

### レスポンシブブレークポイント
- **モバイル**: < 768px
- **タブレット**: 768px - 1024px
- **デスクトップ**: > 1024px

---

## 🚀 デプロイメント

### Vercelデプロイ

1. **自動デプロイ**: GitHubリポジトリにプッシュすると自動デプロイ
2. **ビルドコマンド**: `npm run build`
3. **出力ディレクトリ**: `dist`
4. **環境変数**: Vercelダッシュボードで設定

### 手動デプロイ

```bash
# ビルド
npm run build

# dist/ ディレクトリの内容をデプロイ
```

---

## 📊 パフォーマンス要件

### 目標指標

- **First Contentful Paint (FCP)**: < 1.8秒
- **Largest Contentful Paint (LCP)**: < 2.5秒
- **Time to Interactive (TTI)**: < 3.8秒
- **Total Blocking Time (TBT)**: < 200ms

### 最適化手法

1. **コード分割**: セクションごとにlazy loading
2. **画像最適化**: FV以外はlazy loading
3. **メモ化**: useMemo、useCallbackの使用
4. **バンドルサイズ**: 未使用コードの削除

---

**最終更新**: 2024年11月






