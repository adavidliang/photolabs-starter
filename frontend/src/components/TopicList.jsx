import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';
import topics from '../mocks/topics';

const TopicList = (props) => {
  const topic = topics.map((list) => {
    return(
      <TopicListItem
      key={list.id}
      id={list.id}
      slug={list.slug}
      title={list.title}
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