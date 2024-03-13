import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="container">
      <div className="container__logo">
        <Image src={Logo} alt="Logo" />
      </div>
      <div className="container__menu">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>O que fazemos</Link>
        <Link href={"/"}>Cases</Link>
      </div>
      <div className="container__action">
        <button className="container__action__button">Fale Conosco</button>
      </div>
    </div>
  );
};

export default Header;
