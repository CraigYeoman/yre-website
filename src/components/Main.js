import React from "react"
import video from "../images/video.mp4"
import Champions from "./Champions"

const Main = () => {

    return (
        <div className="main--container">
            <div className="video--container">
                <video className="background--video" src={video} alt="video" autoPlay muted loop disablePictureInPicture playsInline controlsList="nofullscreen nodownload"/>
            </div >
            {/* <div className="content--row">
                <div className="content--container">
                    <div className="info--container">
                        <h3>Custom Engines</h3>
                        <div>
                            Yeoman Race Engines are custom built to fit your needs. From dirt track, drag strip or street, we can custom build an engine that will increase your horsepower and have reliabilty you can count on.
                        </div>
                        <br/>
                        <div>
                            "If you are looking for the best reliable horsepower in the business Yeoman Race Engines is the answer.  If you want to compete on the next level contact Yeoman and the crew.  Customer service and absolute best tech service in the business.  I want to thank Yeoman Race Engines for all of my success this year and cannot wait until we fire off next year!" - John Potter
                        </div>
                    </div>
                </div>
                <Champions />
                <div className="fb">
                    <div className="fb--container">
                        <div className="fb-page" data-href="https://www.facebook.com/yeomanraceengines/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/yeomanraceengines/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/yeomanraceengines/">Yeoman Race Engines</a></blockquote></div>
                    </div>
                </div>
            </div> */}
            <div className="b-example-divider"></div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                    <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Your way to victory lane</h1>
                    <p className="lead text-secondary">A winning racing programs requires a lot.  Let us take care of your engine program.</p>
                    <p className="lead text-secondary">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <p className="lead text-secondary">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">About</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Responsive left-aligned hero with image</h1>
                        <p className="lead text-secondary">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main