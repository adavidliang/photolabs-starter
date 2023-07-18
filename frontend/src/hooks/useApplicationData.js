import { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
export const ADD_FAVOURITE = 'ADD_FAVOURIT';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export default function useApplicationData(props) {



  const reducer = ((state,action) => {
    if (action.type === ADD_FAVOURITE) {
      return [...state, action.id]
    } else if (action.type === REMOVE_FAVOURITE) {

        const newFav = [];
        for (let id of state) {
          if (id !== action.id) {
            newFav.push(id)
          }
        }
       return newFav;

      }

       return [...state];
    });
  

  const [favPhotos, dispatch] = useReducer(reducer, []);


  // const [favPhotos, setFavPhotos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoDetail, setPhotoDetail] = useState({});
  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleXClick = () => { 
    setIsModalOpen(false)
  };

  useEffect(() => {
    axios.get('/api/topics')
      .then(res => {
        setTopics([...res.data])
      }).catch(e => {
        console.log("error :" (e));
      }
      )

  },[])

  useEffect(() => {
    axios.get('/api/photos')
      .then(res => {
        setPhotos([...res.data])
      }).catch(e => {
        console.log("error :" (e));
      }
      )

  },[])


  const  fetchPhotosByTopic = (topicID) => {
    axios.get(`/api/topics/photos/${topicID}`)
      .then(res => {
        setPhotos([...res.data])
      }).catch(e => {
        console.log("error :" (e));
      }
      )
  }


  return (
      {
        favPhotos,
        dispatch,
        isModalOpen,
        setIsModalOpen,
        photoDetail,
        setPhotoDetail,
        handleXClick,
        topics,
        photos,
        fetchPhotosByTopic
      }
    
)
  }








  // import { useReducer, useEffect } from 'react';
  // import axios from 'axios';
  // export const ADD_FAVOURITE = 'ADD_FAVOURIT';
  // export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
  // export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
  // export const SET_PHOTO_DETAIL = 'SET_PHOTO_DETAIL';
  // export const SET_TOPICS = 'SET_TOPICS';
  // export const SET_PHOTOS = 'SET_PHOTOS';
  
  
  // export default function useApplicationData(props) {
  
  
  //   const reducer = ((state,action) => {
  
      
  //     if (action.type === ADD_FAVOURITE) {
  //       return [{...state, favPhotos: [...state.favPhotos, action.id]}]
  //     } else if (action.type === REMOVE_FAVOURITE) {
  //         const newFav = [];
  //         for (let id of state) {
  //           if (id !== action.id) {
  //             newFav.push(id)
  //           }
  //         }
  //        return newFav;
  //       }
  
  //       if(action.type === SET_MODAL_OPEN) {
  //         return [{...state, isModalOpen: action.open}]
  //       }
  
  //       if(action.type === SET_PHOTO_DETAIL) {
  //         return [{...state, photosDetail: action.photosDetail}]
  //       }
  
  //       if(action.type === SET_TOPICS) {
  //         return [{...state, topics: action.topics}]
  //       }
  
  //       if(action.type === SET_PHOTOS) {
  //         return [{...state, photos: action.photos}]
  //       }
  
  //        return [...state];
  //     });
  
  //   const [state, dispatch] = useReducer(reducer, {isModalOpen: false, photosDetail:[], topics: [], favPhotos:[], photos:[]});
  
  //   const handleXClick = () => { 
  //     dispatch({type: SET_MODAL_OPEN, open: true})
  //   };
  
  //   useEffect(() => {
  //     axios.get('/api/topics')
  //       .then(res => {
  //         dispatch({type: SET_TOPICS, topics: [...res.data]})
  //       }).catch(e => {
  //         console.log("error :" ,e);
  //       }
  //       )
  
  //   },[])
  
  //   useEffect(() => { 
  //     axios.get('/api/photos')
  //       .then(res => {
  //         dispatch({type: SET_PHOTOS, photos: [...res.data]})
  //       }).catch(e => {
  //         console.log("error :" ,e);
  //       }
  //       )
  
  //   },[])
  
  
  //   const  fetchPhotosByTopic = (topicID) => {
  //     axios.get(`/api/topics/photos/${topicID}`)
  //       .then(res => {
  //         dispatch({type: SET_PHOTOS, photos: [...res.data]})
  //       }).catch(e => {
  //         console.log("error :" ,e);
  //       }
  //       )
  //   }
  
  
  //   return (
  //       {
  //         favPhotos: state.favPhotos || [],
  //         dispatch,
  //         isModalOpen:state.isModalOpen,
  //         photoDetail: state.photoDetail,
  //         handleXClick,
  //         topics: state.topics,
  //         photos: state.photos,
  //         fetchPhotosByTopic
  //       }
      
  // )
  //   }