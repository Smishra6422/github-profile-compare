import { githubTypes } from "./github-types";

const INITIAL_STATE = {
  profilList: ["dsdsd"],
  isFetchingProfile: false,
  isProfileError: false,
};

const githubReucer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case githubTypes.FETCH_ADD_GITHUB_LIST_START:
      return {
        ...state,
        isFetchingProfile: true,
        isProfileError: false,
      };

    case githubTypes.FETCH_ADD_GITHUB_LIST_SUCCESS:
      return {
        ...state,
        profilList: state.profilList.concat(action.payload),
        isFetchingProfile: false,
        isProfileError: false,
      };

    case githubTypes.FETCH_ADD_GITHUB_LIST_FAILURE:
      return {
        ...state,
        isFetchingProfile: false,
        isProfileError: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default githubReucer;
