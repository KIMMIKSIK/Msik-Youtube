import React, { useRef } from 'react';
import '../styles/header.scss';
import PropTypes from 'prop-types';
const Header = ({ setClick, searchPage }) => {
  const inputRef = useRef();
  const handleEnter = () => {
    setClick(false);
    searchPage(inputRef.current.value);
    inputRef.current.value = '';
  };
  const reset = () => {
    handleEnter();
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') handleEnter();
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
      <input ref={inputRef} className="header-input" onKeyPress={onKeyPress} />
      <button>
        <img
          className="search-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8nUPHXjCbrQtwr-Q7RTyr0HRL013DToLfA&usqp=CAU"
          width="34px"
        />
      </button>
    </div>
  );
};
Header.propTypes = {
  setClick: PropTypes.func,
  searchPage: PropTypes.func,
};

export default Header;
