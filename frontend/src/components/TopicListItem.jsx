import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  const { fetchPhotosByTopic, id, title } = props

  const handleTitleClick = () => {
    fetchPhotosByTopic(id)
  }

  return(
  <div className="topic-list__item">
    <span onClick={handleTitleClick}>{title}</span>
  </div>
  )
}

export default TopicListItem