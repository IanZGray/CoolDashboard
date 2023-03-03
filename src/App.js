import React, { useEffect }  from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings, UserProfile } from './components'
import { Adventuring, Character, Items, Calendar, Friends, Stacked, Pyramid, NPCShops, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'
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
              <Route path="https://main--glowing-yeot-30560d.netlify.app/" element={<Adventuring />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/adventuring" element={<Adventuring />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/character" element={<Character />} />
              {/* pages */}
              <Route path="https://main--glowing-yeot-30560d.netlify.app/items" element={<Items />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/friends" element={<Friends />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/Shops" element={<NPCShops />} />
              {/* apps */}
              <Route path="https://main--glowing-yeot-30560d.netlify.app/calendar" element={<Calendar />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/kanban" element={<Kanban />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/editor" element={<Editor />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/color-picker" element={<ColorPicker />} />
              {/* charts */}
              <Route path="https://main--glowing-yeot-30560d.netlify.app/line" element={<Line />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/area" element={<Area />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/bar" element={<Bar />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/pie" element={<Pie />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/financial" element={<Financial />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/color-mapping" element={<ColorMapping />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/pyramid" element={<Pyramid />} />
              <Route path="https://main--glowing-yeot-30560d.netlify.app/stacked" element={<Stacked />} />
            </Routes>
          </div>

        </div>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App