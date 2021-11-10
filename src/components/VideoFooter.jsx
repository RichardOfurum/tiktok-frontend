import React from 'react'
import './styles/VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from "react-ticker";


const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="video_footer">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon"/>

                    <Ticker mode="chain">
                        {({ index }) => (
                            <>
                                <p>{song} </p>  
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img className="videoFooter_record" src="https://static.thenounproject.com/png/934821-200.png" alt="" />
        </div>
    )
}


export default VideoFooter
