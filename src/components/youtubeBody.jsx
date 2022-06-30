import React from 'react';
import Header from './header';
import '../styles/youtubeBody.scss';
import Contents from './contents';
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
// dependency injection(youtube.js파일의 클래스로부터 인스턴스만 주입)
const YoutubeBody = ({ youtube }) => {
  const [items, setItems] = useState([]);
  const [inlineVideoId, setInlineVideoId] = useState('');

  const searchPage = useCallback(
    query => {
      youtube
        .search(query) //
        .then(videos => {
          if (query === '') {
            setItems(videos);
            setInlineVideoId('');
          } else setItems(videos);
        });
    },
    [youtube],
  );

  // 박스 눌렀을 때 영상이 나오면서 옆으로 이동하는 역할
  const clickPage = page => {
    setInlineVideoId(page);
  };
  // 초기화면 mostPopular 22개의 유튜브 영상 자료를 가져오는 역할
  useEffect(() => {
    const fetch = async () => {
      const startItems = await youtube.mostPopular();
      setItems(startItems);
    };
    fetch();
  }, [youtube]);

  return (
    <div className="main-body">
      <Header setInlineVideoId={setInlineVideoId} searchPage={searchPage} />
      <Contents
        items={items}
        clickPage={clickPage}
        setInlineVideoId={setInlineVideoId}
        inlineVideoId={inlineVideoId}
        display={inlineVideoId ? 'list' : 'grid'}
      />
    </div>
  );
};

YoutubeBody.propTypes = {
  youtube: PropTypes.object,
};

export default YoutubeBody;
