import { combineReducers } from "redux";
import postReducers from "./postReducers";
import usersReducer from "./usersReducers";
export default combineReducers({
    posts: postReducers,
    users: usersReducer
})