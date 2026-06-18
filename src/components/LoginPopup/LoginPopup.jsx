import { useContext, useState } from "react";
import { assets } from "./../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"


const LoginPopup = ({ setShowLogin }) => {

  const {url, setToken} = useContext(StoreContext)

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data,[name]:value}))
  }

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login"
    }
    else {
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data)

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false)
    }
    else {
      alert(response.data.message)
    }
  }


  return (
    <div className="w-full h-full z-10 flex justify-center items-center absolute">
      <div className="flex max-w-1/4 bg-orange-500 text-white p-10 rounded-md justify-center">
        <form onSubmit={onLogin}>
          <div className="flex justify-between pb-3">
            <h2> {currState} </h2>
            <img
              className="w-4 h-4 cursor-pointer"
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>

          <div className="flex flex-col gap-5">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                className="outline-0 bg-orange-500 text-white border-white border rounded px-1"
                type="text"
                placeholder="Your name"
                required
              />
            )}
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              className="outline-0 bg-orange-500 text-white border border-white rounded px-1"
              type="email"
              placeholder="Your email"
              required
            />
            <input
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              className="outline-0 bg-orange-500 text-white border border-white rounded px-1"
              type="password"
              placeholder="Your password"
              required
            />
          </div>
          <button type="submit" className="border rounded px-1 my-2 cursor-pointer">
            
            {currState === `Sign up` ? "Create account" : "Login"}
          </button>
          <div>
            <input type="checkbox" className="cursor-pointer" required />
            <p>I agree to the terms of use & privacy policy.</p>
          </div>
          {currState === "Login" ? (
            <p className="underline cursor-pointer">
              Create a new account ?{" "}
              <span onClick={() => setCurrState("Sign up")}>
                Click here
              </span>{" "}
            </p>
          ) : (
            <p className="underline cursor-pointer">
              Already have an account ?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginPopup;
