import React from 'react';
import YoutubeBody from './components/youtubeBody';
import PropTypes from 'prop-types';

function App({ youtube }) {
  return <YoutubeBody youtube={youtube} />;
}

App.propTypes = {
  youtube: PropTypes.object,
};

export default App;
