# デザインシステム・UI/UX仕様
## 生成AI向けデザインガイドライン

> **専門家チーム**: UI/UXデザイナー、ビジュアルデザイナー、フロントエンドエンジニア

---

## 🎨 カラーパレット

### メインカラー（オレンジ系 - バウムブルーム）

```javascript
baum: {
  50: '#FFF8F0',   // 最も薄い（背景用）
  100: '#FFF5EB',  // ライト背景
  200: '#FFE6CC',  // ボーダー・アクセント
  300: '#FFD6AD',  // ホバー状態
  400: '#FFB570',  // セカンダリアクセント
  500: '#FF6B00',  // メインカラー（最重要）★
  600: '#E55A00',  // ホバー・アクティブ
  700: '#CC5000',  // ダークアクセント
  800: '#A33F00',  // テキスト（濃い）
  900: '#6B2A00',  // 最も濃い
}
```

**使用原則**:
- **CTAボタン**: `baum-500` (#FF6B00)
- **ホバー状態**: `baum-600` (#E55A00)
- **背景アクセント**: `baum-100` (#FFF5EB)
- **ボーダー**: `baum-200` (#FFE6CC)

### テキストカラー

```javascript
text: {
  primary: '#000000',    // メインテキスト（見出し、本文）
  secondary: '#333333',  // サブテキスト
  tertiary: '#666666',   // 補助テキスト
  light: '#999999',      // 軽いテキスト（注釈など）
}
```

### 背景カラー

```javascript
bg: {
  white: '#FFFFFF',        // 白背景
  cream: '#FFF8F0',        // クリーム背景（セクション背景）
  'orange-light': '#FFF5EB', // オレンジライト背景（カード背景）
}
```

---

## 📐 タイポグラフィ

### フォントファミリー

```css
font-family: "Noto Sans JP", -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### フォントサイズ（Tailwindクラス）

- **見出し1**: `text-4xl md:text-6xl` (Heroタイトル)
- **見出し2**: `text-3xl md:text-5xl` (セクションタイトル)
- **見出し3**: `text-2xl md:text-3xl` (サブタイトル)
- **本文**: `text-base md:text-lg`
- **小さいテキスト**: `text-sm` または `text-xs`

### フォントウェイト

- **通常**: `font-normal` (400)
- **太字**: `font-bold` (700)
- **極太**: `font-black` (900) - 見出しのみ

---

## 🎭 UIコンポーネントスタイル

### CTAボタン（RichCtaButton）

```typescript
// 基本クラス
className="rounded-[50px] shadow-cta hover:shadow-cta-hover 
          transform transition-all duration-300 
          hover:-translate-y-0.5 active:translate-y-0"

// グラデーション
className="gradient-cta" // オレンジグラデーション
```

**視覚的特徴**:
- 角丸: 50px（完全に丸い）
- シャドウ: `shadow-cta` → ホバー時 `shadow-cta-hover`
- ホバー: 少し浮き上がる（`-translate-y-0.5`）
- グラデーション: オレンジ系

### カード

```typescript
// 基本カード
className="bg-white rounded-xl shadow-card 
           border border-baum-100 hover-lift 
           transition duration-300"

// ホバー時
// - translateY(-8px)
// - shadow-card-hover
```

**視覚的特徴**:
- 角丸: 24px (`rounded-xl`)
- シャドウ: `shadow-card` → ホバー時 `shadow-card-hover`
- ボーダー: `border-baum-100` (薄いオレンジ)
- ホバー: 浮き上がる（`hover-lift`）

---

## 🎬 アニメーション

### フェードアップ

```css
@keyframes fadeUp {
  0% { 
    opacity: 0; 
    transform: translateY(40px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}
```

**使用**: `animate-fade-up` (0.8s ease-out)

### 遅延アニメーション

```tsx
style={{ animationDelay: '0.2s' }}
```

**使用例**: 複数のカードを順番に表示

### ホバーエフェクト

```css
.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}
```

---

## 📱 レスポンシブデザイン

### ブレークポイント

- **モバイル**: デフォルト（< 768px）
- **タブレット**: `md:` プレフィックス（≥ 768px）
- **デスクトップ**: `lg:` プレフィックス（≥ 1024px）

### グリッドレイアウト

```tsx
// モバイル: 1列、デスクトップ: 2列
className="grid grid-cols-1 md:grid-cols-2 gap-6"

// モバイル: 2列、デスクトップ: 4列
className="grid grid-cols-2 md:grid-cols-4 gap-4"
```

### テキストサイズ調整

```tsx
// モバイル: 小さい、デスクトップ: 大きい
className="text-2xl md:text-4xl"
```

---

## 🎨 カスタムクラス

### グラデーション

```css
.gradient-cta {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);
}

.gradient-bg {
  background: linear-gradient(180deg, #FFF8F0 0%, #FFFFFF 100%);
}

.gradient-text {
  background: linear-gradient(135deg, #FF6B00 0%, #FF8C42 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### シャドウ

```javascript
boxShadow: {
  'cta': '0 8px 24px rgba(255, 107, 0, 0.3)',
  'cta-hover': '0 12px 32px rgba(255, 107, 0, 0.4)',
  'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
  'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
}
```

---

## 🎯 デザイン原則

### 1. 視覚的階層
- **重要度順**: サイズ、色、太さで表現
- **CTA**: 常に目立つ（オレンジ、大きい、グラデーション）

### 2. 一貫性
- **角丸**: カード24px、ボタン50px
- **スペーシング**: 8pxの倍数（4, 8, 12, 16, 20, 24...）
- **シャドウ**: 統一された深度

### 3. アクセシビリティ
- **コントラスト比**: 4.5:1以上（WCAG AA準拠）
- **フォーカス状態**: 明確な視覚的フィードバック
- **タッチターゲット**: 最小44×44px

---

## 📐 スペーシングシステム

### パディング・マージン

```typescript
// セクション間
py-20  // 上下20 (80px)
py-24  // 上下24 (96px)

// カード内
p-4    // 16px
p-6    // 24px
p-8    // 32px
p-12   // 48px

// ギャップ
gap-3  // 12px
gap-4  // 16px
gap-6  // 24px
gap-8  // 32px
```

---

## 🎨 セクション別背景色パターン

### 現在の背景色の流れ

1. **Hero**: `gradient-bg` (グラデーション)
2. **Problem**: `bg-bg-cream`
3. **RoiSection**: `bg-bg-cream`
4. **Weapons**: `bg-bg-cream`
5. **ValueStack**: `bg-bg-cream`
6. **Pricing**: `gradient-bg` (グラデーション)
7. **Testimonials**: `bg-white`
8. **Profile**: `bg-bg-cream`
9. **FAQ**: `bg-white`
10. **Closing**: `bg-gradient-to-b from-bg-cream via-white to-bg-cream`

**原則**: 白とクリームを交互に配置し、視覚的な区切りを維持

---

**最終更新**: 2024年11月






