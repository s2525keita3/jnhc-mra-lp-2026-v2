# デプロイメント・運用
## 生成AI向け運用マニュアル

> **専門家チーム**: DevOpsエンジニア、インフラエンジニア、SRE

---

## 🚀 デプロイメント環境

### ホスティング
- **プラットフォーム**: Vercel
- **自動デプロイ**: GitHubリポジトリにプッシュすると自動デプロイ
- **ビルドコマンド**: `npm run build`
- **出力ディレクトリ**: `dist`

### デプロイフロー

```
1. ローカルで変更
   ↓
2. Gitにコミット・プッシュ
   git add .
   git commit -m "変更内容"
   git push
   ↓
3. Vercelが自動検知
   ↓
4. ビルド実行（npm run build）
   ↓
5. デプロイ完了（数分）
```

---

## 🔧 環境変数管理

### Vercelでの環境変数設定

1. **Vercelダッシュボード**にアクセス
2. **プロジェクト設定** → **Environment Variables**
3. 以下の変数を設定:

```env
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...
```

### ローカル環境での設定

**ファイル**: `.env.local` (プロジェクトルート)

```env
VITE_STRIPE_CHECKOUT_URL=https://buy.stripe.com/...
```

**注意**: 
- `.env.local`はGitにコミットしない（`.gitignore`に追加）
- `VITE_`プレフィックスが必要

---

## 📦 ビルドプロセス

### ビルドコマンド

```bash
npm run build
```

### ビルド出力

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [image-files]
```

### ビルド確認

```bash
# ビルド結果のプレビュー
npm run preview
```

---

## 🔍 トラブルシューティング

### ビルドエラー

#### エラー: TypeScript型エラー

```bash
# 型チェックのみ実行
npx tsc --noEmit
```

**解決策**:
- 型定義の確認
- `any`型の使用を避ける
- 型アサーションの適切な使用

#### エラー: モジュール解決エラー

```bash
# パスエイリアスの確認
# tsconfig.json と vite.config.ts の設定を確認
```

**解決策**:
- `@/`エイリアスの設定確認
- インポートパスの確認

### デプロイエラー

#### エラー: 環境変数が見つからない

**解決策**:
- Vercelダッシュボードで環境変数を設定
- `VITE_`プレフィックスを確認

#### エラー: ビルドタイムアウト

**解決策**:
- ビルド時間の最適化
- Vercelのビルド設定を確認

---

## 📊 モニタリング

### 推奨される監視項目

1. **デプロイステータス**: Vercelダッシュボードで確認
2. **ビルド時間**: 通常1-2分
3. **エラーログ**: Vercelのログを確認

### パフォーマンス監視

- **Google Analytics**: ページビュー、滞在時間
- **Vercel Analytics**: パフォーマンスメトリクス
- **Lighthouse**: 定期的なスコア確認

---

## 🔄 ロールバック手順

### Vercelでのロールバック

1. **Vercelダッシュボード**にアクセス
2. **Deployments**タブを開く
3. 以前の正常なデプロイを選択
4. **Promote to Production**をクリック

### Gitでのロールバック

```bash
# 以前のコミットに戻す
git revert HEAD
git push
```

---

## 🔐 セキュリティ

### 環境変数の管理

- ✅ `.env.local`はGitにコミットしない
- ✅ Vercelで環境変数を設定
- ✅ 機密情報は環境変数で管理

### 依存関係の更新

```bash
# 依存関係の確認
npm outdated

# セキュリティ脆弱性の確認
npm audit

# 修正
npm audit fix
```

---

## 📝 運用チェックリスト

### デプロイ前

- [ ] `npm run build`が成功する
- [ ] リンターエラーがない
- [ ] 型エラーがない
- [ ] ローカルで動作確認

### デプロイ後

- [ ] 本番環境でページが表示される
- [ ] すべてのセクションが表示される
- [ ] CTAボタンが動作する
- [ ] モバイル・デスクトップ両方で確認

---

**最終更新**: 2024年11月






