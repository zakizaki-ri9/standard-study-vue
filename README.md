
# 概要

[基礎から学ぶVue.js](https://www.amazon.co.jp/dp/B07D9BYHMZ/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)を元に主に学んだことを記載。

# メモ

## Vue.js概要

- リアクティブなデータ更新
    - データバインディング機構
        - Windows（特にXAML）開発を行なっていた人にも入門しやすそう
    - 

## `v-if`と`v-show`の使い分け

主に描画方法が異なる。

- `v-if`
    - DOMレベルで削除される
    - 複数要素をまとめて表示切替したい場合はこちら
        - `<template v-if="???"></template>`でくくる
- `v-show`
    - `display none;`で非表示となる
    - 表示切替頻度が高いならこちらのほうがパフォーマンス高い

# リストの要素更新について

`Vue.set` or `this.$set`を使用する。
イメージとしては以下。

```javascript
// this.$set(更新対象, index or key, 更新する値)
this.$set(this.list, 0, { id: 1, name: 'taro' })
```

# コンポーネント間の通信について

## propsの注意点

- 親コンポーネントのdata属性を利用したい場合は子の`props`に記述する
    - ただし、子コンポーネント側で属性の値書き換えは不可
    - 値を変更したい場合は、算出プロパティを使って新しいデータを生成するような方法をとると良い

# Vue CLI

- Vue.jsによる開発を支援するためのコマンドラインツール
- Babelをデフォルトインストールしているため、ES2015での記述が可能
