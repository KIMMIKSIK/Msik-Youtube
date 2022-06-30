import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import Youtube from './service/youtube';

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_KEY);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App youtube={youtube} />);
