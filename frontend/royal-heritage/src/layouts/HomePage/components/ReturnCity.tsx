import React from "react";
import CityModel from "../../../Models/CityModel";

export const ReturnCity: React.FC<{ city: CityModel }> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
      {props.city.img ? 
                    <img
                        src={props.city.img}
                        width='151'
                        height='233'
                        alt="city"
                    />
                    :
                    <img
                        src={require('./../../../Images/CitiesImages/beautiful_hawa_mahal.png')}
                        width='151'
                        height='233'
                        alt="city"
                    />
                  }
        <h6 className="mt-2">{props.city.cityName}</h6>
        <p>{props.city.placeName}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
