const handleGeoSuccess = async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherApi = "c9f5e0525d1d4f8c6288f490d689c397";

  const location = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApi}`
  );
  return location;
};

export default handleGeoSuccess;
