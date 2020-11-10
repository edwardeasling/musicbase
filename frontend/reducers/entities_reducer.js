import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import releasesReducer from "./releases_reducer";

const entitiesReducer = combineReducers({
    releases: releasesReducer,
    users: usersReducer,
});

export default entitiesReducer;