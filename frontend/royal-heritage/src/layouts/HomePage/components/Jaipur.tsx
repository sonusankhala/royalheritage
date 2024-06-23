import React from "react";

export const Jaipur = () => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        <img
          src={require("./../../../Images/CitiesImages/beautiful_hawa_mahal.png")}
          width="151"
          height="233"
          alt="book"
        />
        <h6 className="mt-2">Hawa Mahal</h6>
        <p>Jaipur</p>
        <a className="btn main-color text-white" href="#">
          Explore
        </a>
      </div>
      
    </div>
  );
};
