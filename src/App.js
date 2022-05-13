import './App.css';
import CategoriesList from './components/Categories/Categories';
import ProductList from './components/Products/Products'
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import CartList from './components/SimpleCart/SimpleCart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProductDetails from './components/Products/ProductDetails';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header  />
          <Routes>
            <Route path="/cart" element={<CartList />} />
            <Route path="/" element={[<CategoriesList />, <ProductList />]} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
