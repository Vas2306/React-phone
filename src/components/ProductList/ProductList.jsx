import PropTypes from 'prop-types';
import { ProductListItem } from 'components/ProductListItem/ProductListItem';
import './ProductList.css';
export const ProductList = props => {
  const { products } = props;
  return (
    <ul className="products">
      {products.map(({ id, url, price, currency, model, type, sale }) => {
        return (
          <ProductListItem key={id}
            id={id}
            url={url}
            price={price}
            currency={currency}
            model={model}
            type={type}
            sale={sale}
          />
        );
      })}
    </ul>
  );
};
ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};
