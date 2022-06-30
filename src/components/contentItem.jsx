import React from 'react';
import PropTypes from 'prop-types';
const ContentItem = React.memo(function contentItem({ items, clickPage, display }) {
  const { thumbnails, title } = items.snippet;
  return (
    <li
      id={display}
      onClick={() => {
        clickPage(items);
      }}
    >
      <div className="thumbnails">
        <img src={thumbnails.medium.url} alt={'유투브!'} />
        <div>
          <p>{title.substr(0, 30)}</p>
          <p>{items.channelTitle}</p>
        </div>
      </div>
    </li>
  );
});

ContentItem.propTypes = {
  items: PropTypes.object,
  clickPage: PropTypes.func,
  display: PropTypes.string,
};
export default ContentItem;
