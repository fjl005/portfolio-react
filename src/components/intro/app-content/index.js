import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import { introData, initialHovered } from './introData';

const AppContent = () => {
    const [isHovered, setIsHovered] = useState(initialHovered);

    const handleMouseEnter = (imageId) => {
        setIsHovered(prev => ({
            ...prev,
            [imageId]: true,
        }));
    };

    const handleMouseLeave = (imageId) => {
        setIsHovered(prev => ({
            ...prev,
            [imageId]: false,
        }));
    };

    return (
        <>
            <Row>
                {introData.map((data, index) => (
                    <Col
                        key={index}
                        md='4'
                        className='text-center'
                    >
                        <div
                            onMouseEnter={() => handleMouseEnter(data.img.id)}
                            onMouseLeave={() => handleMouseLeave(data.img.id)}
                        >
                            {isHovered[data.img.id] ? (
                                <img
                                    src={data.img.gifSrc}
                                    className='intro-section-image'
                                    alt={data.img.id}
                                />
                            ) : (
                                <img
                                    src={data.img.imgSrc}
                                    className='intro-section-image'
                                    alt={data.img.id}
                                />
                            )}
                        </div>
                        <div className='d-flex flex-column justify-content-between'>
                            <h2 className='intro-identity-title'>{data.title}</h2>
                            <p>{data.p}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default AppContent;