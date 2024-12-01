// src/components/react/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-footer text-white">
      <div className="tpl-container">
        <ul className="footer-links flex justify-center gap-[12px]">
          <li className="text-[14px] font-bold"><a href="/privacy">Privacy Policy</a></li>
          <li className="text-[14px] font-bold"><a href="/terms">Terms of Use</a></li>
          <li className="text-[14px] font-bold"><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="h-[2px] bg-[#000] shadow-footer" />
      <p className='tpl-container text-center text-[#ACB0B7] text-[14px]'>© 2024 Caravans For Sale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;