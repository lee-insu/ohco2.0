import React, { useEffect, useState } from "react";
import handleGeoSuccess from "../pages/api/location";

const Temperature = () => {
  const [temp, setTemp] = useState();
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeo);

    function handleGeo(position) {
      try {
        handleGeoSuccess(position)
          .then((res) => res.json())
          .then((res) => {
            setTemp(Math.round(res.main.temp) - 273);
            setWeather(res.weather[0].main);
            setLocation(res.name);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  return (
    <div>
      {
        (location,
        weather ? (
          <>
            {location}, {weather}
          </>
        ) : (
          <>날씨를 불러오고 있습니다..</>
        ))
      }
    </div>
  );
};

export default Temperature;
