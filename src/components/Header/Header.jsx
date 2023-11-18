import { FaCartShopping } from "react-icons/fa6";
import './Header.css';
import logoImg from "../../assets/img/logo.png";
export const Header = () => {
  return (
     <header className="header">
      <a href="/" className="header__logo">
        <img className='header__logo--img' src={logoImg} alt="" />
      
      </a>
      <div className="header__user-info">
        <span className="header__user-name">B</span>
        <span className="header__user-email">user@mail.com</span>
      </div>
      <div className="header__cart-info">
        <button type="button" className="header__btn-cart">
          <FaCartShopping size={ 30} />
        </button>
      </div>
    </header>
  );
};
