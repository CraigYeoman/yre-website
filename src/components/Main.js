import React from "react"
import video from "../images/video.mp4"
import "../style.css"

const Main = () => {

    return (
        <div className="main-container">
            <div className="video-container">
                <video className="background-video" src={video} alt="video" autoPlay muted loop disablePictureInPicture playsInline controlsList="nofullscreen nodownload"/>
            </div>
        </div>
    )
}

export default Main