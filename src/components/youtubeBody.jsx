import React from 'react';
import Header from './header';
import '../styles/youtubeBody.scss';
import Contents from './contents';
import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
// dependency injection
const YoutubeBody = ({ youtube }) => {
  const [items, setItems] = useState([]);
  console.log(setItems);
  const [click, setClick] = useState(false);
  const [video, setVideo] = useState('');
  const searchPage = query => {
    youtube
      .search(query) //
      .then(videos => setItems(videos));
  };
  // 박스 눌렀을 때 영상이 나오면서 옆으로 이동하는 역할
  const clickPage = page => {
    console.log(page);
    setVideo(page.description);
    setClick(true);
  };

  useEffect(() => {
    setItems(youtube.mostPopular());
  }, []);

  return (
    <div className="main-body">
      <Header setClick={setClick} searchPage={searchPage} />
      <Contents items={items} clickPage={clickPage} click={click} video={video} />
    </div>
  );
};

YoutubeBody.propTypes = {
  youtube: propTypes.object,
};

export default YoutubeBody;
