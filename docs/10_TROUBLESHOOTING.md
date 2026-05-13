# トラブルシューティング・FAQ
## 生成AI向け問題解決ガイド

> **専門家チーム**: テクニカルサポート、QAエンジニア、シニアエンジニア

---

## 🐛 よくある問題と解決策

### ビルドエラー

#### エラー: `Cannot find module '@/...'`

**原因**: パスエイリアスの設定不備

**解決策**:
1. `tsconfig.json`の`paths`設定を確認
2. `vite.config.ts`の`alias`設定を確認
3. 開発サーバーを再起動

```bash
# 開発サーバー再起動
npm run dev
```

#### エラー: `Property 'env' does not exist on type 'ImportMeta'`

**原因**: TypeScript型定義の不備

**解決策**:
- このエラーは実行時には問題ない（Viteが解決）
- 型定義ファイル（`vite-env.d.ts`）を作成するか、無視

#### エラー: `Unexpected token` または構文エラー

**原因**: 文字列内の引用符エスケープ

**解決策**:
```typescript
// ✅ 正しい
description: "1応募1採用に近づけるために「伝えること」"

// ❌ 間違い
description: "1応募1採用に近づけるために"伝えること""
```

---

### ランタイムエラー

#### エラー: `Cannot read property 'map' of undefined`

**原因**: データが`undefined`の可能性

**解決策**:
```typescript
// ✅ 安全なアクセス
const items = useMemo(() => data?.items || [], [data]);

// ❌ 危険
const items = data.items; // dataがundefinedの場合エラー
```

#### エラー: 画像が表示されない

**原因**: パスの間違い

**解決策**:
```typescript
// ✅ 正しい（public/からの相対パス）
<img src="/teacher_john.JPG" />

// ❌ 間違い
<img src="./teacher_john.JPG" />
```

---

### デザインの問題

#### 背景色が連続して区切りが消える

**原因**: 同じ背景色のセクションが連続

**解決策**:
```typescript
// セクションの背景色を変更
<section className="py-20 bg-white">  // bg-bg-cream に変更
```

#### アニメーションが動作しない

**原因**: Tailwind設定の不備

**解決策**:
1. `index.html`のTailwind設定を確認
2. `keyframes`定義を確認
3. ブラウザのキャッシュをクリア

#### レスポンシブが崩れる

**原因**: ブレークポイントの使い方

**解決策**:
```typescript
// ✅ 正しい（モバイルファースト）
className="text-base md:text-lg"

// ❌ 間違い
className="text-lg md:text-base"  // 逆順
```

---

### パフォーマンスの問題

#### ページが重い

**原因**: 過剰な再レンダリング

**解決策**:
1. `useMemo`/`useCallback`の使用を確認
2. 不要な依存関係を削除
3. 開発ツールのProfilerで確認

#### スクロールが重い

**原因**: スクロールイベントの過剰な処理

**解決策**:
```typescript
// ✅ 正しい（パッシブリスナー）
window.addEventListener('scroll', handleScroll, { passive: true });

// ❌ 間違い
window.addEventListener('scroll', handleScroll);
```

---

## 🔧 開発環境の問題

### 開発サーバーが起動しない

```bash
# ポートが使用中の場合
# 別のポートを指定
npm run dev -- --port 3001

# node_modulesを再インストール
rm -rf node_modules
npm install
```

### ホットリロードが動作しない

**解決策**:
1. ブラウザのキャッシュをクリア
2. 開発サーバーを再起動
3. ファイルの保存を確認

---

## 📊 デバッグ方法

### React DevTools

1. Chrome拡張機能をインストール
2. コンポーネントツリーで状態を確認
3. PropsとStateを確認

### コンソールログ

```typescript
// 開発時のみ使用（本番では削除）
console.log('Debug:', data);
```

**注意**: 本番ビルド前に削除すること

---

## 🆘 緊急時の対応

### デプロイが失敗した場合

1. **Vercelダッシュボード**でエラーログを確認
2. **ローカルでビルド**してエラーを再現
3. **前のコミットに戻す**（必要に応じて）

```bash
# 前のコミットに戻す
git revert HEAD
git push
```

### ページが表示されない場合

1. **ブラウザのコンソール**でエラーを確認
2. **ネットワークタブ**でリソースの読み込みを確認
3. **Vercelのログ**を確認

---

## 📚 参考リソース

### 公式ドキュメント

- **React**: https://react.dev/
- **Vite**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **TypeScript**: https://www.typescriptlang.org/

### プロジェクト内ドキュメント

- `AI_HANDOFF.md` - 技術的な詳細
- `LP_STRUCTURE_ANALYSIS.md` - LP構造分析
- `MARKETING_CREATIVE_BIBLE.md` - マーケティング戦略

---

**最終更新**: 2024年11月






