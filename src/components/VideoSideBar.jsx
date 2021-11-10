import React, { useState } from 'react'
import './styles/VideoSideBar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const VideoSideBar = ({likes, shares, messages}) => {
    const [liked, setLiked] = useState(false);   

    return (
        <div className="video_side_bar">
            <div className="videoSidebar_button">
                {liked ? 
                    <FavoriteIcon fontSize="large"
                    onClick={(e) =>setLiked(false)}
                    />
                    :
                    <FavoriteBorderIcon fontSize="large"
                        onClick={(e) =>setLiked(true)}
                    />
                }
                
                <p>{likes}</p>
            </div>
            
            <div className="videoSidebar_button">
                <MessageIcon/>
                <p>{shares}</p>
            </div>
            
            <div className="videoSidebar_button">
                <ShareIcon/>
                <p>{messages}</p>
            </div>

            
        </div>
    )
}

export default VideoSideBar
