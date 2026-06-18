
import { assets } from './../../assets/assets';
const AppDownload = () => {
  return (
    <div className='pt-20 pb-5 flex justify-center flex-col items-center' id='mobile-app'>
        <p className='text-center text-2xl pb-3 font-medium'>For Better Experience Download <br />Tomato App</p>
        <div className='flex gap-5'>
            <img className='transition cursor-pointer hover:scale-[1.05]' src={assets.play_store} alt="" />
            <img className='transition cursor-pointer hover:scale-[1.05]' src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload