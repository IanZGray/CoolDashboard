import React, { useState } from 'react'

import { Header } from '../components'
import { useStateContext } from '../contexts/ContextProvider'
import Face from '../images/mouth.png'

// body
// built
import BodyBuiltBlack from '../images/body/built/black.png'
import BodyBuiltBlue from '../images/body/built/blue.png'
import BodyBuiltGreen from '../images/body/built/green.png'
import BodyBuiltOrange from '../images/body/built/orange.png'
import BodyBuiltPurple from '../images/body/built/purple.png'
import BodyBuiltWhite from '../images/body/built/white.png'
import BodyBuiltYellow from '../images/body/built/yellow.png'
// fem
import BodyFemBlack from '../images/body/fem/black.png'
import BodyFemBlue from '../images/body/fem/blue.png'
import BodyFemPink from '../images/body/fem/pink.png'
import BodyFemPurple from '../images/body/fem/purple.png'
import BodyFemTeal from '../images/body/fem/teal.png'
import BodyFemWhite from '../images/body/fem/white.png'
// thick
import BodyThickBlack from '../images/body/thick/black.png'
import BodyThickOrange from '../images/body/thick/orange.png'
import BodyThickPink from '../images/body/thick/pink.png'
import BodyThickRed from '../images/body/thick/red.png'
import BodyThickTeal from '../images/body/thick/teal.png'
import BodyThickWhite from '../images/body/thick/white.png'
// thin
import BodyThinBlack from '../images/body/thin/black.png'
import BodyThinGreen from '../images/body/thin/green.png'
import BodyThinPink from '../images/body/thin/pink.png'
import BodyThinRed from '../images/body/thin/red.png'
import BodyThinWhite from '../images/body/thin/white.png'
import BodyThinYellow from '../images/body/thin/yellow.png'

// eyes
import EyesBlack from '../images/eyes/black.png'
import EyesBlue from '../images/eyes/blue.png'
import EyesBrown from '../images/eyes/brown.png'
import EyesGreen from '../images/eyes/green.png'
import EyesLight from '../images/eyes/light.png'
import EyesPurple from '../images/eyes/purple.png'
import EyesRed from '../images/eyes/red.png'
import EyesYellow from '../images/eyes/yellow.png'

// face
import FaceDark from '../images/face/dark.png'
import FaceFreckles from '../images/face/freckles.png'
import FaceGreen from '../images/face/green.png'
import FacePale from '../images/face/pale.png'
import FacePink from '../images/face/pink.png'
import FaceRed from '../images/face/red.png'
import FaceTan from '../images/face/tan.png'
import FaceTeal from '../images/face/teal.png'
import FaceVitrialgo from '../images/face/vitrialgo.png'

// gloves
import GlovesBlack from '../images/gloves/black.png'
import GlovesBlue from '../images/gloves/blue.png'
import GlovesOrange from '../images/gloves/orange.png'
import GlovesRed from '../images/gloves/red.png'
import GlovesWhite from '../images/gloves/white.png'
import GlovesYellow from '../images/gloves/yellow.png'

// hair
// bowl
import HairBowlBlack from '../images/hair/bowl/black.png'
import HairBowlOrange from '../images/hair/bowl/orange.png'
import HairBowlWhite from '../images/hair/bowl/white.png'
import HairBowlYellow from '../images/hair/bowl/yellow.png'
// buz
import HairBuzBlack from '../images/hair/buz/black.png'
import HairBuzOrange from '../images/hair/buz/orange.png'
import HairBuzWhite from '../images/hair/buz/white.png'
import HairBuzYellow from '../images/hair/buz/yellow.png'
// curls
import HairCurlsBlack from '../images/hair/curls/black.png'
import HairCurlsOrange from '../images/hair/curls/orange.png'
import HairCurlsWhite from '../images/hair/curls/white.png'
import HairCurlsYellow from '../images/hair/curls/yellow.png'
// hawk
import HairHawkBlack from '../images/hair/hawk/black.png'
import HairHawkOrange from '../images/hair/hawk/orange.png'
import HairHawkWhite from '../images/hair/hawk/white.png'
import HairHawkYellow from '../images/hair/hawk/yellow.png'
// pony
import HairPonyBlack from '../images/hair/pony/black.png'
import HairPonyOrange from '../images/hair/pony/orange.png'
import HairPonyWhite from '../images/hair/pony/white.png'
import HairPonyYellow from '../images/hair/pony/yellow.png'
// rows
import HairRowsBlack from '../images/hair/rows/black.png'
import HairRowsOrange from '../images/hair/rows/orange.png'
import HairRowsWhite from '../images/hair/rows/white.png'
import HairRowsYellow from '../images/hair/rows/yellow.png'
// spikes
import HairSpikesBlack from '../images/hair/spikes/black.png'
import HairSpikesOrange from '../images/hair/spikes/orange.png'
import HairSpikesWhite from '../images/hair/spikes/white.png'
import HairSpikesYellow from '../images/hair/spikes/yellow.png'

