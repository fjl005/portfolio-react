import fetsyImage from '../img/fetsyImage.png';
import boredgamesgaloreImage from '../img/boredgamesgaloreImage.png';

export const projectsData = [
    {
        title: 'Fetsy Shop Online (MERN Stack)',
        description: [
            {
                link: false,
                text: `With a vision to reduce fees and enhance profits, I utilized a MongoDB-Express-React-Node.JS (MERN) stack inspired by own Etsy shop (`,
            },
            {
                link: 'https://www.etsy.com/shop/DigiWitz',
                text: `DigiWitz`,
            },
            {
                link: false,
                text: ') to optimize operations.'
            },
        ],
        list: [
            `Employed Passport for secure session management and Bcrypt for password hashing`,
            `Developed intuitive React interfaces and handled sensitive data flow via MongoDB`,
            `Incorporated Cloudinary for managing image assets`,
            `Administrator can oversee orders, manage products, and track billing`,
            `Users enjoy features like Cart management, order history, and reviews`,
            `Public access is limited to viewing products and the shop`,
        ],
        img: fetsyImage,
        previewLink: 'https://www.fetsyshoponline.com/',
        frontendLink: 'https://github.com/fjl005/ecommerce-frontend',
        backendLink: 'https://github.com/fjl005/ecommerce-backend',
    },
    {
        title: 'Bored Games Galore (MERN Stack)',
        description: [
            {
                link: false,
                text: `I delved into my passion for board games by developing a MERN project inspired by the `,
            },
            {
                link: 'https://boardgamegeek.com/',
                text: `Board Game Geek`
            },
            {
                link: false,
                text: ` website. But because I used the Board Game Atlas API, two sections of my project are now unavailable `,
            },
            {
                link: 'https://www.boardgameatlas.com/',
                text: `due to their API shutdown in August 2023.`,
            },
            {
                link: false,
                text: ` However, you can see these features in my `
            },
            {
                link: 'https://www.youtube.com/watch?v=7rcgtf09-GE&ab_channel=Nucamp',
                text: `Frontend`
            },
            {
                link: false,
                text: ` and `
            },
            {
                link: 'https://www.youtube.com/watch?v=LIQ2m-LoLks&ab_channel=Nucamp',
                text: `Backend`
            },
            {
                link: false,
                text: ` presentations for my Nucamp Honors Certificate.`
            },
        ],
        list: [
            `Established blog-like interface via React`,
            `Integrated server-side data via Fetch API and Axios`,
            `Handled image data via Cloudinary`,
            `Any user can create, update, delete, and view posts`,
        ],
        img: boredgamesgaloreImage,
        previewLink: 'https://boredgamesgalore.onrender.com/',
        frontendLink: 'https://github.com/fjl005/boardgamesite',
        backendLink: 'https://github.com/fjl005/boardgamesite-backend',
    }
];
