import { Row, Col } from 'reactstrap';
import { introData } from './identityData';
import styles from '../identity.module.scss';

const AppContent = () => {
    return (
        <Row>
            {introData.map((data, index) => (
                <Col
                    key={index}
                    md='4'
                    className='text-center'
                >
                    <img
                        src={data.img.imgSrc}
                        className={styles['identity-image']}
                        alt={data.img.id}
                    />
                    <div className='d-flex flex-column justify-content-between'>
                        <h2 className={styles['identity-title']}>{data.title}</h2>
                        <p>{data.p}</p>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default AppContent;