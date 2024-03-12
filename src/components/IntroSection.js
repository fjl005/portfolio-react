import { Col, Container, Row, } from 'reactstrap';
import banner from '../img/banner.png';
import { introData } from '../data/introData';
import { useState } from 'react';

const IntroSection = () => {
    const [isHovered, setIsHovered] = useState({
        [introData[0].img.id]: false,
        [introData[1].img.id]: false,
        [introData[2].img.id]: false,
    });

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
            <div className='d-flex justify-content-center'>
                <img
                    src={banner}
                    className='homepage-banner'
                    id='introSection'
                    alt='home page banner'
                />
            </div>

            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center my-3'>I identify as...</h1>
                    </Col>
                </Row>
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
                                <h3 className='intro-h3-height'>{data.title}</h3>
                                <p>{data.p}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default IntroSection;