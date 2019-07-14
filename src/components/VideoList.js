import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelectCallByList}) => {
    const renderedList = videos.map( video => {
       return <VideoItem video={video} key={video.id.videoId} onVideoSelectCallByItem={onVideoSelectCallByList} />
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
};

export default VideoList