import { FaBasketShopping } from 'react-icons/fa6';
import { VscChromeClose } from 'react-icons/vsc';
import './Cart.css';
const Cart = () => {
  return (
    <div className="cart">
      <button className="cart-btn-close" type="button">
        <VscChromeClose size={25} />
      </button>
      <ul className="cart-products">
        <li className="cart-product">
          <img
            className="cart-image"
            src="https://content1.rozetka.com.ua/goods/images/big/238782224.jpg"
            alt=""
          />
          <div className="cart-descr">
            <h3 className="cart-model">ZTE RedMagic</h3>
            <span className="cart-price">11999</span>
            <span className="cart-currency">UAH</span>
          </div>
          <button className="cart-btn-remove" type="button">
            <FaBasketShopping className='cart-btn-remove-icon' size={20} />
            Remove
          </button>
        </li>
      </ul>
      <button className="cart-btn-order" type="button">
        Submit
      </button>
    </div>
  );
};

export default Cart;
