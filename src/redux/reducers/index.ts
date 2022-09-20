import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import reglog from "./reglog";
import login from "./login";
import object_page from "./object_page";

// cabinet
import cabinetStatistics from "./cabinet/cabinetStatistics";
import cabinetObjects from "./cabinet/cabinetObjects";
import cabinetUsers from "./cabinet/cabinetUsers";

export const rootReducer = combineReducers({
	reglog,
	login,
	object_page,
	cabinetStatistics, cabinetObjects, cabinetUsers,
	form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
