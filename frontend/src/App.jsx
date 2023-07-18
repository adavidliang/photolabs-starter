import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal'
import useApplicationData from './hooks/useApplicationData';


  // Note: Rendering a single component to build components in isolation
  const App = () => {

    const {
      favPhotos,
      dispatch,
      isModalOpen,
      setIsModalOpen,
      photoDetail,
      setPhotoDetail,
      handleXClick,
      fetchPhotosByTopic,
      topics,
      photos
    } = useApplicationData()
  
  
  return(
    
    <div className="App">
    <HomeRoute
    photos={photos}
    favPhotos={favPhotos}
    dispatch={dispatch}
    isModalOpen={isModalOpen}
    setIsModalOpen={setIsModalOpen}
    setPhotoDetail={setPhotoDetail}
    topics={topics}
    fetchPhotosByTopic={fetchPhotosByTopic}
    />
    {isModalOpen && <PhotoDetailsModal handleXClick={handleXClick} dispatch={dispatch} favPhotos={favPhotos} photoDetail={photoDetail} photos={photos} setIsModalOpen={setIsModalOpen} setPhotoDetail={setPhotoDetail} isModalOpen={isModalOpen}/>}
  </div>
)
  }



export default App