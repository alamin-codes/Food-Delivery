import { menu_list } from "../../assets/assets"

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div id="menu">
        <h1 className="text-3xl font-bold">Explore our menu</h1>
        <p className="mt-3 max-w-250">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, tenetur! Atque, illum maxime dolorem, sapiente magni saepe amet labore eius eos soluta laudantium vero voluptatum officiis placeat excepturi nulla aliquam.</p>
        <div className="flex gap-6 md:justify-between flex-wrap mt-7">
            { menu_list.map((menu, index) => {
                return  (
                    <div onClick={() => setCategory(prev => prev === menu.menu_name?"All":menu.menu_name)}  key={index} className="flex items-center flex-col cursor-pointer">
                        <img src={menu.menu_image} alt="" className={`${category===menu.menu_name? "border-4 border-orange-500 p-1 rounded-full ":""} w-20 `} />
                        <p className="mt-3"> {menu.menu_name} </p>
                    </div>
                )
            }) }
        </div>
        <hr className="my-3 h-0.5 bg-[#bebebe] border-none" />
    </div>
  )
}

export default ExploreMenu