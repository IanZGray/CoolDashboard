import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [avatarActive, setAvatarActive] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState(localStorage.getItem('themeMode') || 'Dark')
    const [themeSettings, setThemeSettings] = useState(false)

    const [name, setName] = useState(localStorage.getItem('name') || 'Player')

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false)
    };

    const setColor = (color) => {
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true})
    }

    return (
        <StateContext.Provider 
            value={{ 
                activeMenu, 
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentColor,
                setCurrentColor,
                currentMode,
                setCurrentMode,
                setMode, 
                setColor, 
                themeSettings,
                setThemeSettings,
                name,
                setName,
                avatarActive, setAvatarActive
                // Face,
                // eye, setEye, eyeColor, setEyeColor,
                // glove, setGlove, gloveColor, setGloveColor,
                // pad, setPad, padColor, setPadColor,
                // skin, setSkin, skinColor, setSkinColor,
                // hair, setHair, hairColor, setHairColor, hairType, setHairType,
                // body, setBody, bodyColor, setBodyColor, bodyType, setBodyType
            }} 
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);