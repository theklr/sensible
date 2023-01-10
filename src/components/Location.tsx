import React, { ChangeEventHandler } from "react";
type location = {
  lat?: number;
  long?: number;
};
type LocationProps = {
  handleSelect: ChangeEventHandler;
  selected?: location;
};

function Location({ handleSelect, selected }: LocationProps) {
  const locations = [
    { city: "Snowmass, CO", lat: 39.213, long: -106.9378 },
    { city: "Malibu, CA", lat: 34.0259, long: -118.7798 },
    { city: "Catskill, NY", lat: 42.2146, long: -73.9595 },
    { city: "Grand Teton National Park, WY", lat: 43.7904, long: -110.6818 },
    { city: "Columbia River Gorge, OR", lat: 45.7253, long: -121.73 },
  ];

  const selectedCity = locations.find(
    ({ lat, long }) => selected?.lat === lat && selected?.long === long
  )?.city;
  return (
    <section className="locations">
      <h3>Select a Location</h3>
      {locations.map(({ city, lat, long }) => (
        <div key={city}>
          <input
            type="radio"
            id={city.split(", ")[1]}
            value={`${lat}, ${long}`}
            onChange={handleSelect}
            checked={city === selectedCity}
          />
          <label htmlFor={city.split(", ")[1]}>{city}</label>
        </div>
      ))}
    </section>
  );
}
export default Location;
