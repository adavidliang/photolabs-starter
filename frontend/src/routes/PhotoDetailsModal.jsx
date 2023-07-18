import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';


export const PhotoDetailsModal = (props) => {

  const isFav = props.favPhotos?.includes(props.photoDetail.id);

  let photo = props.photos.find((photo) => photo.id == props.photoDetail.id)
  const { similar_photos } = photo;

  console.log("photo have ", photo)
  let arrSimilar = Object.values(similar_photos);

  return (
    <div className='photo-details-modal'>
      <button onClick={props.handleXClick} className='photo-details-modal--close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className='photo-details-modal__images' >
        <div>
          <PhotoFavButton dispatch={props.dispatch} isFav={isFav} id={props.photoDetail.id} />
          <img className="photo-details-modal__image" src={props.photoDetail.urls.full} />
          <div className='photo-list__user-details'>
            <img src={props.photoDetail.user.profile} className='photo-list__user-profile' />
            <div>
              <p className='photo-list__user-info'>{props.photoDetail.user.username}</p>
              <h3 className="photo-list__user-location">{props.photoDetail.location.city}, {props.photoDetail.location.country}</h3>
            </div>
          </div>
        </div>
        <PhotoList
          setIsModalOpen={props.setIsModalOpen}
          photos={arrSimilar}
          dispatch={props.dispatch}
          favPhotos={props.favPhotos}
          setPhotoDetail={props.setPhotoDetail}
          isModalOpen={props.isModalOpen}
        />
      </div>
    </div>
  )
}


export default PhotoDetailsModal;