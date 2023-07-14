import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {
  return(
  <div className="topic-list__item">
    <span>{props.id}</span>
    <span>{props.slug}</span>
    <span>{props.title}</span>
  </div>
  )
}

export default TopicListItem