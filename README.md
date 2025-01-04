# template-react

このリポジトリはReactのテンプレートプロジェクトです。
このプロジェクトは、[Dev Container](https://code.visualstudio.com/docs/devcontainers/containers)での利用を想定した構成になっています。

## ディレクトリ構成

TODO:
```bash
tree -I 'vendor|node_modules'
```

## 開発環境構築

## 必要なツール

- [VS Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/ja-jp/)
- VS Codeの[Dev Containers拡張機能](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### 開発環境の準備

1. リポジトリをクローン

   ```bash
   git clone git@github.com:yuuu-takahashi/template-react.git
   cd template-react
   ```

3. VS Codeのの左下「><」アイコンをクリックし、「Remote-Containers: Reopen in Container」を選択し、起動

4. パッケージをインストール

   ```bash
   yarn
   ```

5. 開発サーバー起動

   ```bash
   yarn dev
   ```

ブラウザで <http://localhost:5173> を開き、表示確認

## 開発作業ガイド

- テストの実行

```bash
yarn test
```

- コードの静的解析と修正

```bash
yarn format
yarn lint
```
