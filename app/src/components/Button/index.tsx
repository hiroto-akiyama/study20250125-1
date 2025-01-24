import React from 'react';

interface Props {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
