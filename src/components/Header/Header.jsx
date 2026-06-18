import { assets } from "../../assets/assets";
import "./Header.css";

const Header = () => {
  return (
    <div
      style={{ backgroundImage: `url(${assets.header_img})` }}
      className="bg-cover bg-center h-100 flex flex-col justify-end p-10 rounded-2xl text-white "
    >
      <div className="fade-in">
        <h2 className="text-4xl font-bold">Order your favourite food here</h2>
        <p className="max-w-150 mt-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          autem perspiciatis ut reiciendis voluptate ipsa consectetur earum, cum
          quis soluta aliquid nemo quo quisquam corporis nesciunt, officiis quos
          porro in.
        </p>
        <button className="border rounded-full bg-amber-700 px-3 mt-3">
          View Menuu
        </button>
      </div>
    </div>
  );
};

export default Header;
