import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Product from './component/Product';
import Products from './pages/Products';
import Cart from "./component/Cart"
import Contact from './pages/Contact';
import Checkout from './component/Checkout';
import { Footer } from './component/Footer';
import Page404 from './pages/Page404';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <PayPalScriptProvider options={{
        "client-id": "AUyi5UPKffc_tCob-9CABkSr8Iik4hPt14G8piUtpp3WJ2yDAEAxC6w7ERQRhK5ohuSAsJOY6h3i5Q1K"
      }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/:id" element={<Product />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Page404 />} />
        </Routes>

      </PayPalScriptProvider>
      <Footer />
    </>
  );
}

export default App;
