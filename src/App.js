import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchAddGithubListStart } from "./components/redux/github/github-action";
import { createStructuredSelector } from "reselect";
import { selectFilteredGithubProfile } from "./components/redux/github/github-selector";

function App({ profileData, addGithubProfile }) {
  console.log(profileData);
  return (
    <div className="App">
      <div>Github Profile Compare</div>
      <button onClick={() => addGithubProfile("Smishra6422")}>
        Learn React
      </button>
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
