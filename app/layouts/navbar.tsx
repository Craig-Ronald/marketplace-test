import React from 'react';
import Assistant from '../svgs/assistant-icon';

const Navbar: React.FC = () => {
  return (
    <nav id="navbar" className="tpl-container flex justify-between items-center">
      <div className="font-bold">
        <ul className="nav-links flex gap-[32px]">
          <li><a href="/buy">Buy</a></li>
          <li><a href="/sell">Sell</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>
      <div className="flex items-center text-[14px] gap-[8px]">
        <p className='cursor-pointer'>Sign in</p>
        <div className="w-[1px] h-[24px] bg-[#72767D]"></div>
        <Assistant height="32" width="32" />
      </div>
    </nav>
  );
};

export default Navbar;