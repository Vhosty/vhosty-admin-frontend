import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "./reglog";
import login from "./login";

// cabinet
import cabinetStatistics from "./cabinet/cabinetStatistics";
import cabinetObjects from "./cabinet/cabinetObjects";

export const rootReducer = combineReducers({
	reglog,
	login,
	cabinetStatistics, cabinetObjects,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
