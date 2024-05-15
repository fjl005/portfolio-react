import technologyIcons from '../../../img/technologyIcons.png';

const AppContent = () => {
    return (
        <>
            <p><strong className='strong-lightblue'>Frontend:</strong> HTML, CSS, JavaScript, Bootstrap, React, Responsive Web Design, Cloudinary.</p>
            <p><strong className='strong-lightblue'>Backend:</strong> Node.JS, Express, MongoDB (NoSQL), Passport, Session. </p>
            <p><strong className='strong-lightblue'>General:</strong> REST API, Version Control (Git/Github), Witty One-Liners.</p>

            <img
                src={technologyIcons}
                style={{ width: '20rem' }}
                alt='frontend and backend technology icons learned'
            />
        </>
    )
}

export default AppContent;