import jc from "../../images/jc";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-4 ">
        <div className="col-sm-8 col-lg-6">
          <img
            src={jc}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3 text-white">
            Custom Engine Builds for Superior Performance
          </h2>
          <p className="lead text-secondary">
            A winning racing program requires a lot. Let us take care of your
            engine program.
          </p>
          <p className="lead text-secondary">
            At Yeoman Race Engines, we specialize in custom race engine builds
            that outperform the competition. Our team of experts combines years
            of experience with cutting-edge technology to create engines that
            are tailored to your specific racing needs. Whether you race on dirt
            tracks or any other surface, our engines are built to deliver
            superior performance and reliability.
          </p>
          <p className="lead text-secondary">Contact us today for a quote!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Button href="#Contact" variant="outline-secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
