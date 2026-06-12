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
    title: 'Real-Time Operating System',
    description:
      'A C-based RTOS running on a microcontroller with memory management, inter-task communication, console I/O, and a real-time scheduler.',
    image: '',
    tags: ['C', 'Embedded', 'RTOS', 'Microcontroller'],
    links: [],
  },
  {
    title: 'FPGA Matrix Multiplication',
    description:
      'A systolic-array matrix multiplier written in Verilog and deployed on an FPGA board using Quartus.',
    image: '',
    tags: ['Verilog', 'FPGA', 'Quartus', 'Hardware'],
    links: [],
  },
  {
    title: 'Camera Slider',
    description:
      'Arduino-controlled camera rig using a stepper motor and two servos for motorized pan, slide, and tilt.',
    image: '',
    tags: ['Arduino', 'C++', 'Hardware'],
    links: [],
  },
  {
    title: 'Obstacle Avoidance Robot',
    description:
      'Autonomous rover that navigates around obstacles using ultrasonic sensors and an Arduino.',
    image: '',
    tags: ['Arduino', 'C++', 'Embedded', 'Robotics'],
    links: [],
  },
  {
    title: 'Path Visualizer',
    description:
      'Applies a modified greedy algorithm to input elevation data in Java to determine an optimal traversal path across terrain.',
    image: '',
    tags: ['Java', 'Algorithms'],
    links: [],
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
      'Developing cutting-edge wireless systems for industrial, government, and defense customers — custom waveforms and protocols for situations where standard Wi-Fi or cellular won\'t do. Day to day this means embedded C on custom ARM hardware and FPGA work in Vivado and ModelSim.',
    current: true,
  },
  {
    title: 'Software Developer',
    company: 'PointClickCare',
    period: 'Co-op · Jan – Apr 2023',
    description:
      'Worked on patient scheduling and medication/pharmacy tracking in Java and React. Led a React rewrite of an internal message simulation tool that ended up being considered for customer-facing use.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Empire Life',
    period: 'Co-op · Jan – Apr 2022',
    description:
      'Auth and user management on the IAM team: rolled out tenant-wide biometric and SMS-based MFA with Auth0, and upgraded a Dockerized React/Redux/Django app used internally for advisor onboarding.',
  },
  {
    title: 'Software Developer & IT Technician',
    company: 'Terrestrial Energy',
    period: 'Co-op · 2020',
    description:
      'Automated product lifecycle management processes by writing Windchill workflows in Java, and supported CAD tooling and document version control.',
  },
];

export const skillGroups: { name: string; skills: string[] }[] = [
  {
    name: 'Languages',
    skills: ['C / C++', 'Python', 'Java', 'JavaScript / TypeScript', 'VHDL / Verilog', 'SQL'],
  },
  {
    name: 'Embedded & FPGA',
    skills: ['FPGA development', 'RTL design (VHDL / Verilog)', 'Vivado', 'ModelSim', 'Quartus', 'Firmware', 'Microcontrollers', 'RTOS', 'ESP32 / Arduino', 'Home Assistant', 'Circuit design', 'IoT', 'Computer architecture'],
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
