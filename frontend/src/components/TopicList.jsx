import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const { fetchPhotosByTopic } = props
  const topic = props.topics && props.topics.map((list) => {
    return(
      <TopicListItem
      key={list.id}
      id={list.id}
      slug={list.slug}
      title={list.title}
      fetchPhotosByTopic={fetchPhotosByTopic}
      />
    )
  });
  return(
  <div className="top-nav-bar__topic-list">
    {topic}
  </div>
  )
}

export default TopicList