import { Route, Routes } from "react-router"
import Home from "../pages/Home/Home"
import Cart from "../pages/Cart/Cart"
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder"
import MyOrder from "../pages/MyOrders/MyOrders"

const AppRoutes = () => {
  return (
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrder />} />
    </Routes>
  )
}

export default AppRoutes