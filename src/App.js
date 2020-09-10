import React, { Fragment } from "react";
import "./App.css";
import AppHeader from "./components/Header/Header.component";
import SearchBar from "./components/SearchBar/SearchBar.component";
import GithubUsers from "./components/GihubUsers/GithubUsers.component";

function App() {
  return (
    <div className="App">
      <Fragment>
        <AppHeader />
        <SearchBar />
        <GithubUsers />
      </Fragment>
    </div>
  );
}

export default App;
