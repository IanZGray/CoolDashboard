import React, { useEffect }  from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings, UserProfile } from './components'
import { Adventuring, Character, Ready, Items, Calendar, Friends, Stacked, Pyramid, NPCShops, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'
import './App.css'

import { useStateContext } from './contexts/ContextProvider'

const App = () => {

  const { activeMenu, setActiveMenu, avatarActive, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  return (
    <div className={currentMode === 'Dark'? 'dark' : ''}>
      <BrowserRouter>
      <div className='flex relative dark:bg-main-dark-bg' >
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}} >
          <TooltipComponent content='Settings' position='top' >
            <button 
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' 
              style={{background: currentColor, borderRadius: '50%'}}
              onClick={() => {
                setActiveMenu(false)
                setThemeSettings(true)
              }}
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {/* sidebar */}
        {activeMenu ? (
          <div className='w-72 fixed sidebar 
          dark:bg-secondary-dark-bg 
          bg-white' >
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 
          dark:bg-secondary-dark-bg' >
            <Sidebar />
          </div>
        )}
        
        {/* <div className={ `dark:bg-main-dark-bg  bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}` } > */}
        <div className={ `bg-[url("https://getwallpapers.com/wallpaper/full/4/4/0/1383918-cool-space-backgrounds-2880x1800-download.jpg")] min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}` } >
            
          <nav className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </nav>

          {/* profile */}
          {avatarActive ? (
            <div style={{zIndex:'100', position: 'relative'}}>
              <div className='fixed' style={{width: '100%'}}>
                <div className='bg-white/0' style={{marginLeft: '52%', maxWidth: '45%'}}>
                  <UserProfile />
                </div>
              </div>
            </div>
          ) : (
            <div className='w-0'>
            </div>
          )}

          <div className='mt-20 md:mt-0'>

            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* dashboard */}
              <Route path="/" element={<Adventuring />} />
              <Route path="/adventuring" element={<Adventuring />} />
              <Route path="/character2d" element={<Character />} />
              <Route path="/character3d" element={<Ready />} />
              {/* pages */}
              <Route path="/items" element={<Items />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/Shops" element={<NPCShops />} />
              {/* apps */}
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              {/* charts */}
              <Route path="/line" element={<Line />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/color-mapping" element={<ColorMapping />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>

        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App