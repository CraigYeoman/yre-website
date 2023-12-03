import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import Location from "../../images/location.png";

const Contact = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5" id="Contact">
      <div className="row flex-lg-row-reverse align-items-center g-5 p-4 ">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={Location}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="display-5 fw-bold lh-1 mb-3 text-white">Contact</h2>
          <MdOutlineEmail size={30} className="mt-2 mb-2" />
          <h4 className="font-weight-bold">Email</h4>
          <p className="lead text-white">Send us an email today for a quote!</p>
          <p className="lead text-white">yeomanraceengines@gmail.com</p>
          <LuPhone size={30} className="mt-2 mb-2" />
          <h4 className="font-weight-bold">Phone</h4>
          <p className="lead text-white">For the quickest response</p>
          <p className="lead text-white">620-783-2662</p>
          <IoLocationSharp size={30} className="mt-2 mb-2" />
          <h4 className="font-weight-bold">Address</h4>
          <p className="lead text-white">724 W. 7th. Galena, KS 66739</p>
          <p className="lead text-white">Please mail all checks to : </p>
          <p className="lead text-white">P.O. Box 157 Galena, KS 66739</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
