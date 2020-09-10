import React, { useState, useEffect } from "react";
import "./search.style.scss";
import { SearchOutlined } from "@ant-design/icons";
import { message } from "antd";

import { connect } from "react-redux";

import { fetchAddGithubListStart } from "../redux/github/github-action";
import {
  selectFilteredGithubProfile,
  selectGithubListError,
  selectIsGithubProfileAdded,
} from "../redux/github/github-selector";

function SearchBar({
  addGithubProfile,
  profileData,
  isProfileError,
  isProfileAdded,
}) {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    if (isProfileError.error) {
      message.error(`There is no user with ${userName}`);
    }
    if (isProfileAdded === true) {
      displaySuceess(userName);
      setUserName("");
    }
  }, [isProfileError, isProfileAdded]);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const displayError = (userName) => {
    message.error(`${userName} already exists!`);
  };

  const displaySuceess = (userName) => {
    message.success(`${userName} added successfully!`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isUserExist = profileData.find(
      (user) => user.login.toLowerCase() === userName.toLocaleLowerCase()
    );
    if (isUserExist) {
      displayError(userName);
    } else {
      addGithubProfile(userName);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Enter Username..."
          onChange={handleChange}
          value={userName}
        />
        <button type="submit">
          <SearchOutlined />
        </button>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  profileData: selectFilteredGithubProfile(state),
  isProfileError: selectGithubListError(state),
  isProfileAdded: selectIsGithubProfileAdded(state),
});

const mapDispachToProps = (dispatch) => ({
  addGithubProfile: (userName) => dispatch(fetchAddGithubListStart(userName)),
});

export default connect(mapStateToProps, mapDispachToProps)(SearchBar);
