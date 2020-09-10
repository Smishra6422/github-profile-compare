import React from "react";
import "./loader.style.scss";

function Loader() {
  return (
    <div className="loader">
      <div className="lds-hourglass"></div>
      <div>
        <p>Pofile is being loding...</p>
      </div>
    </div>
  );
}

export default Loader;
