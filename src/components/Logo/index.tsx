import React from "react";
import Image from "next/image";
import lc from '../../assets/img/lc.jpg'
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__container">
        <div className="logo__container__company">boxmedia</div>
        <div className="logo__container__user">by</div>
        <div className="logo__container__cover">
          <Image src={lc} alt="frontend"/>
        </div>
        <div className="logo__container__user">leonardo costa</div>
      </div>
    </div>
  );
};

export default Logo;
