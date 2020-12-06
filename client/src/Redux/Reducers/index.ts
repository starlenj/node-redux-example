import { combineReducers } from "redux";
import { UserReducer } from "./User";

const rootReducer = combineReducers({
    userReducer: UserReducer
})
export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };