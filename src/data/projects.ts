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
      'Embedded software and FPGA development for telecommunications systems — writing firmware and digital logic where software meets hardware.',
    current: true,
  },
  {
    title: 'Software Developer',
    company: 'PointClickCare',
    period: 'Co-op',
    description: 'Software development for cloud-based healthcare software solutions.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Empire Life',
    period: 'Co-op',
    description: 'Full-stack development of financial and insurance software.',
  },
  {
    title: 'Software Developer & IT Technician',
    company: 'Terrestrial Energy',
    period: 'Co-op',
    description: 'Software development and IT support in the nuclear energy industry.',
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
