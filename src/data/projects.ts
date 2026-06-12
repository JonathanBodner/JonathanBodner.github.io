export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: 'Voxogram Volumetric Display',
    description:
      'Fourth-year capstone project, built with a team of four. We designed and built a volumetric display: a rapidly rotating screen that renders true 3D content viewable from any angle. Full details are in the project poster.',
    image: '/images/Voxogram_two_pics.jpg',
    tags: ['Embedded', 'Hardware', 'Capstone'],
    links: [
      { label: 'Project Abstract', url: 'https://uwaterloo.ca/capstone-design/project-abstracts/2024-capstone-design-projects/2024-electrical-computer-engineering-capstone-designs#35' },
      { label: 'Poster (PDF)', url: '/Voxogram_poster.pdf' },
    ],
  },
  {
    title: 'Algorithm Visualizer',
    description:
      'Interactive desktop tool built with Java and Processing that animates sorting algorithms step by step, making it easy to compare how different algorithms behave on the same data.',
    image: '/images/Alg_vis.png',
    tags: ['Java', 'Processing', 'Algorithms'],
    links: [{ label: 'GitHub', url: 'https://github.com/JonathanBodner/AlgorithmVisualizer' }],
  },
  {
    title: 'Rock Paper Scissors',
    description:
      'A responsive browser game built with HTML, CSS, JavaScript, and Bootstrap — one of my first fully deployed web projects, hosted on Netlify.',
    image: '/images/Rock_paper_scissors.png',
    tags: ['JavaScript', 'Bootstrap', 'Web'],
    links: [
      { label: 'Play it', url: 'https://rockpaperscissorsjonathan.netlify.app' },
      { label: 'GitHub', url: 'https://github.com/JonathanBodner/RockPaperScissors' },
    ],
  },
];

export interface Role {
  title: string;
  company: string;
  period: string;
  description: string;
  current?: boolean;
}

export const experience: Role[] = [
  {
    title: 'FPGA and Software Developer',
    company: 'Extentcom',
    period: '2024 – Present',
    description:
      'Building cutting-edge wireless systems for industrial, government, and defense customers — proprietary waveforms and protocols that go well beyond what standard Wi-Fi or cellular can offer. Work spans embedded C on custom ARM hardware and FPGA development.',
    current: true,
  },
  {
    title: 'Software Developer',
    company: 'PointClickCare',
    period: 'Co-op · Jan – Apr 2023',
    description:
      'Part of a team working on patient scheduling and medication/pharmacy tracking. Led a React rewrite of an internal simulation tool and enhanced Java backend services to improve data accuracy.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Empire Life',
    period: 'Co-op · Jan – Apr 2022',
    description:
      'Worked on auth and user management: implemented tenant-wide MFA (biometric + SMS) and modernized the authentication pipeline using Auth0. Also upgraded a Dockerized React/Redux/Django internal management app.',
  },
  {
    title: 'Software Developer & IT Technician',
    company: 'Terrestrial Energy',
    period: 'Co-op · 2020',
    description:
      'Developed Windchill workflows in Java to automate PLM processes — improving data accuracy in SQL and cutting time spent on manual tasks. Also supported CAD and document version control.',
  },
];

export const skillGroups: { name: string; skills: string[] }[] = [
  {
    name: 'Languages',
    skills: ['C / C++', 'Python', 'Java', 'JavaScript / TypeScript', 'VHDL / Verilog', 'SQL'],
  },
  {
    name: 'Embedded & FPGA',
    skills: ['FPGA development', 'RTL design (VHDL / Verilog)', 'Firmware', 'Microcontrollers', 'Real-time operating systems', 'Circuit design', 'IoT', 'Computer architecture'],
  },
  {
    name: 'Software & Web',
    skills: ['Full-stack development', 'HTML / CSS', 'Distributed systems', 'Databases', 'Machine learning', 'Compilers'],
  },
  {
    name: 'Tools',
    skills: ['Git / GitHub', 'Linux', 'Networking', 'Performance analysis'],
  },
];
