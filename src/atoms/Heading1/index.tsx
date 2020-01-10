import React from 'react';

interface Heading1Props {
  text: string;
}

export default ({ text }: Heading1Props) => {
  return <h1>{text}</h1>;
};
