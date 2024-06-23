import CityModel from "../../../Models/CityModel";

export const SearchPlace: React.FC<{ city: CityModel }> = (props) => {
  return (
    <div className="card mt-3 shadow p-3 mb-3 bg-body rounded">
      <div className="row g-0">
        <div className="col-md-2">
          <div className="d-none d-lg-block">
            {props.city.img ? (
              <img src={props.city.img} width="123" height="196" alt="City" />
            ) : (
              <img
                src={require("../../../Images/CitiesImages/jantar-mantar-jaipur.jpg")}
                width="123"
                height="196"
                alt="City"
              />
            )}
          </div>
          <div
            className="d-lg-none d-flex justify-content-center 
                        align-items-center"
          >
            {props.city.img ? (
              <img src={props.city.img} width="123" height="196" alt="City" />
            ) : (
              <img
                src={require("../../../Images/CitiesImages/jantar-mantar-jaipur.jpg")}
                width="123"
                height="196"
                alt="City"
              />
            )}
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{props.city.cityName}</h5>
            <h4>{props.city.placeName}</h4>
            <p className="card-text">{props.city.description}</p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <a className="btn btn-md main-color text-white" href="#">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};
