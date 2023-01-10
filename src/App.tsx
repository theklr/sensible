import { ChangeEvent, ChangeEventHandler, FormEvent, MouseEventHandler, useState } from "react";
import "./App.css";
import Location from "./components/Location";
import ResultsList from "./components/ResultsList";
import Search from "./components/Search";

type location = {
  lat?: number;
  long?: number;
};
type resultsListItem = {
  name?: string;
  address?: string;
  rating?: number;
};
type resultsList = Array<resultsListItem>;

function App() {
  const [location, setLocation] = useState<location>({
    lat: undefined,
    long: undefined,
  });
  const [locResuts, addLocations] = useState<undefined | resultsList>();
  const [keyword, setKeyword] = useState<string | undefined>();
  const handleSelect = (e:ChangeEvent<HTMLInputElement>):void => {
    const [lat, long] = e.currentTarget.value.split(", ");
    return setLocation({ lat: Number(lat), long: Number(long) });
  };
  const handleSearch:MouseEventHandler = (e):void => {
    e.stopPropagation();
    // make google call here
    if (location) {
      const { lat, long } = location;
      const gLocation: google.maps.LatLng = new google.maps.LatLng(
        lat as number,
        long as number
      );
      console.debug({ ...gLocation });
      const service = new google.maps.places.PlacesService(
        document.getElementById("gMap") as HTMLDivElement
      );

      service.nearbySearch(
        { keyword, location: gLocation, radius: 5000 },
        (results, status) => {
          if (status !== "OK") return;
          addLocations(
            results?.map(({ rating, name, vicinity }) => ({
              name,
              address: vicinity,
              rating,
            }))
          );
          console.log(
            { keyword, lat: gLocation.lat(), lng: gLocation.lng() },
            status,
            results
          );
          // map resutls with destructuring rating, name,vicinity
        }
      );
    }
  };
  const handleKeyword = (e:ChangeEvent<HTMLInputElement>):void =>
    setKeyword((keyword) => (keyword = e.currentTarget.value));

  return (
    <main className="App">
      <Location selected={location} handleSelect={handleSelect} />
      <Search
        handleSearch={handleSearch}
        handleKeyword={handleKeyword}
        keywordSearch={keyword}
      />
      <ResultsList results={locResuts} />
    </main>
  );
}

export default App;
