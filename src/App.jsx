import { Route, Routes } from "react-router";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import ErrorPage from "./pages/404";
import About from "./pages/about";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Home from "./pages/home";
import Login from "./pages/login";
import ProductDetails from "./pages/productDetails";
import Products from "./pages/products";
import "./styles/global.css";
import "./styles/helper.css";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products/:tab" element={<Products />} />
      <Route path="/product/:productDetail" element={<ProductDetails />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
