import React from 'react'

import Header from '../components/Header'

function Ready() {

    const subdomain = 'demo'; // Replace with your custom subdomain
    const frame = document.getElementById('frame');

    window.addEventListener('message', subscribe);
    document.addEventListener('message', subscribe);

    function subscribe(event) {
        const json = parse(event);

        if (json?.source !== 'readyplayerme') {
            return;
        }

        // Susbribe to all events sent from Ready Player Me once frame is ready
        if (json.eventName === 'v1.frame.ready') {
            frame.contentWindow.postMessage(
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
            document.getElementById('frame').hidden = true;
            localStorage.setItem('readyAvatar', json.data.url)
        }

        // Get user id
        if (json.eventName === 'v1.user.set') {
            console.log(`User with id ${json.data.id} set: ${JSON.stringify(json)}`);
        }
    }

    function parse(event) {
        try {
            return JSON.parse(event.data);
        } catch (error) {
            return null;
        }
    }

    function displayIframe() {
        document.getElementById('frame').hidden = false;
    }

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 flex flex-col justify-center object-center bg-white/50 dark:bg-gray-600/50 backdrop-blur rounded-xl'>

    <Header
      category='Profile'
      title='Character Customization'
    />

    <p id="avatarUrl">Avatar URL:</p>

    <iframe 
        id="frame" 
        style={{width: '100%', minHeight: '500px', maxHeight: '800px', margin: '0', fontSize: '14px', border: 'none'}}
        allow="camera *; microphone *; clipboard-write" 
        // hidden
        src={`https://${subdomain}.readyplayer.me/avatar?frameApi`}
    ></iframe>

    </div>
  )
}

export default Ready