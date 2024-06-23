import React from "react";

export const Jodhpur = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../../Images/CitiesImages/jaipur_fort_sunset.png")}
          width="151"
          height="233"
          alt="book"
        />
        <h6 className="mt-2">Fort Sunset</h6>
        <p>Jodhpur</p>
        <a className="btn main-color text-white" href="#">
          Explore
        </a>
      </div>
      
    </div>
  );
};
