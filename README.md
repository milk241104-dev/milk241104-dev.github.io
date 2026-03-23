# Rainau Link Page

`index.html` `styles.css` `script.js` だけで動く、GitHub Pages 向けの静的リンク集ページです。

## カスタマイズ箇所

- テキストやリンク先は `script.js` の `PROFILE` を編集
- メイン画像は `hero-photo.jpg` を置くと最優先で使われる
- 既存の予備画像は `rainau-profile.jpg` と `rainau-profile.png`

## GitHub Pages で公開する手順

1. GitHub で新しい公開リポジトリを作る
2. このフォルダ内のファイルを、そのリポジトリのルートへ配置する
3. `main` ブランチへ push する
4. GitHub の `Settings` -> `Pages` を開く
5. `Build and deployment` で `Deploy from a branch` を選ぶ
6. Branch は `main`、Folder は `/ (root)` を選んで保存する
7. 数分待って、表示された Pages URL を開いて確認する

## 公開後の確認ポイント

- スマホで横型プロフィールの見え方が崩れていないか
- 各リンクが新しいタブで開くか
- 公開ファイル内に API キーや秘密情報が入っていないか
- 必要なら `Settings` -> `Pages` からカスタムドメインを追加し、HTTPS を有効化する
