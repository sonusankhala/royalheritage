import { Carousel } from "./components/Carousel";
import { ExploreTopPlaces } from "./components/ExploreTopPlaces";
import { Heros } from "./components/Heros";
import { TravelService } from "./components/TravelService";

export const HomePage = () => {
  return (
    <>
      <ExploreTopPlaces />
      <Carousel />
      <Heros />
      <TravelService />
    </>
  );
};
