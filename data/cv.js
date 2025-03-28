const workedYears = Math.floor(
  (new Date() - new Date(2013, 2, 1)) / (1000 * 60 * 60 * 24 * 365)
);

const cvData = {
  basics: {
    name: 'Rafael Poveda',
    label: 'Frontend Developer',
    picture: '',
    email: 'raerpo@gmail.com',
    website: 'http://rafa.poveda.me',
    summary: `Hi!, I'm a Frontend developer who loves working with web technologies. I really passionate about learning everything I can about web development and technology in general. For more than ${workedYears} years I´ve been creating web experiences for multiple industries.`,
    location: {
      city: 'Bogotá',
      country: 'Colombia',
      countryFlag: '🇨🇴',
    },
    profiles: [
      {
        network: 'Email: raerpo@gmail.com',
        url: 'mailto:raerpo@gmail.com',
      },
      {
        network: 'Website: http://rafa.poveda.me',
        url: 'mailto:raerpo@gmail.com',
      },
      {
        network: 'Linkedin',
        url: 'https://www.linkedin.com/in/raerpo/',
      },
      {
        network: 'Twitter',
        url: 'http://twitter.com/raerpo',
      },
      {
        network: 'Github',
        url: 'http://github.com/raerpo',
      },
      {
        network: 'Codesandbox',
        url: 'https://codesandbox.io/u/raerpo',
      },
      {
        network: 'Codepen',
        url: 'https://codepen.io/raerpo/',
      },
      {
        network: 'Awesome blog',
        url: 'http://rafa.poveda.me/blog',
      },
    ],
  },
  work: [
    {
      company: 'Falabella.com Colombia',
      position: 'Frontend Developer',
      website: 'https://www.falabella.com.co',
      location: 'Bogotá, Colombia 🇨🇴 ',
      startDate: '2013-03-01',
      endDate: '2014-10-01',
      summary:
        "I worked as the first frontend developer for Falabella's marketing team in Colombia. I was responsible of creating the markup of lannding pages designed by the design team and email marketing as well.",
      highlights: [],
      tools: ['jQuery', 'Angular', 'CSS'],
    },
    {
      company: 'Falabella.com Colombia',
      position: 'Lead Developer',
      location: 'Bogotá, Colombia 🇨🇴 ',
      website: 'https://www.falabella.com.co',
      startDate: '2014-10-01',
      endDate: '2015-09-01',
      summary:
        "Lead frontend developer for Falabella's marketing team in Colombia. I was in charge of creating the landing pages for the hard sales events and internal tools that facilitate the work in all teas. Led a small team of two frontend junior developers helping them to create small applications and responsive email templates.",
      highlights: [
        'I created an internal CMS for hard sale events like CyberMonday and Black Friday managed the commertial team with Django and Angular.js. This application reduced the amount of time nedeed to create an event from 2 days to a couple of hours.',
        'I developed a small jQuery utility to create banners with multiple internal links on them with an integration to our internal analytics tool.',
      ],
      tools: ['jQuery', 'Angular', 'Google Analytics', 'CSS'],
    },
    {
      company: 'Falabella.com Chile',
      position: 'Software Engineer',
      location: 'Santiago, Chile 🇨🇱 ',
      website: 'https://www.falabella.com',
      startDate: '2015-09-01',
      endDate: '2017-05-01',
      summary:
        "Software engineer in Falabella's coorporative marketing team in Chile. My main job was to create tools for the local teams on each country in which Falabella had a presence. Also, I helped local teams with their needs.",
      highlights: [
        "I worked on the team that rewrote Falabella's ecommerce in React",
        'I created multiple tools that helped local teams to create hard sell landing pages faster',
      ],
      tools: ['jQuery', 'Angular', 'Google Analytics', 'CSS'],
    },
    {
      company: 'Adessa Falabella',
      position: 'Frontend Developer',
      location: 'Santiago, Chile 🇨🇱 ',
      startDate: '2017-05-01',
      endDate: '2018-06-01',
      summary:
        "I was part of one of the teams that was responsable for developing new features on the entire checkout process used by Falabella's ecommerce",
      highlights: [],
      tools: ['React', 'Node', 'Firebase', 'Typescript'],
    },
    {
      company: 'Adessa Falabella',
      position: 'UI Lead Architect',
      location: 'Santiago, Chile 🇨🇱 ',
      startDate: '2017-06-01',
      endDate: '2018-11-26',
      summary:
        "Falabella's frontend team leader. Responsible for ensuring the quality of the falabella frontend team's developments of both the team from Chile and India.",
      highlights: [],
      tools: ['React', 'Node', 'Firebase', 'Typescript'],
    },
    {
      company: 'Cornershop by Uber',
      position: 'Frontend Engineer',
      location: 'Santiago, Chile 🇨🇱 ',
      website: 'https://cornershopapp.com',
      startDate: '2019-04-01',
      endDate: '2020-08-01',
      summary:
        "I was the first frontend enginner in Cornershop's operations team that was responsable of creating internal tools to manage their entire operation.",
      highlights: [
        "Develop tens of internal applications to facilate operations team's work",
        'Help with the hiring process of new frontend engineers creating a team from scratch',
      ],
      tools: ['React', 'Node', 'Firebase', 'Typescript', 'Vue'],
    },
    {
      company: 'Cornershop by Uber',
      position: 'Technical Leader Frontend',
      location: 'Santiago, Chile 🇨🇱 ',
      website: 'https://cornershopapp.com',
      startDate: '2020-08-01',
      endDate: '2022-03-31',
      summary:
        'Technical leader of a group of 14 frontend developers working for internal applications.',
      highlights: [
        'Work closely with HR team to hire new frontend developers for the company',
        'Do 1:1 feedback meetings with developers',
        'Decide the arquitecture and tech stack of new projects',
        'Maintain the internal NPM registry of the company',
        'Create a maintain internal tools for other developers within the company',
      ],
      tools: ['React', 'Node', 'Firebase', 'Typescript', 'Vue'],
    },
    {
      company: 'Cornershop by Uber',
      position: 'Engineering manager',
      location: 'Remote 🌎 ',
      website: 'https://cornershopapp.com',
      startDate: '2022-04-01',
      endDate: '2022-08-01',
      summary:
        'As an engineering manager I coordinate and oversee the technical decisions of an internal product in the company. Also, I manage a multi disciplinary team of engineers working for an internal product',
      highlights: [
        'Estimate engineering efforts for upcoming projects',
        'Evaluate technical feasibility',
        'Hire new engineers',
        'Take care of bugs and work closely with engineers to reduce technical debt',
      ],
      tools: ['React', 'Node', 'Firebase', 'Typescript'],
    },
    {
      company: 'Uber',
      position: 'Software engineer',
      location: 'Remote 🌎 ',
      website: 'https://uber.com',
      startDate: '2022-08-01',
      endDate: '2023-12-03',
      summary: "Frontend developer for Uber working on Cornershop's products",
      highlights: [
        "I worked as part of the team incharge keeping the operation of Cornershop until is fully merged with Uber's groseries strategy",
        'I was responsable of helping multiple teams to keep the operation running by fixing bugs and creating new features',
      ],
      tools: ['React', 'AWS', 'Django', 'Node', 'Firebase'],
    },
    {
      company: 'Maifud',
      position: 'Chief technology officer',
      location: 'Remote 🌎 ',
      website: 'https://maifud.app/',
      startDate: '2024-01-01',
      endDate: '2025-01-31',
      summary:
        'Worked as CTO leading the full stack development of the startup.',
      highlights: [
        'Built from the ground-up the entire client-side application',
        'Meeting with possible partnerships to include new ways to capture customers',
        'Creation of the upsell functionality that increased weekly sales by 30%',
      ],
      tools: [
        'Python',
        'Django',
        'React',
        'Heroku',
        'PostgreSQL',
        'Typescript',
        'Firebase',
      ],
    },
  ],
  education: [
    {
      institution: 'Universidad Pedagógica Nacional',
      area: 'Licenciatura en Electrónica',
      startDate: '2006-07-01',
      endDate: '2013-07-01',
      project: {
        name: '"Estimación del foco de atención visual por medio de tecnicas de visión artificial"',
        grade: '4.8/5.0',
      },
    },
  ],
  skills: [
    {
      name: 'Web Development',
      level: 'Senior',
      keywords: [
        'HTML5 and related APIs',
        'CSS (Sass and Stylus)',
        'Javascript',
        'NodeJS',
        'TypeScript',
      ],
    },
  ],
  languages: [
    {
      name: 'Spanish',
      level: 'Native speaker',
    },
    {
      name: 'English',
      level: 'Fluent',
    },
  ],
  projects: [
    {
      name: 'MDNotes',
      url: 'https://mdnotes-b0ddf.firebaseapp.com/',
      repository: 'https://github.com/raerpo/mdnotes',
      summary:
        'Markdown note taking application in real time that sync all notes across devices',
      techs: ['Firebase', 'React'],
    },
    {
      name: 'World Capitals',
      url: 'https://react-capitals.netlify.com/',
      repository: 'https://github.com/raerpo/capitals-game',
      summary:
        'Super simple trivia game to learn the capital cities of the world',
      techs: ['TypeScript', 'React', 'Styled Components'],
    },
    {
      name: 'Chipfly',
      url: 'https://chipfly.co',
      repository: 'https://github.com/raerpo/chipfly',
      summary:
        'Get the cheapest flight from Santiago, Chile to a few cities. No matter when, just the smallest price',
      techs: ['Next.js', 'React', 'Styled Components', 'TypeScript'],
    },
  ],
  talks: [
    {
      name: 'TypeScript in the real world',
      description:
        "Introductory level talk for Noders Chile about TypeScript and how it's benefits for Frontend Development.",
      date: '',
      url: 'https://revealjs-rsnoaqtlel.now.sh/',
    },
    {
      name: 'TypeScript and why you should be using it...',
      description:
        'How can TypeScript can increase productivity between Backend and Frontend developers that use Javascript and main language. This talk was part of the *Tech Talks* series in Adessa Falabella.',
      date: '',
      url: 'http://slides.com/raerpo/tech-talk-typescript#/',
    },
  ],
};

export default cvData;
