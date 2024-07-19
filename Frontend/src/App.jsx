import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyFooter from "./components/MyFooter";
import { CartItemsListProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartItemsListProvider>
        <NavBar />
        <div className=" min-h-screen">
          <Outlet />
        </div>
        <MyFooter />
      </CartItemsListProvider>
    </>
  );
}

export default App;
