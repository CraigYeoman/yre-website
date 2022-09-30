import React from "react"
import video from "../images/video.mp4"
import "../style.css"
import Champions from "./Champions"

const Main = () => {

    return (
        <div className="main--container">
            <div className="video--container">
                <video className="background--video" src={video} alt="video" autoPlay muted loop disablePictureInPicture playsInline controlsList="nofullscreen nodownload"/>
            </div >
            <div className="content--row">
                <div className="content--container">
                    <div className="info--container">
                        <h3>Custom Engines</h3>
                        <div>
                            Yeoman Race Engines are custom built to fit your needs. From dirt track, drag strip or street, we can custom build an engine that will increase your horsepower and have reliabilty you can count on.
                        </div>
                    </div>
                </div>
                <Champions />
                <div className="fb">
                    <div className="fb--container">
                        {/*
                        <div className="fb-page" data-href="https://www.facebook.com/yeomanraceengines/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/yeomanraceengines/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/yeomanraceengines/">Yeoman Race Engines</a></blockquote></div>
    */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main