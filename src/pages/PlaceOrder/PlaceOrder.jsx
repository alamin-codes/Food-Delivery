import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router";


const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
  useContext(StoreContext);
  
  const navigate = useNavigate();
  
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      alert("Error");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/cart")
    }
    else if (getTotalCartAmount() === 0) {
      navigate("/cart")
    }
  }, [token])

  return (
    <div className="flex mt-20 justify-between items-end">
      <form
        onSubmit={placeOrder}
        className="flex justify-between w-full gap-20"
      >
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-5">Delivery Information</h2>
          <div className="flex justify-between w-full gap-3">
            <input
              className="border rounded px-2 outline-0"
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
              type="text"
              placeholder="First name"
              required
            />
            <input
              className="border rounded px-2 outline-0"
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <input
            className="border rounded my-3 px-2 outline-0 w-full"
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Email address"
            required
          />
          <input
            className="border rounded px-2 outline-0 w-full"
            type="text"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
            placeholder="Street"
            required
          />
          <div className="flex justify-between w-full">
            <input
              className="my-3 border rounded px-2 outline-0"
              type="text"
              name="city"
              onChange={onChangeHandler}
              value={data.city}
              placeholder="City"
              required
            />
            <input
              className="my-3 border rounded px-2 outline-0"
              type="text"
              name="state"
              onChange={onChangeHandler}
              value={data.state}
              placeholder="State"
              required
            />
          </div>
          <div className="flex justify-between w-full">
            <input
              className="border rounded px-2 outline-0"
              type="text"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
              placeholder="Zipcode"
              required
            />
            <input
              className="border rounded px-2 outline-0"
              type="text"
              name="country"
              onChange={onChangeHandler}
              value={data.country}
              placeholder="Country"
              required
            />
          </div>
          <input
            className="border mt-3 rounded px-2 outline-0 w-full"
            type="phone"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            placeholder="Phone"
            required
          />
        </div>

        <div className="w-full">
          <div className=" flex flex-col gap-3">
            <h2 className="text-2xl font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} </p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2} </p>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}{" "}
              </b>
            </div>
            <button
              type="submit"
              className="border-b py-1 bg-orange-500 text-white px-1 cursor-pointer w-full"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
