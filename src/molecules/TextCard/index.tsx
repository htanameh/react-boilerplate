import * as React from 'react';
import Heading1 from '../../atoms/Heading1/index';
import PrimaryButton from '../../atoms/PrimaryButton';

interface TextCardProps {
  text: string;
}

export default ({ text }: TextCardProps) => {
  return (
    <div>
      <Heading1 text={text} />
      <PrimaryButton text="Test" width="10px" />
    </div>
  );
};
