import React from 'react';
import Divider from '../ui/Divider';

type TProps = {
  heading: string;
  text?: string;
};

const HeroSection = ({ heading, text }: TProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[500px]">
      <h1 className="text-4xl">{heading}</h1>
      <Divider />
      {text && <p>{text}</p>}
    </div>
  );
};

export default HeroSection;
