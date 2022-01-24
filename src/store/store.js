import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

// let arr = [1,23,4,5,6]

// Array.prototype.mymap = function(cb){
//     let newArray = []
//     for(let i=0;i < this.length;i++){
//     var cbreturn = cb(this[i],i );
//         this[i] = cbreturn;
//         newArray.push(this[i])
//     }
//     return newArray

// }

// const result = arr.mymap((curr,index,array)=>{
//     console.log(`curr is ${curr} and index is ${index}`);
//     return curr
// })

// console.log(result)
