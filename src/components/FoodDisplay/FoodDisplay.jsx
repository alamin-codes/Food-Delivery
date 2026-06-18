
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div>
        <h2 className='text-3xl font-bold'>Top dishes near you</h2>
        <div className='grid justify-center grid-cols xl:grid-cols-4 gap-10 md:grid-cols-3 sm:grid-cols-2'>
            {food_list.map((item, index) => {
                if (category === "All" || category ===item.category) {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay