import { assets } from "./../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-700 px-[5%] mt-15 pb-5 text-white" id="contact-us">
      <div className="pt-10 pb-10 flex justify-between flex-wrap">
        <div className="w-2/4">
          <img src={assets.logo} alt="" />
          <p className="max-w-full my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            similique, consequatur reiciendis vel nihil ducimus minus.
          </p>
          <div className="flex gap-5">
            <img className="w-8" src={assets.facebook_icon} alt="" />
            <img className="w-8" src={assets.twitter_icon} alt="" />
            <img className="w-8" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="w-50">
          <h2 className="text-md font-bold pb-3">COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="w-50">
          <h2 className="text-md font-bold pb-3">Get IN TOUCH</h2>
          <ul>
            <li>+1-212-434-43434</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="pt-3 text-center">Copyright 2025 @ Tomato.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
