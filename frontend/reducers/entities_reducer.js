import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import releasesReducer from "./releases_reducer";
import artistsReducer from "./artists_reducer";

const entitiesReducer = combineReducers({
    releases: releasesReducer,
    users: usersReducer,
    artists: artistsReducer
});

export default entitiesReducer;