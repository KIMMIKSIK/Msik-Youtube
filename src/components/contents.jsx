import React from 'react';
import '../styles/contentsBody.scss';
import ContentItem from './contentItem';
import PropTypes from 'prop-types';

const Contents = ({ items, click, clickPage, video }) => {
  return (
    <div className="contents-body">
      {click ? (
        <section>
          <div className="video-content">
            <video
              src="blob:https://www.youtube.com/8bdee862-462f-47cb-b39d-35aed6d634f7"
              controls
            />
            <div>{video}</div>
          </div>
          <ul>
            {items.map(contents => (
              <ContentItem items={contents.snippet} key={contents.id} clickPage={clickPage} />
            ))}
          </ul>
        </section>
      ) : (
        <ul>
          {items.map(contents => (
            <ContentItem items={contents.snippet} key={contents.id} clickPage={clickPage} />
          ))}
        </ul>
      )}
    </div>
  );
};

Contents.propTypes = {
  items: PropTypes.array,
  clickPage: PropTypes.func,
  click: PropTypes.bool,
  video: PropTypes.string,
};

export default Contents;
