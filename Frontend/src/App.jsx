import "./App.css";
import { Outlet } from "react-router-dom";
import MyFooter from "./components/MyFooter";
import { CartItemsListProvider } from "./context/CartContext";
import NavBar1 from "./components/NavBar1";
import MobileBrands from "./components/MobileBrands";

function App() {
  return (
    <>
      <CartItemsListProvider>
        <NavBar1 />
        <div className=" min-h-screen">
          <Outlet />
        </div>
        <MobileBrands/>
        <MyFooter />
      </CartItemsListProvider>
    </>
  );
}

export default App;
