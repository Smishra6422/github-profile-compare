import { githubTypes } from "./github-types";

const INITIAL_STATE = {
  profilList: [
    {
      login: "vabhishek-me",
      id: 21182294,
      node_id: "MDQ6VXNlcjIxMTgyMjk0",
      avatar_url: "https://avatars1.githubusercontent.com/u/21182294?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/vabhishek-me",
      html_url: "https://github.com/vabhishek-me",
      followers_url: "https://api.github.com/users/vabhishek-me/followers",
      following_url:
        "https://api.github.com/users/vabhishek-me/following{/other_user}",
      gists_url: "https://api.github.com/users/vabhishek-me/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/vabhishek-me/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/vabhishek-me/subscriptions",
      organizations_url: "https://api.github.com/users/vabhishek-me/orgs",
      repos_url: "https://api.github.com/users/vabhishek-me/repos",
      events_url: "https://api.github.com/users/vabhishek-me/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/vabhishek-me/received_events",
      type: "User",
      site_admin: false,
      name: "abhishek",
      company: null,
      blog: "vabhishek.me",
      location: "Mumbai",
      email: null,
      hireable: true,
      bio:
        "Working on everything that life keeps offering. Dropout. Working at Board Infinity. Building things for myself.",
      twitter_username: null,
      public_repos: 37,
      public_gists: 22,
      followers: 50,
      following: 242,
      created_at: "2016-08-22T20:17:05Z",
      updated_at: "2020-09-07T20:59:30Z",
    },
  ],
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
