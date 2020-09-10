import { githubTypes } from "./github-types";

const INITIAL_STATE = {
  profilList: [],
  isFetchingProfile: false,
  isProfileError: false,
  isProfileAdded: false,
};

const githubReucer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case githubTypes.FETCH_ADD_GITHUB_LIST_START:
      return {
        ...state,
        isFetchingProfile: true,
        isProfileError: false,
        isProfileAdded: false,
      };

    case githubTypes.FETCH_ADD_GITHUB_LIST_SUCCESS:
      return {
        ...state,
        profilList: state.profilList.concat(action.payload),
        isFetchingProfile: false,
        isProfileError: false,
        isProfileAdded: true,
      };

    case githubTypes.FETCH_ADD_GITHUB_LIST_FAILURE:
      return {
        ...state,
        isFetchingProfile: false,
        isProfileAdded: false,
        isProfileError: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default githubReucer;
