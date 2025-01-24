import React from 'react';

// 既存のinputタグのプロパティを継承
interface Props extends React.ComponentProps<'input'> {
  // 追加で定義したいプロパティがあればここに書く
}

// ...（スプレット演算子）を使う事でまとめて設定できる
// 変数を個別に定義すれば分けて使う事も可能({ value, ...props})とか
export const TextBox: React.FC<Props> = ({ ...props }) => {
  return <input {...props}></input>;
};
