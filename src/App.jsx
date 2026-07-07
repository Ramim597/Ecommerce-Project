import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { Order } from "./Pages/Order";
import Tracking from "./Pages/Tracking";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order" element={<Order />} />
        <Route path="tracking" element={<Tracking />} />
      </Routes>
    </>
  );
}

export default App;
