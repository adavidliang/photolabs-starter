import React, { useCallback, useState } from 'react';
import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';
import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../hooks/useApplicationData'


function PhotoFavButton(props) {
const {dispatch, isFav} = props

  const handleClick = () => {
    if (isFav) {
      dispatch({type: REMOVE_FAVOURITE,  id: props.id})
    } else {
      dispatch({type: ADD_FAVOURITE, id: props.id})
  }

  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick} >
      <div className="photo-list__fav-icon-svg">
        { isFav ? <FavBadge /> : <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;