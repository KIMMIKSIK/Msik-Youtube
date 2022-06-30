import React from 'react';
import PropTypes from 'prop-types';
// import ContentItem from './contentItem';

const VideoDetail = ({ items, inlineVideoId, clickPage }) => {
  return (
    <article>
      <div className="video-content">
        <iframe
          id="ytplayer"
          title="youtube video player"
          type="text/html"
          src={`https://www.youtube.com/embed/${inlineVideoId.id}`}
          frameBorder="0"
          allowFullScreen="allowfullscreen"
        />
      </div>
      <h1>{inlineVideoId.snippet.title}</h1>
      <h2>{inlineVideoId.snippet.channelTitle}</h2>
      <pre className="description">{inlineVideoId.snippet.description}</pre>
    </article>
  );
};

VideoDetail.propTypes = {
  inlineVideoId: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  items: PropTypes.array,
  clickPage: PropTypes.func,
};

export default VideoDetail;
