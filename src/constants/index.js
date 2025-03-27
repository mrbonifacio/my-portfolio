import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have a degree in Systems Analysis and Development from FATEC Franca, with experience in SQL, NoSQL (MongoDB), TypeScript, JavaScript, React, Next.js, Node.js, Nest.js, Figma, Git, and TailwindCSS. Since childhood, I've been passionate about how computers work and how programming solves problems. This led me to a career in web development and Python (RPA) automation. I enjoy continuous learning, collaborating with teams, and solving complex problems to deliver high-quality solutions. Outside of coding, I stay active, explore new technologies, and contribute to open-source projects.`;

export const ABOUT_TEXT = `My name is Vinícius, I am 21 years old, and I am from Franca, SP, Brazil. I am a full stack developer with solid experience in both front-end and back-end development. I specialize in creating scalable and efficient web applications, as well as optimizing processes through automation. I am always seeking new knowledge and strive to deepen my expertise in the languages and technologies I work with. I continuously challenge myself to learn and stay updated, delivering high-quality solutions that positively impact businesses.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Cooperative of Credit Sicoob 3 Colinas",
    description: `As a Full Stack Developer at Sicoob 3 Colinas, I develop internal dashboard analysis apps and automate processes using Python for RPA. I work with TypeScript, React.js, Nest.js, and Node.js, integrating SQL Server for databases and using TailwindCSS for UI design. I also manage version control with Git.`,
    technologies: ["TypeScript", "SQL Server", "Node", "TailwindCSS", "Git", "Python"],
  },
  {
    year: "March – December 2023",
    role: "Intern as Purchasing Assistant",
    company: "Cooperative of Credit Sicoob 3 Colinas",
    description: `As an intern at Sicoob 3 Colinas, I contributed to procurement and internal maintenance, managing inventory, purchasing, and material distribution. I also performed preventive maintenance, including security camera replacement, and used internal systems and Excel to streamline processes.`,
    technologies: ["Word", "Excel", "SisBr", "Building maintenance"],
  },
  {
    year: "2022 - 2023",
    role: "IT Support",
    company: "University Unesp Franca SP",
    description: `As an IT Support Intern, I assisted employees, maintained and installed hardware in IBM-PC type CPUs, and assigned IP addresses to ensure system performance and network connectivity.`,
    technologies: ["Help Desk", "DHCP", "IBM-PC", "Windows", "Linux"],
  },
];

export const PROJECTS = [
  {
    title: "TCC - Game Project",
    image: project1,
    description:
      "I developed a game designed to focus on sound-based interaction, primarily targeting visually impaired gamers. The core concept involves assigning an initial task communicated verbally, with the rest of the gameplay relying entirely on audio cues, and user authentication.",
    technologies: ["GDScript", "FirebaseDB"],
  },
  {
    title: "Task Management App - In.Orbit",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Node", "SQLite"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, experience and contact information.",
    technologies: ["JavaScript", "TailwindCSS", "React", "FramerMotion"],
  },
  {
    title: "Confidential Document Manager - ManageDocs",
    image: project4,
    description:
      "It is a website where an internal system was developed to store confidential files, allowing users to edit, manage, share them, and set deadline alerts.",
    technologies: ["React", "TypeScript", "TailwindCSS", "PostgreSQL", "Node"],
  },
  {
    title: "Flights",
    image: project5,
    description:
      "It is an app where users can define a departure flight and view results based on filters and schedules, ensuring a tailored search experience.",
    technologies: ["React", "TypeScript", "TailwindCSS", "SkyScrapperAPI"],
  },
];

export const CONTACT = {
  phoneNo: "+55 16 98847-7530",
  email: "mrbonifaciobr@gmail.com",
};
