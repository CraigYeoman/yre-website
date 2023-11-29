const Customer = (data) => {
    console.log(data)
    const { name, sanction, img, stats } = data.customer;
    console.log(data.stats)
    return (
        <div className="col-md-4">
        <div className="card mb-4 box-shadow">
          <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card image cap"/>
          <p className="card-body">{name}</p>
          <div className="card-body">
            {stats.map((stat) => (
                 <p className="card-text">{stat}</p>
            ))}
           
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Customer;