import './App.css';
import CategoriesList from './component/Categories/Categories';
import ProductList from './component/Products/Products'
import Header from './component/Header.js';
import Footer from './component/Footer.js';
// import CartList from './component/SimpleCart/SimpleCart'


function App() {
  return (
    <div className="App">
    <Header />
    {/* <CartList /> */}

    <CategoriesList />
    <ProductList />
    <Footer />
    </div>

  );
}

export default App;
