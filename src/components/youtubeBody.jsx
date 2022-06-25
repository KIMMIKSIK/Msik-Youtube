import React from 'react';
import Header from './header';
import '../styles/youtubeBody.scss';
import Contents from './contents';
import client from '../client';
import { useState, useEffect } from 'react';

const YoutubeBody = () => {
  const [items, setItems] = useState([]);
  const [click, setClick] = useState(false);
  const [video, setVideo] = useState('');

  const clickPage = page => {
    console.log(page);
    setVideo(page.description);
    setClick(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await client.get(
        '/videos?part=snippet&chart=mostPopular&maxResults=22&key=AIzaSyC1-jdINrmft24dEi7gCuXUHgXyf_zKWe0',
      );
      const data = response.data;
      console.log(data);
      const items = data.items;
      console.log(items);
      setItems(items);
    };
    fetch();
  }, []);

  return (
    <div className="main-body">
      <Header setClick={setClick} />
      <Contents items={items} clickPage={clickPage} click={click} video={video} />
    </div>
  );
};

export default YoutubeBody;
