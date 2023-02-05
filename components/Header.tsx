import React, { FC, ReactNode } from 'react';
import Image from 'next/image';


const Header: FC = () => {

  return (
    <div className="relative h-72 w-full border-2 border-red-500">
      <Image src="/hero-image.png" alt="formula 1" fill style={{objectFit: 'cover', objectPosition: 'left'}}/>
    </div>
  );
};

export default Header;