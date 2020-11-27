import { combineReducers } from "redux";

import loginErrorsReducer from "./login_errors_reducer";
import signupErrorsReducer from "./signup_errors_reducer";
import releaseErrorsReducer from "./release_errors_reducer";
import trackErrorsReducer from "./track_errors_reducer";

const errorsReducer = combineReducers({
    login: loginErrorsReducer,
    signup: signupErrorsReducer,
    release: releaseErrorsReducer,
    track: trackErrorsReducer
});

export default errorsReducer;