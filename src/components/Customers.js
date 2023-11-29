import Customer from "./Customer"

const Customers = () => {


    const customers = [
        {
          name: "Ryan Gillmore",
          sanction: "B-Mod",
          img: {},
          stats: [
            "Track Champion",
          ],
        },
        {
          name: "JC Morton",
          sanction: "B-Mod",
          img: {},
          stats: [
            "Track Champion",
            
          ],
        },
        {
          name: "John Potter",
          sanction: "B-Mod",
          img: {},
          stats: [
            "Track Champion",
          ],
        },
      ];
    return (
        <div className="album py-5">
        <div className="container">

          <div className="row">
          {customers.map((customer) => (
            <Customer customer={customer} key={customer.name}/>
          ))}
            
          </div>
        </div>
      </div>
    );
  };
  
  export default Customers;