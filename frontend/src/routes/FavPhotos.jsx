import React from 'react';
import '../styles/FavPhotos.scss';
import photos from '../mocks/photos';

const FavPhotos = (props) => {
  const filterPhotos = photos.filter((photo) =>  props.favPhotos === photo.id)
console.log("filter : ", filterPhotos);
  // const mappedPhotos = props.photos.map((photo) => <PhotoListItem
  //   key={photo.id}
  //   photo={photo}
  //   dispatch={props.dispatch}
  //   favPhotos={props.favPhotos}
  //   isModalOpen={props.isModalOpen}
  //   setIsModalOpen={props.setIsModalOpen}
  //   setPhotoDetail={props.setPhotoDetail}
  // />)
  return(
  <ul className="photo-list">
    {/* {mappedPhotos } */}
  </ul>
  )
}

export default FavPhotos;