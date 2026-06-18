
import { useContext, useState } from 'react';
import { assets } from './../../assets/assets';
import { Link, useNavigate } from 'react-router';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("");
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }


  return (
    <div className='flex justify-between items-center py-3'>
        <Link to="/"><img src={assets.logo} alt="" /> </Link>
        <ul className='md:flex gap-5 hidden'>
            <Link to="/" onClick={() => setMenu("home")} className={`cursor-pointer ${menu === "home"? "border-b-2" : "" }`}>Home</Link>
            <a href='#menu' onClick={() => setMenu("menu")} className={`cursor-pointer ${menu === "menu"? "border-b-2" : "" }`}>menu</a>
            <a href='#mobile-app' onClick={() => setMenu("mobile-app")} className={`cursor-pointer ${menu === "mobile-app"? "border-b-2" : "" }`}>mobile-app</a>
            <a href='#contact-us' onClick={() => setMenu("contact us")} className={`cursor-pointer ${menu === "contact us"? "border-b-2" : "" }`}>contact us</a>
        </ul>
        <div className='flex gap-8'>
            <img src={assets.search_icon} alt="" />
            <div className='relative'>
                <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
                <div className={getTotalCartAmount() === 0 ? "" : "w-3 h-3 bg-orange-500 absolute -top-2 -right-2 rounded-full"}></div>
            </div>
            {
                !token? <button onClick={() => setShowLogin(true)} className='border rounded px-2 hover:bg-gray-200 cursor-pointer transition'>sign in</button>
                : 
                <div className='relative group'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className='absolute right-0 top-8 border p-2 w-25 bg-white border-orange-400 rounded hidden group-hover:flex flex-col'>
                        <li className='flex gap-2 cursor-pointer'>
                            <img className='w-10' src={assets.bag_icon} alt="" />
                            <p onClick={() => navigate("/myorders")} className='hover:text-orange-400'>Orders</p>
                        </li>
                        <hr className='my-1 text-orange-400'></hr>
                        <li className='flex gap-2 cursor-pointer'>
                            <img className='w-5' src={assets.logout_icon} alt="" />
                            <p onClick={logout} className='hover:text-orange-400'>Logout</p>
                        </li>
                    </ul>
                </div> 
            }
            
        </div>
    </div>
  )
}

export default Navbar