import Cart from "components/Cart/Cart";
import { Header } from "components/Header/Header";
import { MainPage } from "components/MainPage/MainPage";
import "./App.css";
export const App = () => {
  return (
    <div>
      <Header />
      <MainPage />
     <Cart/>
    </div>
  );
};
