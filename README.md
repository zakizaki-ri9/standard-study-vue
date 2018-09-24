
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
