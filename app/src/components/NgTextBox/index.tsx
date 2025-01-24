import React from 'react';

// valueとonChangeプロパティしか指定できない
interface Props {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// プロパティが変更になると利用しているpage全てに影響が出る
export const NgTextBox: React.FC<Props> = ({ value, onChange }) => {
  return <input value={value} onChange={onChange}></input>;
};
