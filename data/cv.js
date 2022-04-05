const workedYears = Math.floor(((new Date() - new Date(2013, 2, 1)) / (1000 * 60 * 60 * 24 * 365)));

const cvData = {
  basics: {
    name: "Rafael Poveda",
    label: "Frontend Developer",
    picture: "",
    email: "raerpo@gmail.com",
    website: "http://rafa.poveda.me",
    summary: `Hi!, I'm a Frontend developer that loves working with web technologies. I like learning all I possibly can about JavaScript and all its surrounding environment. I've been working for more than ${workedYears} years creating web experience for industries of different types.`,
    location: {
      city: "Santiago",
      country: "Chile",
      countryFlag: "🇨🇱",
    },
    profiles: [
      {
        network: "Email: raerpo@gmail.com",
        url: "mailto:raerpo@gmail.com",
      },
      {
        network: "Website: http://rafa.poveda.me",
        url: "mailto:raerpo@gmail.com",
      },
      {
        network: "Linkedin",
        url: "https://www.linkedin.com/in/raerpo/",
      },
      {
        network: "Twitter",
        url: "http://twitter.com/raerpo",
      },
      {
        network: "Github",
        url: "http://github.com/raerpo",
      },
      {
        network: "Codesandbox",
        url: "https://codesandbox.io/u/raerpo",
      },
      {
        network: "Codepen",
        url: "https://codepen.io/raerpo/",
      },
      {
        network: "Awesome blog",
        url: "http://rafa.poveda.me/blog",
      },
    ],
  },
  work: [
    {
      company: "Falabella.com Colombia",
      position: "Frontend Developer",
      website: "https://www.falabella.com.co",
      startDate: "2013-03-01",
      endDate: "2014-10-01",
      summary: "",
      highlights: [],
    },
    {
      company: "Falabella.com Colombia",
      position: "Lead Developer",
      website: "https://www.falabella.com.co",
      startDate: "2014-10-01",
      endDate: "2015-09-01",
      summary: "",
      highlights: [],
    },
    {
      company: "Falabella.com Chile",
      position: "Software Engineer",
      website: "https://www.falabella.com",
      startDate: "2015-09-01",
      endDate: "2017-05-01",
      summary: "",
      highlights: [],
    },
    {
      company: "Adessa Falabella",
      position: "Frontend Developer",
      startDate: "2017-05-01",
      endDate: "2018-06-01",
      summary: "",
      highlights: [],
    },
    {
      company: "Adessa Falabella",
      position: "UI Lead Architect",
      startDate: "2017-06-01",
      endDate: "2018-11-26",
      summary: "Falabella's frontend team leader. Responsible for ensuring the quality of the falabella frontend team's developments of both the team from Chile and India.",
      highlights: [],
    },
    {
      company: "Mediastream",
      position: "React Developer",
      website: "https://www.mediastre.am/",
      startDate: "2018-11-26",
      endDate: "2019-04-01",
      summary: "",
      highlights: [],
    },
    {
      company: "Cornershop by Uber",
      position: "Frontend Engineer",
      website: "https://cornershopapp.com",
      startDate: "2019-04-01",
      endDate: "2020-08-01",
      summary: "",
      highlights: [],
    },
    {
      company: "Cornershop by Uber",
      position: "Technical Leader Frontend",
      website: "https://cornershopapp.com",
      startDate: "2020-08-01",
      endDate: "2021-03-31",
      summary: "",
      highlights: [],
    },
    {
      company: "Cornershop by Uber",
      position: "Engineering manager",
      website: "https://cornershopapp.com",
      startDate: "2021-04-01",
      endDate: null,
      summary: "",
      highlights: [],
    },
  ],
  education: [
    {
      institution: "Universidad Pedagógica Nacional",
      area: "Electronic Engineering",
      startDate: "2006-07-01",
      endDate: "2013-07-01",
      project: {
        name: '"Estimación del foco de atención visual por medio de tecnicas de visión artificial"',
        grade: "4.8/5.0",
      },
    },
  ],
  skills: [
    {
      name: "Web Development",
      level: "Senior",
      keywords: [
        "HTML5 and related APIs",
        "CSS (Sass and Stylus)",
        "Javascript",
        "NodeJS",
        "TypeScript",
      ],
    },
  ],
  languages: [
    {
      name: "Spanish",
      level: "Native speaker",
    },
    {
      name: "English",
      level: "Fluent",
    },
  ],
  projects: [
    {
      name: "MDNotes",
      url: "https://mdnotes-b0ddf.firebaseapp.com/",
      repository: "https://github.com/raerpo/mdnotes",
      summary:
        "Markdown note taking application in real time that sync all notes across devices",
      techs: ["Firebase", "React"],
    },
    {
      name: "World Capitals",
      url: "https://react-capitals.netlify.com/",
      repository: "https://github.com/raerpo/capitals-game",
      summary:
        "Super simple trivia game to learn the capital cities of the world",
      techs: ["TypeScript", "React", "Styled Components"],
    },
    {
      name: "Chipfly",
      url: "https://chipfly.co",
      repository: "https://github.com/raerpo/chipfly",
      summary:
        "Get the cheapest flight from Santiago, Chile to a few cities. No matter when, just the smallest price",
      techs: ["Next.js", "React", "Styled Components", "TypeScript"],
    },
  ],
  talks: [
    {
      name: "TypeScript in the real world",
      description:
        "Introductory level talk for Noders Chile about TypeScript and how it's benefits for Frontend Development.",
      date: "",
      url: "https://revealjs-rsnoaqtlel.now.sh/",
    },
    {
      name: "TypeScript and why you should be using it...",
      description:
        "How can TypeScript can increase productivity between Backend and Frontend developers that use Javascript and main language. This talk was part of the *Tech Talks* series in Adessa Falabella.",
      date: "",
      url: "http://slides.com/raerpo/tech-talk-typescript#/",
    },
  ],
};

export default cvData;
