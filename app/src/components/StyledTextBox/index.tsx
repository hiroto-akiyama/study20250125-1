'use client';
import React from 'react';
import styled from 'styled-components';

// 既存のinputタグのプロパティを継承
interface Props extends React.ComponentProps<'input'> {
  // 追加で定義したいプロパティがあればここに書く
}

export const StyledTextBox: React.FC<Props> = ({ ...props }) => {
  const TextBox = styled.input`
    width: 320px;
    font-size: 1.5em;
  `;

  return <TextBox {...props}></TextBox>;
};
