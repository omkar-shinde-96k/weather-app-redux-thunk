export const featchWeather = (city) => {
  return async (dispatch) => {
    try {
      var api = `http://api.weatherapi.com/v1/current.json?key=04938d6b73de4f07a5c43913201811&q=${city}`;
      let data = await fetch(api);
      var realtimeData = await data.json();
      dispatch(GetDataAction(realtimeData));
    } catch (error) {

    }
  };
};

export const GetDataAction = (payload) => {
  console.log("action tringer");
  return {
    type: "GetDataAction",
    payload,
  };
};

export const FailToGetAction = (payload) => {
    return { type: "FailToGetAction", payload}
}
