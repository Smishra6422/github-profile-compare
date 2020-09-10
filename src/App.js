import React, { Fragment } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchAddGithubListStart } from "./components/redux/github/github-action";
import { createStructuredSelector } from "reselect";
import { selectFilteredGithubProfile } from "./components/redux/github/github-selector";
import AppHeader from "./components/Header/Header.component";
import SearchBar from "./components/SearchBar/SearchBar.component";

function App({ profileData, addGithubProfile }) {
  console.log(profileData);
  return (
    <div className="App">
      <Fragment>
        <AppHeader />
        <SearchBar />
      </Fragment>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  profileData: selectFilteredGithubProfile,
});

const mapDispachToProps = (dispatch) => ({
  addGithubProfile: (userName) => dispatch(fetchAddGithubListStart(userName)),
});

export default connect(mapStateToProps, mapDispachToProps)(App);
