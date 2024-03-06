import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";
import Bitcoin from "../assets/icons/bitcoin.svg";
import Commerce from "../assets/icons/commerce.svg";
import Company from "../assets/icons/company.svg";
import Hiring from "../assets/icons/hiring.svg";
import Yoga from "../assets/icons/yoga.svg";
import Bondstein from "../assets/images/bondstein.png";
import Circledi from "../assets/images/circledi.png";
import Intelsense from "../assets/images/intelsense.png";
import ProgrammingHero from "../assets/images/programminghero.png";

export const skills = [
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
   
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "Bondstein©️ Technologies Ltd.",
        icon: Bondstein,
        iconBg: "#ffcc00",
        date: "May 2023 - Dec 2023",
        points: [
            "Managed a user base exceeding 2 thousand users and handled over 23 million data points monthly.",
            "Leveraged Google Maps API to implement a plethora of features, including real-time vehicle tracking, data updates, and comprehensive vehicle reports such as engine performance, speed analytics, driving patterns, user profiles, and more.",
            "Collaborated closely with backend teams to ensure project milestones were met promptly.",
            "Maintained documentation throughout development and used Agile methodology for streamlined and efficient project execution.",
            "Spearheaded the integration of Facial Recognition System in recent project iterations, enhancing system security and functionality.",
            "Mentored junior developers, providing guidance and resources to nurture their skills and maximize their potential.",
            "Proficiently utilized technologies such as JavaScript, React.js, Next.js, TensorFlow, Redux, Tailwind CSS, REST API, Jira, Git, and GitHub to deliver robust and innovative solutions.",
        ],
    },
    {
        title: "Frontend Web Developer",
        company_name: "Intelsense AI Limited",
        icon: Intelsense,
        iconBg: "#00b7ff",
        date: "Nov 2021 - Feb 2022",
        points: [
            "Spearheaded the development and successful launch of IntelSense AI's business websites, establishing a strong online presence from inception.",
            "Seamlessly integrated cutting-edge technologies to enhance user experience and streamline operations.",
            "Thrived in dynamic environments, leveraging creativity and adaptability to overcome challenges and drive success.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Programming Hero",
        icon: ProgrammingHero,
        iconBg: "#5d00c7",
        date: "Feb 2022 - Jul 2022",
        points: [
            "Leveraging my expertise, I've developed captivating and functional online stores tailored to clients' unique needs.",
            "With a keen eye for design and functionality, I've seamlessly integrated custom features and enhancements.",
            "My experience extends to optimizing performance and ensuring a seamless user experience across all devices.",
            "By combining creativity with technical proficiency, I've contributed to the success of numerous e-commerce projects.",
        ],
    },
    {
        title: "Junior Software Engineer",
        company_name: "Circledi",
        icon: Circledi,
        iconBg: "#00ffd5",
        date: "Nov 2020 - Oct 2021",
        points: [
            "Employed a potent blend of JavaScript, Node.js, and React.js to deliver dynamic and engaging user experiences.",
            "Meticulously crafted HTML5 and CSS3 elements to ensure seamless functionality and stunning visual appeal.",
            "Enhanced user interface design with Tailwind CSS, achieving responsive layouts and sleek aesthetics.",
            "Seamlessly integrated RESTful APIs to facilitate smooth communication between front-end and back-end systems.",
            "Leveraged the robust features of Ant Design to elevate UI components and optimize user interaction.",
            "Empowered by Firebase for efficient data storage, secure authentication, and real-time updates.",
            "Employed Git and GitHub for seamless version control and collaborative development, ensuring project integrity and code quality.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: Hiring,
        theme: 'btn-back-red',
        name: 'Hire.io',
        description: 'Courier Agency Website to manage their Employee and Recruiters.',
        link: 'https://hiree-io.netlify.app/',
    },
    {
        iconUrl: Commerce,
        theme: 'btn-back-green',
        name: 'Market',
        description: 'Full Stack next level E-commerce website. 📱',
        link: 'https://market-web.netlify.app/',
    },
    {
        iconUrl: Yoga,
        theme: 'btn-back-blue',
        name: 'Emmi.io',
        description: 'Your Health management website. Fully Responsive and Smooth UI 📱',
        link: 'https://imtious-coder.github.io/Emmi.io/',
    },
    {
        iconUrl: Bitcoin,
        theme: 'btn-back-pink',
        name: 'CFTERS',
        description: 'Simple landing page for managing your all NFT.',
        link: 'https://cfters-io.netlify.app/',
    },
    {
        iconUrl: Company,
        theme: 'btn-back-black',
        name: 'Digi.io',
        description: 'A PSD To HTML5 Website. 100% Responsiveness.',
        link: 'https://imtious-coder.github.io/Digi.io/',
    },
];