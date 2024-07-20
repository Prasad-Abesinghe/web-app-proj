import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import { CartItemsListProvider } from "./context/CartContext";
import NavBar1 from "./components/NavBar1";

function App() {
  return (
    <>
      <CartItemsListProvider>
        <NavBar1 />
        <div className=" min-h-screen">
          <Outlet />
        </div>
        <MyFooter />
      </CartItemsListProvider>
    </>
  );
}

export default App;
