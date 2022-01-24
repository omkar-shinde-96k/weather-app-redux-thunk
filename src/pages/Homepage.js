import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { featchWeather } from "../actions/action";

const Homepage = () => {
  const weather = useSelector((state) => state.GetDataReducer);
  const dispatch = useDispatch();
  console.log("mystore", weather);

  const [city, setCity] = useState("india");

  useEffect(() => {
    dispatch(featchWeather(city));
  }, [city]);

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
