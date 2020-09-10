import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import { githubTypes } from "./github-types";

import {
  fetchAddGithubListSuccess,
  fetchGithubListFailure,
} from "./github-action";
import { GITHUB_API } from "./github-api";

export function* fetchAddGithubProfileAsync({ payload }) {
  try {
    const fetchResult = yield call(axios.get, `${GITHUB_API}${payload}`);
    yield put(fetchAddGithubListSuccess(fetchResult.data));
  } catch (error) {
    yield put(fetchGithubListFailure({ error: "Not found" }));
  }
}

export function* fetchAddGithubStart() {
  yield takeLatest(
    githubTypes.FETCH_ADD_GITHUB_LIST_START,
    fetchAddGithubProfileAsync
  );
}

export function* githubSaga() {
  yield all([call(fetchAddGithubStart)]);
}
