import React, {useRef, useState} from 'react';
import './styles/Video.css';
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';


const Video = ({url, channel, description, song, likes, messages, shares}) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () =>{
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }else{
            videoRef.current.play();
            setPlaying(true);
        }
        //if video is playing
        //stop it.. 

        //otherwise if its not playing
        //play it
    }

    return (
        <div className="video">
            <video 
                onClick={handleVideoPress}
                src={url}
                className="video_player"
                loop
                ref={videoRef}
            >

            </video>

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSideBar 
                likes={likes}
                shares={messages}
                messages={shares}
            />
        </div>
    )
}

export default Video
