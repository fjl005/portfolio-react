import fetsyImage from '../img/fetsyImage.png';
import boredgamesgaloreImage from '../img/boredgamesgaloreImage.png';

export const projectsData = [
    {
        title: 'Fetsy Shop Online',
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
                text: ') to optimize operations. Employing Passport for secure session management and Cloudinary for image assets, I developed intuitive React interfaces and managed sensitive data flow with MongoDB. The administrator can oversee orders, manage products, and track billing, while users enjoy features like Cart management, order history, and reviews. Public access is limited to viewing products and the shop.'
            },
        ],
        img: fetsyImage,
        previewLink: 'https://www.fetsyshoponline.com/',
        frontendLink: 'https://github.com/fjl005/ecommerce-frontend',
        backendLink: 'https://github.com/fjl005/ecommerce-backend',
    },
    {
        title: 'Bored Games Galore',
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
                text: ` website. I focused on understanding/employing the Board Game Atlas (BGA) API and integrating server-side data via Fetch API. The public can view user-made posts and create/update/delete posts themselves! The feature to browse games and forums from the BGA API was disbanded in `,
            },
            {
                link: 'https://www.boardgameatlas.com/',
                text: `August 2023 when BGA shut down their site.`,
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
        img: boredgamesgaloreImage,
        previewLink: 'https://boredgamesgalore.onrender.com/',
        frontendLink: 'https://github.com/fjl005/boardgamesite',
        backendLink: 'https://github.com/fjl005/boardgamesite-backend',
    }
];
