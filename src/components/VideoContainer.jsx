import React, { useState, useEffect } from 'react';
import { YOUTUBE_API_key } from './utils/constants';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();

  }, []);  



   const fetchData = async () => {
     const data = await fetch(
       'https://api.publicapis.org/entries'
     );
 
    

     const json = await data.json();
     setVideos (json.items[0]);
     console.log(json);
   };



  


  return (
    <div>
      {videos.map ((dataObj) => {
        return (
          <p>{dataObj.items}</p>
        )
      })}
    </div>
  )
}

export default VideoContainer;