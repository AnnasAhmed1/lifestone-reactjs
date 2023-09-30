import logo from "./logo.svg";
import "./App.css";
import "./styles/global.css";
import "./styles/helper.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Faq from "./pages/faq";
import Products from "./pages/products";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Test from "./pages/text";
import ProductDetails from "./pages/productDetails";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="portfolio" element={<Portfolio />} /> */}
      {/* <Route path="/products:tab" element={<Products />} /> */}
      <Route path="/products/:tab" element={<Products />} />
      <Route path="/product/:productDetail" element={<ProductDetails />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/test" element={<Test />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
