import { useContext, useEffect, useState } from "react"
import { StoreContext } from "../../context/StoreContext"
import axios from "axios"
import { assets } from "../../assets/assets"

// MyOrder.jsx
const MyOrders = () => {

  const {url, token} = useContext(StoreContext)
  const [data, setData] = useState([])

  const fetchOrder = async () => {
    const response = await axios.post(url+"/api/order/userorders",{},{headers:{token}});
    console.log("ORDER RESPONSE:", response.data);
    setData(response.data.data);
  }

  useEffect(() => {
    if (token) {
      fetchOrder();
    }
  }, [token])

  return (
    <div>
      <h2>My Orders</h2>
      <div>
        {
          data.map((order, index) => {
            return (
              <div key={index} className="grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr] gap-2 border mb-3 px-2 items-center">
                <img src={assets.parcel_icon} alt="" />
                <p>{order.items.map((item, index) => {
                  if (index === order.items.length-1) {
                    return item.name + " x " +item.quantity
                  }
                  else {
                    return item.name + " x " +item.quantity + ", "
                  }
                })}</p>
                <p>${order.amount}.00</p>
                <p>Items: {order.items.length}</p>
                <p><span>&#x25cf;</span><b>{order.status}</b></p>
                <button className="border rounded px-1">Track Order</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MyOrders