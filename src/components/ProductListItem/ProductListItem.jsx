import PropTypes from 'prop-types';
export const ProductListItem = ({
  id,
  url,
  price,
  currency,
  model,
  type,
  sale,
}) => {
  return (
    <li className="products__item">
      <div className="products__image-wrapper">
        <p className={`products__sale ${sale ? 'products__sale--active' : ''}`}>
          Акция
        </p>
        <img className="products__image" src={url} alt={model} />
      </div>
      <div className="products__descr">
        <h3 className="products__model">{model}</h3>
        <span className="products__price">
          {price ? price : 'Товар отсутствует'}
        </span>
        {price > 0 && <span className="products__currency">{currency}</span>}
      </div>
      <button className="products__btn-buy" type="button">
        Купить
      </button>
    </li>
  );
};
ProductListItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currency: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  sale: PropTypes.bool.isRequired,
};
