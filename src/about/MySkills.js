import technologyIcons from '../img/technologyIcons.png';

const MySkills = () => {
    return (
        <>
            <h1 className='h1-title text-center' id='skills'>My Skills</h1>
            <p><strong className='strong-lightblue'>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React, Axios, Cloudinary, Responsive Web Design.</p>
            <p><strong className='strong-lightblue'>Backend:</strong> Node.JS, Express, MongoDB/Mongoose (NoSQL), Passport, Session. </p>
            <p><strong className='strong-lightblue'>General:</strong> REST API, Version Control (Git/Github), Proactive Learner, Strong Communicator, Witty One-Liners.</p>

            <img
                src={technologyIcons}
                style={{ width: '20rem' }}
                alt='frontend and backend technology icons learned'
            />
        </>
    )
}

export default MySkills;