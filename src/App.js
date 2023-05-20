import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductList from "./components/ProuductList";
import CheckoutAd from "./components/CheckoutAd";
import ShoppingBasket from "./components/ShoppingBasket";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
       <CheckoutAd/>
      <ShoppingBasket/> 
      <ProductList/>
    </div>
  );
}

export default App;
