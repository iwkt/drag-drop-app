VS Code で create-react-app を使用して eslint、prettier の設定をしたプロジェクト。VS Code と連携することでターミナルからコマンド入力をすることなしに eslint と prettier はの機能を使うことができる。

# プロジェクト作成とパッケージの追加について

create-react-app を使用してプロジェクト作成。この時点で eslint はインストールされているので
下記パッケージをインストールした。
prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react

## Error: "prettier/react" has been merged into "prettier" in eslint-config-prettier 8.0.0 　の回避

このままだとエラーが発生するので
~~extends に”plugin:pretteir/recommended”を追加した。~~
~~参照元：https://dackdive.hateblo.jp/entry/2019/03/15/100000 ~~

extends の”plugin:pretteir/recommended”を削除して、prettier とした。

```
 {
   "extends": [
   "eslint:recommended",
   "plugin:react/recommended",
   // "prettier/react",
   "prettier"
   ],
 }
```

## 整形されるファイル

App.jsx などのコンポーネントの拡張子は js から jsx にすることで保存時に整形される。

## 回避できないエラー

ERROR in Failed to load parser 'babel-eslint' declared in 'src/.eslintrc.js': Cannot find module 'babel-eslint'

これを回避しようと babel-eslint を下記コマンドでインストールすると

```
npm install eslint babel-eslint --save-dev
```

逆にさらなるエラーが発生する。現状では修正法がわからない！！

# 使用方法

## プロジェクトをクローン

```
git clone https://github.com/iwkt/react-test.git

cd react-test

npm install

```

## VS Code に ESLint の拡張機能の追加

Vscode で Eslint を使えるように拡張機能をインストールする。 ググったらすぐにでます。

## Vscode の設定を変更

ディレクトリ.VSCODE にある settins.json を エディター VS CODE の settins.json にコピペする。
VS CODE の settins.json 設定へは CODE > 基本設定 > 設定とたどる。

```
#settings.json
{
  "javascript.format.enable": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

#　ローカルサーバー起動

```
npm start
```
