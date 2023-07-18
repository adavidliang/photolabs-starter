import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  
  const mappedPhotos = props.photos.map((photo) => <PhotoListItem
    key={photo.id}
    photo={photo}
    dispatch={props.dispatch}
    favPhotos={props.favPhotos}
    isModalOpen={props.isModalOpen}
    setIsModalOpen={props.setIsModalOpen}
    setPhotoDetail={props.setPhotoDetail}
  />)
  return(
  <ul className="photo-list">
    {mappedPhotos }
  </ul>
  )
}


export default PhotoList