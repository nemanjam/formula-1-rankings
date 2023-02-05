import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  title: string;
};

const Section: FC<Props> = ({ children, title }) => {

  return (
    <div className="w-full min-h-32 p-4 flex flex-col gap-4 border-2 border-blue-500">
      <h2 className="text-2xl font-bold" >{title}</h2>
      { children }
    </div>
  );
};

export default Section;