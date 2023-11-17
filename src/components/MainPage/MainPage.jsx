import { ProductFilter } from 'components/ProductFilter/ProductFilter';
import { ProductList } from 'components/ProductList/ProductList';
import "./MainPage.css";
import productsValue from '../../data/products.json';
export const MainPage = () => {
  return (
    <main>
      <div className="container">
        <ProductFilter />
        <ProductList products={productsValue} />
      </div>
    </main>
  );
};
