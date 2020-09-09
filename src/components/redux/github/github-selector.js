import { createSelector } from "reselect";

const selectGithub = (state) => state.githubLists;

export const selectGithubProfileList = createSelector(
  [selectGithub],
  (github) => github.profilList
);

export const selectFilteredGithubProfile = createSelector(
  [selectGithubProfileList],
  (githubProfiles) =>
    githubProfiles.sort((a, b) => b.public_repos - a.public_repos)
  // //TODO: Filter according to repo
);

export const selectGithubListFetching = createSelector(
  [selectGithub],
  (github) => github.isFetchingProfile
);

export const selectGithubListError = createSelector(
  [selectGithub],
  (github) => github.isProfileError
);
