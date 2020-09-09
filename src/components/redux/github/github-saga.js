import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

import { githubTypes } from "./github-types";

import {
  fetchAddGithubListSuccess,
  fetchGithubListFailure,
} from "./github-action";

export function* fetchAddGithubProfileAsync({ payload }) {
  try {
    yield console.log(payload);
    //   const fetchResult = yield call(axios.post, "/api/addphonebook", otherProps);

    yield put(fetchAddGithubListSuccess());
  } catch (error) {
    yield put(fetchGithubListFailure(error));
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
