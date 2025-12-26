import React from "react";

function Hero() {
  return (
    <section className="container-fluid text-white" id="support-hero">
      
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center px-5 pt-4">
        <h5 className="mt-3">Support Portal</h5>
        <a href="#" className="text-white text-decoration-underline">
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row mt-4 mb-5 px-5">

        {/* Left Section */}
        <div className="col-lg-6 col-md-12 p-4">
          <h3 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>

          {/* Search Input */}
          <div className="input-group mb-4 col-lg-10">
            <input
              type="text"
              className="form-control"
              placeholder="Eg: How do I activate F&O, why is my order getting rejected?"
              aria-label="Search support articles"
            />
            <button className="btn btn-dark">Search</button>
          </div>

          {/* Quick Links */}
          <div className="d-flex flex-wrap gap-3 mb-3">
            <a href="#" className="text-white">Track account opening</a>
            <a href="#" className="text-white">Track segment activation</a>
            <a href="#" className="text-white">Intraday margins</a>
          </div>

          <div className="d-flex flex-wrap gap-3">
            <a href="#" className="text-white">Kite user manual</a>
            <a href="#" className="text-white">Learn how to create a ticket</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6 col-md-12 p-4" id="featured">
          <h2 className="mb-3">Featured</h2>

          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="#" className="text-white">
                1. Current Takeovers and Delisting – January 2026
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                2. Last Intraday leverages – MIS & CO
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Hero;
