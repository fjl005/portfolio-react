import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { timelineData } from './app-content/timelineData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = () => {
    return (
        <VerticalTimeline>
            {timelineData.map((data) => (
                <VerticalTimelineElement
                    key={data.index}
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date={data.date}
                    icon={<FontAwesomeIcon icon={data.icon} />}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title h2-timeline">{data.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{data.subtitle}</h4>
                    <p>
                        {data.p.map((pData, idx) => (
                            <span key={idx}>
                                {pData.link ? (
                                    <a
                                        href={pData.link}
                                        target={`${pData.internalLink ? '' : '_blank'}`}
                                        rel={`${pData.internalLink ? '' : 'noreferrer'}`}
                                        className='anchor-lightblue'
                                    >
                                        {pData.text}
                                    </a>
                                ) : pData.text}
                            </span>
                        ))}
                    </p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Timeline