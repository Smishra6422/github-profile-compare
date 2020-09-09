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
    yield console.log(payload);
    const fetchResult = yield call(axios.get, `${GITHUB_API}${payload}`);
    console.log(fetchResult);
    yield put(fetchAddGithubListSuccess(fetchResult.data));
  } catch (error) {
    // console.log(error.response);
    yield put(fetchGithubListFailure({ error: error.response }));
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
