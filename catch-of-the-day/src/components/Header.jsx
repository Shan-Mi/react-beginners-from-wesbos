import React from "react";
import PropTypes from "prop-types"; // to check if the right type of props is passed in, if failed they will see that in console
// or we can use flow / typescript...

const Header = (props) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of"> of </span>
        <span className="the"> the </span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
