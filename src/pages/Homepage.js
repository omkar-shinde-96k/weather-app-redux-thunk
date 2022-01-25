import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { featchWeather } from "../actions/action";

const Homepage = () => {
  const weather = useSelector((state) => state.GetDataReducer);
  const dispatch = useDispatch();

  const [city, setCity] = useState("delhi");

  useEffect(() => {
    dispatch(featchWeather(city));
  }, [city]);

  useEffect(() => {
    getCityName();
  }, []);

  const getCityName = async () => {
    const options = {
      enableHighAccuracy: true,
      maximumAge: 0,
    };

    let lat = null;
    let long = null;
    navigator.geolocation.getCurrentPosition(
      (values) => {
        lat = values.coords.latitude;
        long = values.coords.longitude;
        console.log(`Latitude : ${values.coords.latitude}`);
        console.log(`Longitude: ${values.coords.longitude}`);
        GetCity(lat, long);
      },
      (err) => {
        if (err) throw err;
      },
      options
    );
  };

  const GetCity = async (lat, long) => {
    const result = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=pk.622b03971f75f21977c1ed4292e51951&lat=${lat}&lon=${long}&format=json`
    );
    const city = await result.json();
    console.log(city?.address?.city);
    setCity(city.address.city);
  };

  return (
    <>
      <div id="main">
        <div id="checkpage">
          <div id="form">
            <input
              type="text"
              id="input"
              placeholder=" Enter City Name"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>

          <div id="box">
            <div className="img">
              <img align="center" src={weather?.current?.condition?.icon} />
            </div>

            <div id="time"> Date And Time: {weather?.location?.localtime} </div>

            <div id="location">
              Location: {weather?.location?.name} , {weather?.location?.region},
              {weather?.location?.country}
            </div>

            <div id="temp">Tempressure: {weather?.current?.temp_c} &deg; C</div>

            <div id="wind"> Speed : {weather?.current?.wind_kph} </div>

            <div id="direction"> Direction: {weather?.current?.wind_dir} </div>
          </div>

          <div id="errorshow" className="errorshowClass">
            {weather?.error?.message}
          </div>

          <br />
        </div>
      </div>
    </>
  );
};

export default Homepage;
