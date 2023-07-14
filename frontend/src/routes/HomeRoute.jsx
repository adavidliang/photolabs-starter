import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import { useState } from 'react'


const HomeRoute = () =>{
  
  const [favPhotos, setFavPhotos] = useState([]);



return(
  <div className="home-route">
    <TopNavigationBar favPhotos={favPhotos} />
    <PhotoList setFavPhotos={setFavPhotos}/>
  </div>
)
}
export default HomeRoute;