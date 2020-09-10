import React, { Fragment } from "react";
import Card from "../Card/Card.component";
import { connect } from "react-redux";
import Loader from "../Loader/Loader.component";

import "./github-users.tyle.scss";

import {
  selectFilteredGithubProfile,
  selectGithubListFetching,
} from "../redux/github/github-selector";

const GithubUsers = ({ profileData, isProfileFetching }) => {
  return (
    <Fragment>
      <div className="data-container" style={{ marginTop: "2rem" }}>
        {profileData.length > 0 ? (
          profileData.map((user) => <Card user={user} key={user.login} />)
        ) : (
          <div className="no-user-container">
            <img src={"assets/noUser.svg"} alt="" />
          </div>
        )}

        {isProfileFetching && <Loader />}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profileData: selectFilteredGithubProfile(state),
  isProfileFetching: selectGithubListFetching(state),
});

export default connect(mapStateToProps)(GithubUsers);
