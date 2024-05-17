import React from 'react';
import styles from './page.module.scss'

const VideoBackground = () => {
    return (
        <div className={styles['video-container']}>
            <video autoPlay muted loop className={styles["video-background"]}>
                <source src="https://res.cloudinary.com/da7edv0cg/video/upload/v1715884461/portfolio/portfolio-background_tz8rkt.mp4" type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoBackground;
