import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom';
import { allProjects } from './project-info/allProjects';
import { projectInfo } from './project-info/fetsy';
import MarkdownContent from './markdown';

const PageContent = () => {
    const { projectName } = useParams();
    const [projectExists, setProjectExists] = useState(true);

    useEffect(() => {
        if (!allProjects[projectName]) {
            setProjectExists(false);
        }
    }, [projectName]);

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
                    <Row>
                        <Col xs='12'>
                            <MarkdownContent projectInfo={projectInfo} />
                        </Col>
                        <Col xs='12'>
                            <h3>Why it Matters</h3>
                        </Col>
                        <Col xs='12'>
                            <h3>Game Plan</h3>
                        </Col>
                        <Col xs='12'>
                            <h3>Backend Setup</h3>
                        </Col>
                        <Col xs='12'>
                            <h3>Frontend Setup</h3>
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