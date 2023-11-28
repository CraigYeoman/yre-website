import React from "react";
import Location from "../images/location.png";

const Contact = () => {
  return (
    <div className="container contact">
      <div className="contact--container">
        <div className="contact--info">
          <div>
            <h3>Address</h3>
            <h4>Yeoman Race Engines</h4>
            <h4>724 W. 7th St.</h4>
            <h4>Galena, KS 66739</h4>
          </div>
          <div>
            <h3>Please mail all Checks to</h3>
            <h4>Yeoman Race Engines</h4>
            <h4>PO Box 157</h4>
            <h4>Galena, KS 66739</h4>
          </div>
        </div>
        <div className="contact--info">
          <div>
            <h3>Phone Number</h3>
            <h4>1-620-783-2662</h4>
            <h4>For the quickest response please contact us via phone</h4>
          </div>
        </div>
        <div className="contact--info">
          <h3>Email</h3>
          <h4>yeomanraceengines@gmail.com</h4>
          <h3>Facebook</h3>
          <h4>https://www.facebook.com/yeomanraceengines</h4>
        </div>
      </div>
      <div className="contact--directions">
        <div>
          <h3>Directions</h3>
          <p>
            It is very common for GPS/search engines/UPS to change our address
            to 724 E. 7th St. This is incorrect, please overide to W. 7th or you
            will be sent to the other side of town.
          </p>
        </div>
        <div>
          <h4>Coming from I-44</h4>
          <p>
            Follow I-44 to Exit 1 in Missouri (Baxter Springs, KS - Highway 166
            exit). If your are coming from the East take a right off the exit
            ramp, the west take a left. At the Downstream Casino round about
            continue straight. Once you reach a fourway stop continue straigt
            towards Galena. Once in Galena take a left at the stoplight onto 7th
            St./Rt. 66. Approximately half a mile on your left hand side on the
            corner of 7th and Schemerhorn.{" "}
          </p>
        </div>
        <img alt="location" src={Location} />
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
