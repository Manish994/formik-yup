import React from "react";

function Registration() {
  return (
    <div className="container">
      <form>
        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-6">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="name"
              autoComplete="off"
              name="name"
              id="name"
              placeholder="Enter Name"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              autoComplete="off"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              placeholder="Eneter Password"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              className="form-control"
              type="password"
              autoComplete="off"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Enter Confirm Password"
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-3">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
