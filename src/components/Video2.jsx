import React from 'react';
import './styles/Video2.css';
import { AppBar, Toolbar, Typography, Container, makeStyles } from '@material-ui/core';
import ReactPlayer from 'react-player';
import vid1 from '../vid1.mp4';
// import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    playerWrapper:{
        width: "100%",
        position: "relative"
    },

    controlsWrapper:{
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "false",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex:1
    }
});

const Video2 = () => {
    return (
      
        <div className="video2">
            <div className="playerWrapper">
                <ReactPlayer
                    url={vid1}
                    muted={false}
                    playing={true}
                />

                <video src={vid1}>

                </video>
            </div>

            <div className="controlsWrapper">
                <h1>richard</h1>

            </div>
        </div>
    )
}

export default Video2
