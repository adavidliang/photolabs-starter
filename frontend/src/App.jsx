import React from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import HomeRoute from './routes/HomeRoute';



//  const TopicItem = Array.from( () => {
//   <TopicListItem />})

// Note: Rendering a single component to build components in isolation
const App = () => (



  <div className="App">
    <HomeRoute />

{/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
  </div>
)

export default App