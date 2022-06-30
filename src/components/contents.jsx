import React from 'react';
import '../styles/contentsBody.scss';
import ContentItem from './contentItem';
import PropTypes from 'prop-types';
import VideoDetail from './video_detail';

const Contents = ({ items, clickPage, inlineVideoId, display }) => {
  return (
    <div className="contents-body container">
      {inlineVideoId && (
        <div className="container-first">
          <VideoDetail items={items} clickPage={clickPage} inlineVideoId={inlineVideoId} />
        </div>
      )}
      <ul className="container-second">
        {items.map(contents => {
          return (
            <ContentItem
              items={contents}
              key={contents.id}
              clickPage={clickPage}
              display={display}
            />
          );
        })}
      </ul>
    </div>
  );
};

Contents.propTypes = {
  items: PropTypes.array,
  clickPage: PropTypes.func,
  inlineVideoId: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  display: PropTypes.string,
};

export default Contents;
