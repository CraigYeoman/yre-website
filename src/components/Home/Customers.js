import Customer from "./Customer";
import JohnPotter from "../../images/JohnPotter.jpg";
import JcMorton from "../../images/JcMorton.jpg";
import RyanGillmore from "../../images/RyanGillmore.jpg";
import BrianBolin from "../../images/BrianBolin.jpg";
import TylerKidwell from "../../images/TylerKidwell.jpg";
import KyleSlader from "../../images/KyleSlader.jpg";

const Customers = () => {
  const customers = [
    {
      name: "Brian Bolin",
      sanction: "B-Mod",
      img: BrianBolin,
      stats: ["Track Champion"],
    },
    {
      name: "JC Morton",
      sanction: "B-Mod",
      img: JcMorton,
      stats: ["Track Champion"],
    },
    {
      name: "John Potter",
      sanction: "B-Mod",
      img: JohnPotter,
      stats: ["Track Champion"],
    },
    {
      name: "Kyle Slader",
      sanction: "B-Mod",
      img: KyleSlader,
      stats: ["Track Champion"],
    },
    {
      name: "Tyler Kidwell",
      sanction: "B-Mod",
      img: TylerKidwell,
      stats: ["Track Champion"],
    },
    {
      name: "Ryan Gillmore",
      sanction: "B-Mod",
      img: RyanGillmore,
      stats: ["Track Champion"],
    },
  ];
  return (
    <div className="album py-5" id="Customers">
      <div className="container">
        <h3 className="pb-3 text-center">Some of our customers</h3>
      </div>
      <div className="container">
        <div className="row">
          {customers.map((customer) => (
            <Customer customer={customer} key={customer.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
