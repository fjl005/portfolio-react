import React from 'react';

const VideoBackground = () => {
    return (
        <div className="video-container">
            <video autoPlay muted loop id="video-background">
                <source src="https://res.cloudinary.com/da7edv0cg/video/upload/v1715884461/portfolio/portfolio-background_tz8rkt.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
