
import './App.css';
import React, { useEffect, useState } from 'react';
import Video from './components/Video';
import baseUrl from './baseUrl';

function App() {
  const [videos, setVideos] = useState([]);

  const getallData = async () => {
      try{
          const res = await fetch(`${baseUrl}/v1/posts`);
          const jsonData = await res.json();
          setVideos(jsonData);
          await console.log(videos);
      }catch(e){
          console.log(e.messages);
      }
  }

  useEffect(() => {
    getallData();
  }, [])

  return (
    <div className="app">
        
        <div className="app_videos">

            {videos.map(({url, channel, description, song, likes, messages, shares}) =>(
                <Video 
                    url="vid1.mp4"
                    channel={channel}
                    description={description}
                    song={song}
                    messages={messages} 
                    shares = {shares}
                />
            ))}
            {/* <Video 
                url="vid2.mp4"
                channel="@Richy"
                description="You don't know this avout your iphone:"
                song="I Need You ( Live)- Eddie James" likes={200} 
                messages={142} 
                shares = {48}
            />
            <Video 
                url="vid1.mp4"
                channel="@Mine"
                description="Always the low quality videos"
                song="I Need You ( Live)- Eddie James" likes={200} 
                messages={142} 
                shares = {48}
            /> */}
            
           
            
        </div>
        {/* appcontainer */}
            {/* videos */}
    </div>
  );
}

export default App;
