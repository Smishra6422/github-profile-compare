import { createSelector } from "reselect";

const selectGithub = (state) => state.githubLists;

export const selectGithubProfileList = createSelector(
  [selectGithub],
  (github) => github.profilList
);

export const selectFilteredGithubProfile = createSelector(
  [selectGithubProfileList],
  (githubProfiles) => {
    return githubProfiles.sort((a, b) => b.public_repos - a.public_repos);
  }
);

export const selectGithubListFetching = createSelector(
  [selectGithub],
  (github) => github.isFetchingProfile
);

export const selectGithubListError = createSelector(
  [selectGithub],
  (github) => github.isProfileError
);

export const selectIsGithubProfileAdded = createSelector(
  [selectGithub],
  (github) => github.isProfileAdded
);
