import React from "react";
import Logo from "../Logo";
import Link from "next/link";

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <div className="menu__container">
        <Link href='/'>
          <Logo />
        </Link>
        <div className="drag_container">
        <Link href='/about'><div className="nav">about</div></Link>
        <Link href='/cv'><div className="nav">cv</div></Link>
        <Link href='/blog'><div className="nav">blog</div></Link>
        <Link href='/contact'><div className="nav">contact</div></Link>
        <div className="slice"/>

        <div className="translate">
          EN
        </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
