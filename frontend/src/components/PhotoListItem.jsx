import React, { useState } from 'react'
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return (
  <div className='photo-list__item' >
    <PhotoFavButton  setFavPhotos={props.setFavPhotos} id={props.id}/>
    <img src={props.imageSource} className='photo-list__image'/>
    <div className='photo-list__user-details'>
    <img src={props.profile} className='photo-list__user-profile'/>
    <p className='photo-list__user-info'>{props.username}</p>
    </div>
      <div className="photo-list__user-location">
    <h3>{props.location.city}, {props.location.country}</h3>
      </div>
  </div>
    );
}


export default PhotoListItem