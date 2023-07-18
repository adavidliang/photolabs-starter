import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';


const HomeRoute = (props) =>{
  const {favPhotos, topics, fetchPhotosByTopic, photos, dispatch, setIsModalOpen, setPhotoDetail} = props


return(
  <div className="home-route">
    <TopNavigationBar 
    favPhotos={favPhotos} 
    topics={topics}
    fetchPhotosByTopic={fetchPhotosByTopic}
    />
    <PhotoList
    favPhotos={favPhotos}
    photos={photos}
    dispatch={dispatch}
    isModalOpen={props.isModalOpen}
    setIsModalOpen={setIsModalOpen}
    setPhotoDetail={setPhotoDetail}
    />
  </div>
)
}
export default HomeRoute;