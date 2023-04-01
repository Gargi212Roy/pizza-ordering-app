import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Cart from "./pages/Cart";
import "./App.css";

const App = () => {
  return (
    <div className="bg-color">
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