// pads
import PadsBlack from '../images/pads/black.png'
import PadsBlue from '../images/pads/blue.png'
import PadsGreen from '../images/pads/green.png'
import PadsPurple from '../images/pads/purple.png'
import PadsRed from '../images/pads/red.png'
import PadsWhite from '../images/pads/white.png'
import PadsYellow from '../images/pads/yellow.png'

const Character = () => {

  const { currentColor, name, setName, 
    // Face, eye, setEye, eyeColor, setEyeColor,
    // glove, setGlove, gloveColor, setGloveColor,
    // pad, setPad, padColor, setPadColor,
    // skin, setSkin, skinColor, setSkinColor,
    // hair, setHair, hairColor, setHairColor, hairType, setHairType,
    // body, setBody, bodyColor, setBodyColor, bodyType, setBodyType 
  } = useStateContext()
  const buttonClasses = `px-1 md:px-2 mx-2 text-xs md:text-base cursor-pointer z-40 rounded-sm md:font-semibold`

  const eyes = [EyesBlack, EyesBlue, EyesBrown, EyesGreen, EyesYellow, EyesPurple, EyesRed, EyesLight]
  const pads = [PadsYellow, PadsBlue, PadsGreen, PadsPurple, PadsRed, PadsBlack, PadsWhite]
  const gloves = [GlovesYellow, GlovesBlue, GlovesOrange, GlovesRed, GlovesBlack, GlovesWhite]
  const faces = [FaceTan, FacePale, FacePink, FaceDark, FaceFreckles, FaceVitrialgo, FaceGreen, FaceRed, FaceTeal]

  const bodyArray = [
    [BodyBuiltBlack, BodyBuiltBlue, BodyBuiltGreen, BodyBuiltOrange, BodyBuiltPurple, BodyBuiltYellow, BodyBuiltWhite],
    [BodyFemBlack, BodyFemBlue, BodyFemPink, BodyFemPurple, BodyFemTeal, BodyFemWhite],
    [BodyThickBlack, BodyThickOrange, BodyThickPink, BodyThickRed, BodyThickTeal, BodyThickWhite],
    [BodyThinBlack, BodyThinGreen, BodyThinPink, BodyThinRed, BodyThinWhite, BodyThinYellow]
  ]

  const hairArray = [
    [HairBowlBlack, HairBowlOrange, HairBowlWhite, HairBowlYellow],
    [HairBuzBlack, HairBuzOrange, HairBuzWhite, HairBuzYellow],
    [HairCurlsBlack, HairCurlsOrange, HairCurlsWhite, HairCurlsYellow],
    [HairHawkBlack, HairHawkOrange, HairHawkWhite, HairHawkYellow],
    [HairPonyBlack, HairPonyOrange, HairPonyWhite, HairPonyYellow],
    [HairRowsBlack, HairRowsOrange, HairRowsWhite, HairRowsYellow],
    [HairSpikesBlack, HairSpikesOrange, HairSpikesWhite, HairSpikesYellow]
  ]

// variables
  let [eye, setEye] = useState(3)
  let [glove, setGlove] = useState(2)
  let [pad, setPad] = useState(1)
  let [skin, setSkin] = useState(2)
  let [hairType, setHairType] = useState(6)
  let [hairColor, setHairColor] = useState(2)
  let [bodyType, setBodyType] = useState(3)
  let [bodyColor, setBodyColor] = useState(5)

// default settings
  let [eyeColor, setEyeColor] = useState( localStorage.getItem('eyes') || eyes[eye])
  let [gloveColor, setGloveColor] = useState(localStorage.getItem('gloves') || gloves[glove])
  let [padColor, setPadColor] = useState(localStorage.getItem('pads') || pads[pad])
  let [skinColor, setSkinColor] = useState(localStorage.getItem('skin') || faces[skin])
  let [hair, setHair] = useState(localStorage.getItem('hair') || hairArray[hairType][hairColor])
  let [body, setBody] = useState(localStorage.getItem('body') || bodyArray[bodyType][bodyColor])

  const eyeSelector = () => {
    if (eye === eyes.length -1) {
      setEyeColor(eyes[0])
      setEye(0)
    } else {
      setEyeColor(eyes[eye+1])
      setEye(eye+1)
    }
  }
  const gloveSelector = () => {
    if (glove === gloves.length -1) {
      setGloveColor(gloves[0])
      setGlove(0)
    } else {
      setGloveColor(gloves[glove+1])
      setGlove(glove+1)
    }
  }
  const padSelector = () => {
    if (pad === pads.length -1) {
      setPadColor(pads[0])
      setPad(0)
    } else {
      setPadColor(pads[pad+1])
      setPad(pad+1)
    }
  }
  const skinSelector = () => {
    if (skin === faces.length -1) {
      setSkinColor(faces[0])
      setSkin(0)
    } else {
      setSkinColor(faces[skin+1])
      setSkin(skin+1)
    }
  }
  // hair
  const hairColorSelector = () => {
    if (hairColor < 3) {
      setHair(hairArray[hairType][hairColor+1])
      setHairColor(hairColor+1)
    } else {
      setHair(hairArray[hairType][0])
      setHairColor(0)
    }
  }
  const hairStyleSelector = () => {
    if (hairType < 6) {
      setHair(hairArray[hairType+1][hairColor])
      setHairType(hairType+1)
    } else {
      setHair(hairArray[0][hairColor])
      setHairType(0)
    }
  }
  // body
  const bodyColorSelector = () => {
    if (bodyColor < 5) {
      setBody(bodyArray[bodyType][bodyColor+1])
      setBodyColor(bodyColor+1)
    } else {
      setBody(bodyArray[bodyType][0])
      setBodyColor(0)
    }
  }
  const bodyTypeSelector = () => {
    if (bodyColor === 6) {
      setBodyColor(0)
    }
    if (bodyType < 3) {
      setBody(bodyArray[bodyType+1][bodyColor])
      setBodyType(bodyType+1)
    } else {
      setBody(bodyArray[0][bodyColor])
      setBodyType(0)
    }
  }

  const saveAvatar = () => {
    let newName = document.getElementById('name')

    localStorage.setItem('name', newName.value)

    localStorage.setItem('eyes', eyeColor)
    localStorage.setItem('gloves', gloveColor)
    localStorage.setItem('pads', padColor)
    localStorage.setItem('skin', skinColor)
    localStorage.setItem('hair', hair)
    localStorage.setItem('body', body)
  }

  const updateName = (e) => {
    setName(e.target.value)
  }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 flex flex-col justify-center object-center bg-white/50 dark:bg-gray-600/50 backdrop-blur rounded-xl'>

        <Header
          category='Profile'
          title='Character Customization'
        />
      <div style={{width:'100%'}} className='flex justify-center'>
        <div className='bg-white/25 dark:bg-gray-600/25 backdrop-blur rounded flex justify-center object-center' style={{height: '40vh', width: '720px'}}>
          <img src={eyeColor} alt='eyes' style={{zIndex: '8', position: 'absolute', }} className='p-4 h-full ' />
          {/* locked below */}
          <img src={Face} alt='face' style={{zIndex: '7', position: 'absolute', }} className='p-4 h-full ' />
          {/* locked above */}
          <img src={hair} alt='face' style={{zIndex: '6', position: 'absolute', }} className='p-4 h-full ' />
          <img src={skinColor} alt='face' style={{zIndex: '5', position: 'absolute', }} className='p-4 h-full ' />
          <img src={padColor} alt='face' style={{zIndex: '4', position: 'absolute', }} className='p-4 h-full ' />
          <img src={gloveColor} alt='face' style={{zIndex: '3', position: 'absolute', }} className='p-4 h-full ' />
          <img src={body} alt='face' style={{zIndex: '2', position: 'absolute', }} className='p-4 h-full ' />
        </div>
      </div>


      {/* <div style={{zIndex: '1', position: 'absolute', width: '720px', height: '40vh'}} className='p-4 h-full bg-white/25 backdrop-blur-md rounded ' ></div> */}

      <div className='flex justify-center'>
        <div className='mt-2 bg-gray-200/60 dark:bg-gray-800/60 backdrop-blur rounded-md'>
          <div className='flex flex-wrap justify-center mx-2'>
            <div style={{width: '100%'}} className='flex flex-wrap justify-center mt-4'>
              <button type='button' onClick={eyeSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Eyes</button>
              <button type='button' onClick={gloveSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Gloves</button>
              <button type='button' onClick={padSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Pads</button>
              <button type='button' onClick={skinSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Face</button>
            </div>
            <div style={{width: '100%'}} className='flex flex-wrap justify-center mt-4'>
              <button type='button' onClick={hairColorSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Hair Color</button>
              <button type='button' onClick={hairStyleSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Hair Style</button>
              <button type='button' onClick={bodyTypeSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Body Type</button>
              <button type='button' onClick={bodyColorSelector} className={buttonClasses} style={{backgroundColor: currentColor }} >Suit Color</button>
            </div>
          </div>
          <div className='flex items-center flex-col my-4'>
            <input type='text' value={name} id='name' onChange={updateName}style={{width:'250px'}} className='mb-4 text-center' />
            <button tyep='button' onClick={saveAvatar} className={buttonClasses} style={{backgroundColor: currentColor, fontSize: 'large' }} >Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character