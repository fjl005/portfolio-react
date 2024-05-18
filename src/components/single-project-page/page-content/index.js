import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom';
import { allProjects } from '../project-info/allProjects';
import { projectInfo } from '../project-info/fetsy';

const PageContent = () => {
    const { projectName } = useParams();
    const [projectExists, setProjectExists] = useState(true);

    useEffect(() => {
        if (!allProjects[projectName]) {
            setProjectExists(false);
        }
    }, []);

    return (
        <Container>
            {projectExists ? (
                <>
                    <Row>
                        <Col>
                            <h1>{projectInfo.intro.title}</h1>
                            <img
                                src={projectInfo.intro.img}
                                alt={projectInfo.intro.title}
                                style={{ width: '75%' }}
                            />
                            <h2>{projectInfo.intro.subTitle}</h2>
                        </Col>
                    </Row>
                </>
            ) : (
                <Row>
                    <Col>
                        <h1>Project Does Not Exist</h1>
                    </Col>
                </Row>
            )}

        </Container>
    )
}

export default PageContent