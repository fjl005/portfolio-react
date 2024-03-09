import fetsyImage from '../img/fetsyImage.png';
import boredgamesgaloreImage from '../img/boredgamesgaloreImage.png';

export const projectsData = [
    {
        title: 'Fetsy Shop Online',
        description: [
            {
                link: false,
                text: `Inspired to create my own Etsy Shop (`,
            },
            {
                link: 'https://www.etsy.com/shop/DigiWitz',
                text: `DigiWitz`,
            },
            {
                link: false,
                text: ') outside of the Etsy platform, I leveraged MongoDB-Express-React-Node.JS (MERN) stack technologies to ultimately minimize Etsy fees and maximize potential profits.'
            }
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
                text: `I developed a MERN project inspired by the Board Game Geek website, focusing on mastering the Board Game Atlas (BGA) API and integrating server-side data via Fetch API.`,
            },
        ],
        img: boredgamesgaloreImage,
        previewLink: 'https://boredgamesgalore.onrender.com/',
        frontendLink: 'https://github.com/fjl005/boardgamesite',
        backendLink: 'https://github.com/fjl005/boardgamesite-backend',
    }
];
