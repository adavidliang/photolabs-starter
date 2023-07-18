import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'
import TopicList from '../components/TopicList';

const TopNavigation = (props) => {


  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList 
      topics={props.topics}
      fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
      <div onClick={props.onViewFavPhotos}>
      <FavBadge isFavPhotoExist={props.favPhotos.length} />
      </div>
    </div>
  )
}

export default TopNavigation;