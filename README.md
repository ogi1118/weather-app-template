# 天気予報アプリ

シンプルな天気予報を表示する React アプリケーションです。

## 機能

- 本日の天気（概況と気温）
- 本日の湿度
- 本日の風速
- 今後一週間の天気予報

## セットアップ手順

1. リポジトリをクローンまたはフォークします

```bash
git clone <リポジトリのURL>
cd weather-app-template
```

2. 必要なパッケージをインストールします

```bash
npm install
```

3. 環境変数を設定します

- `.env.sample`ファイルを`.env`にコピーします

```bash
cp .env.sample .env
```

- `.env`ファイルを開き、以下の値を設定します：
  - `VITE_WEATHER_API_KEY`: WeatherAPI.com で取得した API キー
  - `VITE_WEATHER_LOCATION`: 天気情報を取得したい地域名（例：Tokyo）

4. 開発サーバーを起動します

```bash
npm run dev
```

5. ブラウザで http://localhost:5173 を開きます

## 使用技術

- React
- Vite
- WeatherAPI.com

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
