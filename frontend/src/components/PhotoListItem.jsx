import React, { useState } from 'react'
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  
  const handleClick = () => {
    console.log("photo",props.photo)
    if (props.isModalOpen === false){
      props.setIsModalOpen(true);
      props.setPhotoDetail(
        props.photo
      )
    } else if (props.isModalOpen === true) {
      props.setPhotoDetail(
        props.photo
      )
    }
  }

const isFav = props.favPhotos.includes(props.photo.id);

// console.log(props.photo)

  return (
    <div className='photo-list__item' >
      <PhotoFavButton dispatch={props.dispatch} favPhotos={props.favPhotos} id={props.photo.id} isFav={isFav} />

      <img src={props.photo.urls.regular} className='photo-list__image' onClick={handleClick} />

      <div className='photo-list__user-details'>
        <img src={props.photo.user.profile}className='photo-list__user-profile' />
        <div>
        <p className='photo-list__user-info'>{props.photo.user.username}</p>
        <h3 className="photo-list__user-location">{props.photo.location.city}, {props.photo.location.country}</h3>
        </div>
      </div>

    </div>
  );
}


export default PhotoListItem