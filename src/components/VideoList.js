import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {    
    console.log(videos);
    // return <div>{videos.length}</div>
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>
};
// key={video.id.videoId}
export default VideoList;