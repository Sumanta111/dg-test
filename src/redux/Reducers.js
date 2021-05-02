import { combineReducers } from "redux";
import ListingReducer from "../store/reducer/ListingReducer";

export default combineReducers({
  listing: ListingReducer,
});
