import React from "react";
import KeyboardIcon from "@material-ui/icons/Keyboard";
import TouchAppIcon from "@material-ui/icons/TouchApp";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <a className="navbar-brand" href="/">
        Type-it <KeyboardIcon />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      ></div>
    </nav>
  );
}
