import React, { useEffect, useState } from "react";

const handleWeather = (weather) => {
  let main = "";
  switch (weather) {
    case "Clear":
      main = "맑음";
      break;
    case "Clouds":
      main = "흐림";
      break;
    case "Atmosphere":
      main = " 기압";
      break;
    case "Snow":
      main = "눈";
      break;
    case "Rain":
      main = "비";
      break;
    case "Drizzle":
      main = "이슬비";
      break;
    case "Thunderstorm":
      main = "천둥";
      break;
    case "Mist":
      main = "안개";
      break;
    default:
      return main;
  }
  return main;
};

const Temperature = ({ weather, area }) => {
  const weatherKr = handleWeather(weather);

  return (
    <div>
      {
        (area,
        weather ? (
          <>
            {area}, {weatherKr}
          </>
        ) : (
          <>날씨를 불러오고 있습니다..</>
        ))
      }
    </div>
  );
};

export default Temperature;
