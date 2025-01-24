'use client';
import { StyledTextBox as TextBox } from '@/components/StyledTextBox';

export default function StyledTextBox() {
  // value属性を使う場合、onChange関数の指定、もしくはreadOnly属性の設定が必要
  return <TextBox defaultValue='テキストボックス'></TextBox>;
}
