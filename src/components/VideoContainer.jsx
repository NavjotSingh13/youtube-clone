import React, { useState, useEffect } from 'react';
import { YOUTUBE_API_key } from './utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(YOUTUBE_API_key)
      .then(response => response.json())
      .then(data => {
        setVideos(data.items);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="p-12">
      <h1>YouTube Videos</h1>
      <ul className="flex">
        {videos.map(video => (
          <li className="red" key={video.id.videoId}>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <h3 className="text-orange-200">{video.snippet.title}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoContainer;
