import React from 'react'

import Header from '../components/Header'
import { useStateContext } from '../contexts/ContextProvider'


function Ready() {
    
    const { currentColor } = useStateContext()

    const subdomain = 'demo'; // Replace with your custom subdomain
    // const frame = document.getElementById('frame');

    window.addEventListener('message', subscribe);
    document.addEventListener('message', subscribe);

    function parse(event) {
        try {
            return JSON.parse(event.data);
        } catch (error) {
            console.log('null error catch')
            return null;
        }
    }

    function subscribe(event) {
        const json = parse(event);
        // console.log(json)

        if (json?.source !== 'readyplayerme') {
            return;
        }

        // Susbribe to all events sent from Ready Player Me once frame is ready
        if (json.eventName === 'v1.frame.ready') {
            document.getElementById('frame').contentWindow.postMessage(
                JSON.stringify({
                    target: 'readyplayerme',
                    type: 'subscribe',
                    eventName: 'v1.**'
                }),
                '*'
            );
        }

        // Get avatar GLB URL
        if (json.eventName === 'v1.avatar.exported') {
            console.log(`Avatar URL: ${json.data.url}`);
            document.getElementById('avatarUrl').innerHTML = `Avatar URL: ${json.data.url}`;
            // document.getElementById('frame').hidden = true;
            localStorage.setItem('readyUrl', json.data.url)
            
        }

        // Get user id
        if (json.eventName === 'v1.user.set') {
            console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
            localStorage.setItem('readyId', json.data.id)
        }
    }

    // function displayIframe() {
    //     document.getElementById('frame').hidden = false;
    // }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 flex flex-col justify-center object-center bg-white/50 dark:bg-gray-600/50 backdrop-blur rounded-xl'>

    <Header
      category='Profile'
      title='Character Customization'
    />

    <p 
        id="avatarUrl"
        className='font-semibold mb-2 px-2 bg-slate-800'
        style={{color:currentColor, textAlign: 'center'}}
    >{localStorage.getItem('readyUrl') ? `Download Avatar from URL: ${localStorage.getItem('readyUrl')}` : `Download Avatar from URL: `}</p>

    <iframe 
        id="frame" 
        style={{width: '100%', height: '700px', margin: '0', fontSize: '14px', border: 'none'}}
        allow="camera *; microphone *; clipboard-write" 
        // hidden
        src={`https://${subdomain}.readyplayer.me/avatar?frameApi`}
    ></iframe>

    </div>
  )
}

export default Ready