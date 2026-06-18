import { useContext } from "react";
import { StoreContext } from "./../../context/StoreContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
  const navigate = useNavigate();

  
  return (
    <div>
      <div className="flex justify-between">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {food_list.map((item, index) => {
        if (cartItems[item._id]>0) {
            return (
              <div key={index} className="flex justify-between items-center py-3 border-b">
                <img className="w-30 h-30 rounded-xl" src={url+"/images/"+item.image} alt="" />
                <p>{item.name} </p>
                <p>$ {item.price} </p>
                <p>{cartItems[item._id]} </p>
                <p>{item.price*cartItems[item._id]} </p>
                <p onClick={() => removeFromCart(item._id)} className="cursor-pointer">x </p>
              </div>
            )
          
        }
      })}
      <div className="flex justify-between mt-20">
        <div className="w-1/4 flex flex-col gap-3">
          <h2 className="text-2xl font-bold">Cart Totals</h2>
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>{getTotalCartAmount()} </p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>{getTotalCartAmount() === 0? 0 : 2} </p>
          </div>
          <div className="flex justify-between">
            <b>Total</b>
            <b>{getTotalCartAmount() === 0? 0 : getTotalCartAmount()+2} </b>
          </div>
          <button onClick={()=> navigate("/order")} className="border-b py-1 bg-orange-500 text-white px-1 cursor-pointer w-full">PROCEED TO CHECKOUT</button>
        </div>
        <div className=" w-2/5">
          <p>If you have a promocode, Enter it here</p>
          <div className="flex w-full mt-3">
            <input className="bg-gray-300 w-3/4 outline-0 px-3 py-1.5  cursor-pointer" type="text" placeholder="Promo code" />
            <button className="bg-black w-1/4 text-white px-3 py-1.5 outline-0  cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
