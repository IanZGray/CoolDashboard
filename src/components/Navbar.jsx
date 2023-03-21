import React, { useEffect } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { HiUserCircle } from 'react-icons/hi';

// import avatar from '../data/avatar.jpg'

import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'


const NavButton = ({ title, customFunc, icon, color, dotColor, text }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button 
      type='button' 
      onClick={customFunc} 
      style={{ color }} 
      className='relative text-xl rounded-full p-3 hover:bg-light-gray' 
    >   
    <span 
      style={{background: dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' 
    />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {

  const { 
    activeMenu, 
    setActiveMenu, 
    isClicked, 
    setIsClicked, 
    handleClick, 
    screenSize, 
    setScreenSize,
    currentColor, 
    name, 
    setAvatarActive
  } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false)
    } else {
      // change to true after working on it
      setActiveMenu(true)
    }
  }, [screenSize])
  

  return (
    <div className='flex justify-between p-1 md:mx-6 relative'>
      <NavButton 
      title='Menu' 
      customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
      color={currentColor} 
      icon={<AiOutlineMenu />}
      />
      <nav className='flex'
      >
        <NavButton 
          title='Cart' 
          // customFunc={() => handleClick('cart')} 
          color={currentColor} 
          icon={<FiShoppingCart />}
        />
        <NavButton 
          title='Chat' 
          dotColor='#03c9d7' 
          // customFunc={() => handleClick('chat')} 
          color={currentColor} 
          icon={<BsChatLeft />}
        />
        <NavButton 
          title='Notifications' 
          dotColor='#03c9d7' 
          // customFunc={() => handleClick('notification')} 
          color={currentColor} 
          icon={<RiNotification3Line />}
        />
        <div 
          className='flex items-start'
        >
          <NavButton 
            icon={<HiUserCircle />}
            color={currentColor}
            // className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            customFunc={() => setAvatarActive((prevAvatarActive) => !prevAvatarActive)}
            // text={name}
            title='Profile'
          /> 
          <p className='relative text-xl p-3 -ml-2 -mt-2'>
            <span 
              className='text-gray-400 text-14'
            >
              Hi,
            </span> 
            <span 
              className='text-gray-400 font-bold ml-1 text-14'
            >
              {name}
            </span>
          </p>
          {/* <MdKeyboardArrowDown className='text-gray-400 text-14 h-4 w-4 relative top-5 -ml-2' /> */}
        </div>
        
        {/* <TooltipComponent 
          content='Profile' 
          position='BottomCenter'
        >
        </TooltipComponent> */}
        {/* {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />} */}
      </nav>
    </div>
  )
}

export default Navbar