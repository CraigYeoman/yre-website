import dragRace1 from "../../images/dragrace1.jpg";
import dragRace2 from "../../images/dragrace2.jpg";
import dragRace3 from "../../images/dragrace3.jpg";
import dragRace4 from "../../images/dragrace4.jpg";
import dragRace5 from "../../images/dragrace5.jpg";
import dragRace6 from "../../images/dragrace6.jpg";

const DragRace = () => {
  return (
    <div className="engine--container">
      <h1 className="engine-h1">Drag Racing</h1>
      <h3>
        The majority of drag racing classes offer a wide variety of engine
        combinations. With that being said, prices vary greatly depending on
        your application. Whether you're looking for all motor, nitrous, blower,
        or turbos, we can customize a motor to suit your needs.
      </h3>
      <div className="img-gallery">
        <img src={dragRace1} alt="car" />
        <img src={dragRace2} alt="car" />
        <img src={dragRace3} alt="car" />
        <img src={dragRace4} alt="car" />
        <img src={dragRace5} alt="car" />
        <img src={dragRace6} alt="car" />
      </div>
    </div>
  );
};

export default DragRace;
