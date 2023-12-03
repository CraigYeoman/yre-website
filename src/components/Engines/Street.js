import car1 from "../../images/car1.jpg";
import car2 from "../../images/car2.jpg";
import car3 from "../../images/car3.jpg";
import engine1 from "../../images/engine1.jpg";
import engine2 from "../../images/engine2.jpg";
import engine3 from "../../images/engine3.jpg";

const Street = () => {
  return (
    <div className="engine--container">
      <h1 className="engine-h1">Street</h1>
      <h3>
        We can build your street motor from a stock small block to a blower big
        block. Pricing varies depending on your goals.
      </h3>
      <div className="img-gallery">
        <img src={car1} alt="car" />
        <img src={car2} alt="car" />
        <img src={car3} alt="car" />
        <img src={engine1} alt="car" />
        <img src={engine2} alt="car" />
        <img src={engine3} alt="car" />
      </div>
    </div>
  );
};

export default Street;
