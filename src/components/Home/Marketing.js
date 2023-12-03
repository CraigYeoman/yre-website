import { FaFlagCheckered } from "react-icons/fa"
import { FaHandshakeSimple } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';

const Marketing = () => {

    return (
        <div className="px-5 py-6 bg-body-tertiary" id="hanging-icons">
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
        <FaFlagCheckered />
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Proven Track Record</h3>
          <p className="text-body-emphasis">Choosing Yeoman Race Engines means choosing a legacy of success. Our track record speaks for itself, with numerous victories and championships earned by drivers and racing teams powered by our engines. We're not just engine builders; we're creators of winning experiences. Join the ranks of those who have experienced triumph with engines meticulously designed and built by our experts.</p>
          <Button href="#Customers">Customers</Button>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">         
          <FaGear />
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">End-to-End Support</h3>
          <p className="text-body-emphasis">Beyond delivering top-notch engines, we prioritize our customers' satisfaction and success. When you choose Yeoman Race Engines, you're not just a client; you become a valued partner. Our comprehensive support extends beyond the sale, offering ongoing maintenance advice, technical support, and a commitment to ensuring your engine continues to perform at its peak.</p>
          <Button href="#Contact">Contact</Button>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          <FaHandshakeSimple />
        </div>
        <div>
          <h3 className="fs-2 text-body-emphasis">Trusted Expertise</h3>
          <p className="text-body-emphasis">Deciding on the right race engine builder is crucial, and at Yeoman Race Engines, you're in the hands of trusted experts. With decades of collective experience and a team passionate about the racing industry, we bring unparalleled expertise to every project. Our deep understanding of racing dynamics and relentless pursuit of perfection make us the go-to choice for serious racers and teams.</p>
          <Button href="#About">About</Button>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Marketing