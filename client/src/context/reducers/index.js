import {combineReducers} from "redux";
import alertReducer from "./alertReducer";
import allUserReducer from "./allUserReducer";
import cartReducer from "./cartReducer";
import displayCartReducer from "./displayCartReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import ordersReducer from "./ordersReducer";


const myReducers = combineReducers({
    user : userReducer,
    allUsers: allUserReducer,
    alert : alertReducer,
    cart : cartReducer,
    products : productReducer,
    isCart : displayCartReducer,
    orders: ordersReducer

})

export default myReducers;