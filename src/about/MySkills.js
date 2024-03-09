import technologyIcons from '../img/technologyIcons.png';

const MySkills = () => {
    return (
        <>
            <h1 className='text-center pt-5' id='mySkills'>My Skills</h1>
            <p>My frontend skills include: HTML, CSS, JavaScript, Bootstrap, React.</p>
            <p>Although primarily interested in frontend positions, I have some backend skills as well, including: Node.JS, Express, MongoDB/Mongoose, REST APIs. </p>
            <img src={technologyIcons} style={{ width: '15rem' }} />
        </>
    )
}

export default MySkills;