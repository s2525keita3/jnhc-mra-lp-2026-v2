# パフォーマンス最適化
## 生成AI向けパフォーマンスガイドライン

> **専門家チーム**: パフォーマンスエンジニア、フロントエンドエキスパート、DevOpsエンジニア

---

## ⚡ パフォーマンス目標

### Core Web Vitals

| 指標 | 目標値 | 現在の状態 |
|------|--------|-----------|
| **LCP** (Largest Contentful Paint) | < 2.5秒 | ✅ 達成目標 |
| **FID** (First Input Delay) | < 100ms | ✅ 達成目標 |
| **CLS** (Cumulative Layout Shift) | < 0.1 | ✅ 達成目標 |

### その他の指標

- **First Contentful Paint (FCP)**: < 1.8秒
- **Time to Interactive (TTI)**: < 3.8秒
- **Total Blocking Time (TBT)**: < 200ms

---

## 🚀 実装済み最適化

### 1. コード分割（Code Splitting）

```typescript
// App.tsx
const Hero = lazy(() => import('@/components/sections').then(m => ({ default: m.Hero })));
const Problem = lazy(() => import('@/components/sections').then(m => ({ default: m.Problem })));
// ... すべてのセクションをlazy loading
```

**効果**: 
- 初回バンドルサイズの削減
- 必要なセクションのみ読み込み

### 2. 画像最適化

```typescript
// Heroセクション（FV）
<img loading="eager" fetchPriority="high" />

// その他のセクション
<img loading="lazy" />
```

**効果**:
- FV画像の優先読み込み
- その他画像の遅延読み込み

### 3. メモ化（Memoization）

```typescript
// データのメモ化
const data = useMemo(() => contentData, []);

// イベントハンドラーのメモ化
const handleEvent = useCallback(() => {
  // ...
}, []);
```

**効果**:
- 不要な再レンダリングの防止
- パフォーマンスの向上

### 4. パッシブイベントリスナー

```typescript
window.addEventListener('scroll', handleScroll, { passive: true });
```

**効果**:
- スクロールパフォーマンスの向上
- メインスレッドのブロックを防止

---

## 📦 バンドルサイズ最適化

### 現在の依存関係

```json
{
  "dependencies": {
    "react": "^19.2.0",        // ~130KB (gzipped)
    "react-dom": "^19.2.0",    // ~130KB (gzipped)
    "lucide-react": "^0.554.0"  // Tree-shaking可能
  }
}
```

### 最適化手法

1. **Tree Shaking**: 未使用コードの削除（Viteが自動実行）
2. **コード分割**: セクションごとに分割
3. **動的インポート**: `lazy()`を使用

---

## 🖼️ 画像最適化戦略

### 現在の画像

- **Hero画像**: Unsplash（外部CDN）
- **Profile画像**: `/teacher_john.JPG` (ローカル)

### 推奨される最適化

1. **WebP形式への変換**: ファイルサイズ削減（30-50%）
2. **レスポンシブ画像**: `srcset`属性の使用
3. **遅延読み込み**: FV以外は`loading="lazy"`

### 実装例（将来）

```typescript
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="..." loading="lazy" />
</picture>
```

---

## 🔄 レンダリング最適化

### React最適化パターン

#### 1. useMemo（計算結果のメモ化）

```typescript
// ✅ 推奨
const processedData = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);

// ❌ 非推奨（毎回計算）
const processedData = expensiveCalculation(data);
```

#### 2. useCallback（関数のメモ化）

```typescript
// ✅ 推奨
const handleClick = useCallback(() => {
  // ...
}, [dependency]);

// ❌ 非推奨（毎回新しい関数を作成）
const handleClick = () => {
  // ...
};
```

#### 3. React.memo（コンポーネントのメモ化）

```typescript
// 必要に応じて使用
export const Component = React.memo(({ prop }) => {
  // ...
});
```

---

## 📊 パフォーマンス計測

### 開発環境での計測

```bash
# ビルドサイズの確認
npm run build
# → dist/ ディレクトリのサイズを確認

# 開発サーバーでの計測
npm run dev
# → Chrome DevToolsのPerformanceタブで計測
```

### 本番環境での計測

- **Google PageSpeed Insights**: https://pagespeed.web.dev/
- **Lighthouse**: Chrome DevTools内蔵
- **WebPageTest**: https://www.webpagetest.org/

---

## 🎯 最適化チェックリスト

### 実装済み ✅

- [x] コード分割（lazy loading）
- [x] 画像の遅延読み込み（FV以外）
- [x] useMemo/useCallbackの使用
- [x] パッシブイベントリスナー
- [x] 未使用コードの削除

### 将来実装可能 ⏳

- [ ] WebP形式への画像変換
- [ ] レスポンシブ画像（srcset）
- [ ] Service Worker（オフライン対応）
- [ ] プリロード（重要なリソース）
- [ ] フォント最適化（font-display: swap）

---

## 🔍 パフォーマンス問題の診断

### よくある問題と解決策

#### 1. 初回読み込みが遅い

**原因**: バンドルサイズが大きい
**解決策**: 
- コード分割の確認
- 未使用依存関係の削除
- 画像の最適化

#### 2. スクロールが重い

**原因**: 過剰な再レンダリング
**解決策**:
- useMemo/useCallbackの確認
- イベントリスナーの最適化
- パッシブリスナーの使用

#### 3. 画像読み込みが遅い

**原因**: 画像サイズが大きい
**解決策**:
- WebP形式への変換
- 適切なサイズへのリサイズ
- CDNの使用

---

**最終更新**: 2024年11月






