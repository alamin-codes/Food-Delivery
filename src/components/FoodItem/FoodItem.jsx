import { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {

  const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext);
  

  return (
    <div className="">
      <div className="relative w-70">
        <img className="rounded-t-2xl" src={url+"/images/"+image} alt="" />
        {
          !cartItems[id]
            ? <img className="absolute bottom-2 right-2 w-8 cursor-pointer" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="cursor-pointer absolute bottom-2 right-2 w-25 flex justify-center items-center bg-white p-1 rounded-full gap-2">
                <img className="w-8" onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p> {cartItems[id]} </p>
                <img className="w-8" onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
        }
      </div>
      <div>
        <div className="flex justify-between w-70 my-3">
          <h2 className="font-bold"> {name} </h2>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p> {description} </p>
        <p className="text-orange-500 font-bold"> {price} </p>
      </div>
    </div>
  );
};

export default FoodItem;
