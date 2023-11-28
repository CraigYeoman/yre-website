import React from "react"
import video from "../images/video.mp4"
import Champions from "./Champions"
import jc from '../images/jc'

const Main = () => {

    return (
        <div className="main--container">
            <div className="video--container">
                <video className="background--video" src={video} alt="video" autoPlay muted loop disablePictureInPicture playsInline controlsList="nofullscreen nodownload"/>
                <div className="d-flex flex-column vh-50 vw-100 align-items-center justify-content-center position-absolute top-0" >
                <div className="col-lg-6 text-center">                 
                    <h1 className="display-5 fw-bold lh-1 text-white p-1 mb-0">Your way to victory lane</h1>
                    <p className="lead text-white p-2">We give you the power and reliabilty to win races, track championships, and national points series</p>
                </div>
            </div>
            </div >

            <div className="b-example-divider"></div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                    <img src={jc} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                    <h2 className="display-5 fw-bold lh-1 mb-3 text-white">Custom Engine Builds for Superior Performance</h2>
                    <p className="lead text-secondary">A winning racing program requires a lot.  Let us take care of your engine program.</p>
                    <p className="lead text-secondary">At Yeoman Race Engines, we specialize in custom race engine builds that outperform the competition. Our team of experts combines years of experience with cutting-edge technology to create engines that are tailored to your specific racing needs. Whether you race on dirt tracks or any other surface, our engines are built to deliver superior performance and reliability.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">About</button>
                    </div>
                    </div>
                </div>
            </div>

            <div className="b-example-divider"></div>
        
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

    <div className="px-4 py-5 bg-body-tertiary" id="hanging-icons">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* svg */}
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Proven Track Record</h3>
          <p className="text-body-emphasis">Choosing Yeoman Race Engines means choosing a legacy of success. Our track record speaks for itself, with numerous victories and championships earned by drivers and racing teams powered by our engines. We're not just engine builders; we're creators of winning experiences. Join the ranks of those who have experienced triumph with engines meticulously designed and built by our experts.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* svg */}
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">End-to-End Support</h3>
          <p className="text-body-emphasis">Beyond delivering top-notch engines, we prioritize our customers' satisfaction and success. When you choose Yeoman Race Engines, you're not just a client; you become a valued partner. Our comprehensive support extends beyond the sale, offering ongoing maintenance advice, technical support, and a commitment to ensuring your engine continues to perform at its peak.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* svg */}
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Trusted Expertise</h3>
          <p className="text-body-emphasis">Deciding on the right race engine builder is crucial, and at Yeoman Race Engines, you're in the hands of trusted experts. With decades of collective experience and a team passionate about the racing industry, we bring unparalleled expertise to every project. Our deep understanding of racing dynamics and relentless pursuit of perfection make us the go-to choice for serious racers and teams.</p>
          <a href="#" className="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="b-example-divider"></div>

  <div className="my-5">
  <div className="p-5 text-center">
    <div className="container py-5">
      <h1 className="text-body-emphasis">Full-width jumbotron</h1>
      <p className="col-lg-8 mx-auto lead">
      "If you are looking for the best reliable horsepower in the business Yeoman Race Engines is the answer.  If you want to compete on the next level contact Yeoman and the crew.  Customer service and absolute best tech service in the business.  I want to thank Yeoman Race Engines for all of my success this year and cannot wait until we fire off next year!"
      </p>
      <p> - John Potter</p>
    </div>
  </div>
</div>

            <div className="b-example-divider"></div>

            <div className="px-4 py-5 bg-body-tertiary">
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