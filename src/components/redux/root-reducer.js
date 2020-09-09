import { combineReducers } from "redux";

import githubReducer from "./github/github-reducer";

const rootReducer = combineReducers({
  githubLists: githubReducer,
});

export default rootReducer;
