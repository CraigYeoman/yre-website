const Bio = () => {
    return (
        <div className="px-4 py-5 bg-body-tertiary">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About</h1>
                        <p className="lead text-secondary">Founded on a heritage deeply rooted in racing, our legacy began with Jerry Yeoman's innate passion for modifying engines. From dominating AHRA races to conquering IHRA Prostock circuits, our journey evolved into a family-driven force. With Jerry as a decorated driver and John Yeoman as the skilled crew chief, we forged our path to success. What started as a humble machine shop for our racing motors expanded into a commitment to fellow racers. At our core, we are racers dedicated to racers, offering not only high-performance products but also a wealth of invaluable expertise honed over the years. Let us propel your racing program to new heights, delivering reliable horsepower and the guidance needed to triumph in the winners' circle.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact</button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="bootstrap-themes.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
    )
}

export default Bio