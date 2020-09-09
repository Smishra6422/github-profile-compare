import { githubTypes } from "./github-types";

export const fetchAddGithubListStart = (userName) => ({
  type: githubTypes.FETCH_ADD_GITHUB_LIST_START,
  payload: userName,
});

export const fetchAddGithubListSuccess = (profileData) => ({
  type: githubTypes.FETCH_ADD_GITHUB_LIST_SUCCESS,
  payload: profileData,
});

export const fetchGithubListFailure = (error) => ({
  type: githubTypes.FETCH_ADD_GITHUB_LIST_FAILURE,
  payload: error,
});
