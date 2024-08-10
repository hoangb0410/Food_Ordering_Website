/* eslint-disable react/jsx-key */
import RestaurantCard from '../restaurant/RestaurantCard'
import { useSelector } from 'react-redux'

const Favorite = () => {
  const {auth} = useSelector(store=>store)
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorites</h1>
      <div className='flex flex-wrap gap-3 justify-center'>
        {auth.favorites.map((item)=><RestaurantCard item={item}/>)}
      </div>
    </div>
  )
}

export default Favorite
