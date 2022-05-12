import './App.css';
import CategoriesList from './components/Categories/Categories';
import ProductList from './components/Products/Products'
import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  
  return (
    <div className="App">
    <Header  />
    <CategoriesList />
    <ProductList  />
    <Footer />
    </div>
  );
}

export default App;
