import technologyIcons from '../img/technologyIcons.png';

const MySkills = () => {
    return (
        <>
            <h1 className='h1-title' id='mySkills'>My Skills</h1>
            <p><strong className='strong-lightblue'>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React, Fetch API, Axios, Cloudinary, Responsive Web Design.</p>
            <p><strong className='strong-lightblue'>Backend:</strong> Node.JS, Express, MongoDB/Mongoose, Passport, Sessions, Postman. </p>
            <p><strong className='strong-lightblue'>General:</strong> REST APIs, Version Control (Git/Github), Proactive Learner, Team Player, Strong Communicator, Fun Attitude, Witty One-Liners.</p>

            <img
                src={technologyIcons}
                style={{ width: '20rem' }}
                alt='frontend and backend technology icons learned'
            />
        </>
    )
}

export default MySkills;