import video from "../images/video.mp4"

const Hero = () => {
    return (
        <div className="video--container">
                <video className="background--video" src={video} alt="video" autoPlay muted loop disablePictureInPicture playsInline controlsList="nofullscreen nodownload"/>
                <div className="d-flex flex-column vh-50 vw-100 align-items-center justify-content-center position-absolute top-0" >
                <div className="col-lg-6 text-center">                 
                    <h1 className="display-5 fw-bold lh-1 text-white p-1 mb-0">Your way to victory lane</h1>
                    <p className="lead text-white p-2">We give you the power and reliabilty to win races, track championships, and national points series</p>
                </div>
            </div>
            </div >
    )
}

export default Hero