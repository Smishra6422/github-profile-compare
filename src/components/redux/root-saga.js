import { all, call } from "redux-saga/effects";

import { githubSaga } from "./github/github-saga";

export function* rootSaga() {
  yield all([call(githubSaga)]);
}
