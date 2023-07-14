import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import photos from '../mocks/photos';

const PhotoList = (props) => {

  const mappedPhotos = photos.map((photo) => <PhotoListItem
  setFavPhotos={props.setFavPhotos}
    id={photo.id}
    location= {photo.location}
    username={photo.user.username}
    imageSource={photo.urls.regular}
    key={photo.id}
    profile={photo.user.profile}
  />)
  return(
  <ul className="photo-list">
    {mappedPhotos }
  </ul>
  )
}


export default PhotoList