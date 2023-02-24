import React from 'react';

type TProps = {
  heading: string;
  text?: string;
};

const HeroSection = ({ heading, text }: TProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl py-4 border-b-4">{heading}</h1>
      {text && <p>{text}</p>}
    </div>
  );
};

export default HeroSection;
