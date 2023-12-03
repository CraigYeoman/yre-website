const Customer = (data) => {
  const { name, sanction, img, stats } = data.customer;
  console.log(img);
  return (
    <div key={name} className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          src={img}
          alt="customer image"
          style={{ width: "225", height: "200px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-tex">{sanction}</p>
          {/* <div className="card-body">
            
              {stats.map((stat) => (
                  <p className="card-text" key={stat}>{stat}</p>
              ))}
            </div> */}
        </div>
      </div>
    </div>
  );
};

// 100x225

export default Customer;
