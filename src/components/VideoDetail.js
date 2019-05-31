import React from 'react';

const VideoDetail = ({ video }) => {
    if (video) {
        const videoURL = `https://youtube.com/embed/${video.id.videoId}`
        return (
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title="video-title" src={videoURL} />
                </div>
                <h4 className="ui header"> {video.snippet.title} </h4>
                <p className="ui description">{video.snippet.description}</p>
            </div>
        );
    }

    return null
};

export default VideoDetail;