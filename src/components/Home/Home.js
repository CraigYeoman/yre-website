import React from "react";

import Champions from "../Champions";
import Hero from "./Hero";
import About from "./About";
import Marketing from "./Marketing";
import Testimonial from "./Testimonial";
import Bio from "./Bio";
import Customers from "./Customers";
import Faq from "./Faq";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="main--container">
      <Hero />
      <About />
      <Marketing />
      <Testimonial />
      <Bio />
      <Customers />
      <Faq />
      <Contact />

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
    </div>
  );
};

export default Home;
