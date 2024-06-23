import { clearInterval } from "timers";
import { ReturnCity} from "./ReturnCity";
import { Jodhpur } from "./Jodhpur";
import { useEffect, useState } from "react";
import CityModel from "../../../Models/CityModel";
import { SpinnerLoading } from "../../Utils/SpinnerLoading";
import { Link } from "react-router-dom";

export const Carousel = () => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      const baseUrl: string = "http://localhost:8080/api/cities";
      const url: string = `${baseUrl}?page=0&size=3`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("somthing went wrong !");
      }

      const responseJson = await response.json();
      const responseData = responseJson._embedded.cities;

      const loadedCities: CityModel[] = [];
      for (const key in responseData) {
        loadedCities.push({
            id: responseData[key].id,
            cityName: responseData[key].cityName,
            placeName: responseData[key].placeName,
            description: responseData[key].description,
            imgLoc: responseData[key].imgLoc,
            category: responseData[key].category,
            img: responseData[key].img,
        });
      }
      setCities(loadedCities);
      setIsLoading(false);
    };
    fetchCities().catch((error: any) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <SpinnerLoading />
    );
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }
  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="hompage-carousel-title">
        <h3 style={{ textAlign: "center" }}>
        Better to see something once than hear about it a thousand times.
        </h3>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel carousel-dark 
            slid mt-5 d-none d-lg-block"
        data-bs-interval="false"
      >
        {/*desktop*/}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center">
            {cities.slice(0, 3).map((city) => (
                <ReturnCity city={city} key={city.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center">
            {cities.slice(0, 3).map((city) => (
                <ReturnCity city={city} key={city.id} />
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row d-flex justify-content-center">
            {cities.slice(0, 3).map((city) => (
                <ReturnCity city={city} key={city.id} />
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
        <ReturnCity city={cities[1]} key={cities[1].id} />
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <Link className="btn btn-outline-secondary btn-lg" to="/search">
          View More
        </Link>
      </div>
    </div>
  );
};
