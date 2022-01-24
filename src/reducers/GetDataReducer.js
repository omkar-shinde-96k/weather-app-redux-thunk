let Data = [];

const GetDataReducer = (state = [], action) => {
  switch (action.type) {
    case "GetDataAction": {
      console.log("lets get data", action.payload);
      Data = action.payload;
      return Data;
    }

    case "FailToGetAction" : {
        Data = action.payload;
    }

    default:
      return Data;
  }
};

export default GetDataReducer;
