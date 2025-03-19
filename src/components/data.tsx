import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt, FaCamera   } from "react-icons/fa";
import testimonial2 from "../assets/boy.png"
import Project1Image from "../assets/project1.png"
import Project2Image from "../assets/project2.png"
import Project3Image from "../assets/project3.png"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};


export const service = [
    {
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <MdOutlineWeb/>
    },
    {
        title:"Web Development",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaLaptopCode/>
    },
    {
        title:"Mobile Apps",
        desc:"The most modern and high-quality design made at a professional level.",
        logo: <FaMobileAlt/>
    },
    {
        title:"Game Developer",
        desc:"Creating immersive and engaging digital experiences using modern game engines.",
        logo: <FaCamera/>
    },
]

export const testimonials = [
    {
        name:"Mark Cunanan",
        para:"Emmanuel is a highly talented game developer! He understands requirements well and creates clean, user-friendly games. Great work and highly recommended! ",
        img: testimonial2
    },
    {
        name:"Nico Lara",
        para:"Emmanuel is an excellent game developer! He is skilled, professional, and delivers fast, responsive websites. Highly recommended!",
        img: testimonial2
    },
   
]

export const timeline = [
    {
      icon: workIcon,
      date: '2025 - present',
      title: 'Game Developer',
      subtitle: 'Hoyoverse (Dream Job)',
      desc: 'Game Programming, Engine Optimization, AI Behavior, Multiplayer Systems',
    },
    {
      icon: workIcon,
      date: '2024 - 2025',
      title: 'Lead Game Designer',
      subtitle: 'Riot Games',
      desc: 'Gameplay Balancing, Mechanics Design, Storytelling, UI/UX',
    },
    {
      icon: workIcon,
      date: '2023 - 2024',
      title: 'Software Engineer',
      subtitle: 'Ubisoft',
      desc: 'Backend Systems, Cloud Computing, Game Server Management',
    },
    {
      icon: workIcon,
      date: '2022 - 2023',
      title: 'Intern Game Developer',
      subtitle: 'Capcom',
      desc: 'AI Development, Combat System Programming, Level Design',
    },
    {
      icon: workIcon,
      date: '2021 - 2022',
      title: 'Freelance Game Developer',
      subtitle: 'Self-Employed',
      desc: 'Indie Game Development, Unity & Unreal Engine, 2D & 3D Assets',
    },
    {
      icon: workIcon,
      date: '2020 - 2021',
      title: 'Web Developer',
      subtitle: 'Local Tech Startup',
      desc: 'Frontend & Backend Development, React, Node.js, MySQL',
    },
    {
      icon: workIcon,
      date: '2019 - 2020',
      title: 'Customer Support (Tech Specialist)',
      subtitle: 'Game Studio Support Team',
      desc: 'Game Bug Fixing, Player Experience Analysis, Community Feedback',
    },  
    { icon: starIcon },
  ];

export const projects = [
    {
      title: "Project 1",
      description:
        "Re zero Novel Website",
      techStack: ["Javascript", "Python", "Bootstrap", "Canva"],
      link: "",
      github: '',
      image: Project1Image, // Replace with your project screenshot
    },
    {
      title: "Project 2",
      description:
        "Portfolio  ",
      techStack: ["Javascript", "Python", "Bootstrap", "Canva"],
      link: "",
      github: '',
      image: Project2Image, // Replace with your project screenshot
    },
    {
      title: "Project 3",
      description:
        "Portfolio",
      techStack: ["React.JS", "Tailwind"],
      link: "",
      github: '',
      image: Project3Image, // Replace with your project screenshot
    },
  ];