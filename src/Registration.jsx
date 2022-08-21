import React from "react";
import { useFormik } from "formik";

const initialFormValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
function Registration() {
  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: initialFormValues,
      onSubmit: (values) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 15 ~ Registration ~ values",
          values
        );
      },
    });

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
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
              value={values.name}
              onChange={handleChange}
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
              value={values.email}
              onChange={handleChange}
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
              value={values.password}
              onChange={handleChange}
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
              value={values.confirmpassword}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;
