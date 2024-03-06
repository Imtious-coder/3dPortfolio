import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];