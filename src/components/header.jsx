import React from 'react';
import '../styles/header.scss';
import PropTypes from 'prop-types';
const Header = ({ setClick }) => {
  const reset = () => {
    setClick(false);
  };
  return (
    <div className="header-div">
      <img
        className="youtube-header-logo"
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/16/0bf38986-d90d-46fd-9736-325a68a750b4.jpg"
        alt="youtube"
        width="140"
        onClick={reset}
      />
      <input className="header-input"></input>
      <img
        className="search-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8nUPHXjCbrQtwr-Q7RTyr0HRL013DToLfA&usqp=CAU"
        width="34px"
        onClick={reset}
      />
    </div>
  );
};
Header.propTypes = {
  setClick: PropTypes.func,
};

export default Header;
