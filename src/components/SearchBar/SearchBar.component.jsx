import React, { useState } from "react";
import "./search.style.scss";
import { SearchOutlined } from "@ant-design/icons";

function SearchBar() {
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // // TODO: dispatch addProfile action
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
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

export default SearchBar;
