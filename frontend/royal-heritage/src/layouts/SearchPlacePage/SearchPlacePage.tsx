import { useEffect, useState } from "react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import CityModel from "../../Models/CityModel";
import { SearchPlace } from "./components/SearchPlace";
import { Pagination } from "../Utils/Pagination";

export const SearchPlacePage = () => {
  const [cities, setCities] = useState<CityModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [cityPerPage] = useState(3);
  const [totalAmountOfPlace, setTotalAmountOfPlace] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [searchUrl, setSearchUrl] = useState("");
  const [categorySelection, setCategorySelection]=useState('Place Category');

  useEffect(() => {
    const fetchCities = async () => {
      const baseUrl: string = "http://localhost:8080/api/cities";
      let url: string = "";

      if (searchUrl === "") {
        url = `${baseUrl}?page=${currentPage - 1}&size=${cityPerPage}`;
      } else {
        let searchWithPage=searchUrl.replace('<pageNumber>',`${currentPage-1}`)
        url = baseUrl + searchWithPage;
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("somthing went wrong !");
      }

      const responseJson = await response.json();
      const responseData = responseJson._embedded.cities;

      setTotalAmountOfPlace(responseJson.page.totalElements);
      setTotalPages(responseJson.page.totalPages);

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
    window.scrollTo(0, 0);
  }, [currentPage, searchUrl]);

  if (isLoading) {
    return <SpinnerLoading />;
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  const searchHandleChange = () => {
    setCurrentPage(1);
    if (search === "") {
      setSearchUrl("");
    } else {
      setSearchUrl(
        `/search/findByplaceNameContaining?placeName=${search}&page=<pageNumber>&size=${cityPerPage}`
      );
    }
    setCategorySelection('Place Category')
  }

  const categoryField=(value: string)=>{
    setCurrentPage(1);
    if(
      value.toLocaleLowerCase()==='city' ||
      value.toLocaleLowerCase()=='heritage' ||
      value.toLocaleLowerCase()==='adventures' ||
      value.toLocaleLowerCase()=='desert'
    ){
      setCategorySelection(value);
      setSearchUrl(`/search/findByCategory?category=${value}&page=<pageNumber>&size=${cityPerPage}`)
    }else{
      setCategorySelection('All');
      setSearchUrl(`?page=<pageNumber>&size=${cityPerPage}`)
    }
  }

  const indexOfLastCity: number = currentPage * cityPerPage;
  const indexOfFirstCity: number = indexOfLastCity - cityPerPage;
  let lastItem =
    cityPerPage * currentPage <= totalAmountOfPlace
      ? cityPerPage * currentPage
      : totalAmountOfPlace;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div>
        <div className="row mt-5">
          <div className="col-6">
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-labelledby="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                onClick={() => searchHandleChange()}
              >
                Search
              </button>
            </div>
          </div>
          <div className="col-4">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
             {categorySelection}
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li onClick={()=> categoryField('All')}>
                  <a className="dropdown-item" href="#">
                    All
                  </a>
                </li>
                <li onClick={()=> categoryField('City')}>
                  <a className="dropdown-item" href="#">
                    City
                  </a>
                </li>
                <li onClick={()=> categoryField('Heritage')}>
                  <a className="dropdown-item" href="#">
                    Heritage
                  </a>
                </li>
                <li onClick={()=> categoryField('Adventures')}>
                  <a className="dropdown-item" href="#">
                    Adventures
                  </a>
                </li>
                <li onClick={()=> categoryField('Desert')}>
                  <a className="dropdown-item" href="#">
                    Desert
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {totalAmountOfPlace > 0 ? (
          <>
            <div className="mt-3">
              <h5>Number of results: ({totalAmountOfPlace})</h5>
            </div>
            <p>
              {indexOfFirstCity + 1} to {lastItem} of {totalAmountOfPlace}{" "}
              items:
            </p>
            {cities.map((city) => (
              <SearchPlace city={city} key={city.id} />
            ))}
          </>
        ) : (
          <div className="m-5">
            <h3>Can't find what you are looking for?</h3>
            <a
              type="button"
              className="btn main-color btn-md px-4 me-md-2 fw-bold text-white"
              href="#"
            >
              Travel Services
            </a>
          </div>
        )}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        )}
      </div>
    </div>
  );
};
