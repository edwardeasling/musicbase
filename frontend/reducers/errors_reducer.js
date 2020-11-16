import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import releaseErrorsReducer from "./release_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    release: releaseErrorsReducer
});

export default errorsReducer;