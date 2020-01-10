import React from 'react';

interface ButtonProps {
  text: string;
  width: string;
}

export default ({ text, width }: ButtonProps) => {
  return (
    <button type="button" style={{ width }}>
      {text}
    </button>
  );
};
