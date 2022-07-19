import React, { useRef } from 'react';
import '../styles/header.scss';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
const Header = function ({ setClick, searchPage, setInlineVideoId }) {
  const inputRef = useRef();
  const handleEnter = e => {
    if (e.target.name === 'logo') {
      searchPage('');
      inputRef.current.value = '';
    } else {
      searchPage(inputRef.current.value);
      inputRef.current.value = '';
    }
  };
  const reset = e => {
    handleEnter(e);
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') handleEnter(e);
  };

  return (
    <div className="header-div">
      <img
        name="logo"
        className="youtube-header-logo"
        src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202106/16/0bf38986-d90d-46fd-9736-325a68a750b4.jpg"
        alt="youtube"
        width="140"
        onClick={reset}
      />
      <input ref={inputRef} className="header-input" onKeyPress={onKeyPress} />
      <button name="button" onClick={reset}>
        <MdSearch className="search-icon" />
      </button>
    </div>
  );
};
Header.propTypes = {
  setClick: PropTypes.func,
  searchPage: PropTypes.func,
  setInlineVideoId: PropTypes.func,
};

export default Header;
