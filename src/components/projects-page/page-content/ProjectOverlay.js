import React from 'react';
import { Button } from 'reactstrap';

const ProjectOverlay = () => {
    return (
        <div style={styles.overlay}>
            <div style={styles.topSection}>
                <h2 style={styles.text}>A MERN-stack e-commerce shop modeled after my Etsy Shop.</h2>
                <Button style={styles.button}>Learn More</Button>
            </div>
            <div style={styles.bottomSection}>
                <Button className='bg-primary btn-outline-primary' style={styles.button}>View Live</Button>
                <Button style={styles.button}>Frontend Code</Button>
                <Button style={styles.button}>Backend Code</Button>
            </div>
        </div>
    );
};

const styles = {
    overlay: {
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '1rem',
        padding: '1rem',
    },
    topSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '1rem',
    },
    bottomSection: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '400px',
        marginTop: '2rem',
    },
    text: {
        color: 'white',
        fontSize: '1.5rem',
        textAlign: 'center',
        marginBottom: '1rem',
    },
    button: {
        width: 'auto',
        color: 'white',
        margin: '0.5rem 0',
    },
};

export default ProjectOverlay;
