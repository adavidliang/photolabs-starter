import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import { FavBadge } from './FavBadge';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [fav, setFav] = useState('off');

  const handleClick = () => {
    if (fav === "off") {
      setFav("on");
      props.setFavPhotos((prevFavPhotos) => {
        return [...prevFavPhotos, props.id]
      });
    } else {
      setFav("off");
      props.setFavPhotos((prevFavPhotos) => {
        const newFav = [];
        for (let id of prevFavPhotos) {
          if (id !== props.id) {
            newFav.push(id)
          }
        }
       return newFav;
      });
  }

  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick} >
      <div className="photo-list__fav-icon-svg">
        {fav === "off" ? <FavIcon /> : <FavBadge />}
      </div>
    </div>
  );
}

export default PhotoFavButton;