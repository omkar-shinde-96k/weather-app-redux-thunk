export const featchWeather = (city) => {
  return async (dispatch) => {
    try {
      if (city !== "" && city.length > 3) {
        var api = `https://api.weatherapi.com/v1/current.json?key=04938d6b73de4f07a5c43913201811&q=${city}`;
        let data = await fetch(api);
        var realtimeData = await data.json();
        dispatch(GetDataAction(realtimeData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetDataAction = (payload) => {
  return {
    type: "GetDataAction",
    payload,
  };
};

export const FailToGetAction = (payload) => {
  return { type: "FailToGetAction", payload };
};
