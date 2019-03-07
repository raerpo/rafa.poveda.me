const workedYears = Math.floor(((new Date() - new Date(2013, 2, 1)) / (1000 * 60 * 60 * 24 * 365)));

export default {
  "basics": {
    "name": "Rafael Poveda",
    "label": "Desarrollador Frontend",
    "picture": "",
    "email": "raerpo@gmail.com",
    "website": "http://rafa.poveda.me",
    "summary": `¡Hola!, Soy un desarrollador frontend que ama trabajar con tecnologías web. Me gusta aprender todo lo que pueda acerca de Javascript y su ecosistema. He estado por más de ${workedYears} años creando experiencias web para diferentes tipos de industrias`,
    "location": {
      "city": "Santiago",
      "country": "Chile",
      "countryFlag": "🇨🇱"
    },
    "profiles": [
      {
        "network": "Email: raerpo@gmail.com",
        "url": "mailto:raerpo@gmail.com"
      },
      {
        "network": "Sitio web: http://rafa.poveda.me",
        "url": "mailto:raerpo@gmail.com"
      },
      {
        "network": "Linkedin",
        "url": "https://www.linkedin.com/in/raerpo/"
      },
      {
        "network": "Twitter",
        "url": "http://twitter.com/raerpo"
      },
      {
        "network": "Github",
        "url": "http://github.com/raerpo"
      },
      {
        "network": "Codesandbox",
        "url": "https://codesandbox.io/u/raerpo"
      },
      {
        "network": "Codepen",
        "url": "https://codepen.io/raerpo/"
      },
      {
        "network": "Awesome blog",
        "url": "http://rafa.poveda.me/blog"
      }
    ]
  },
  "work": [
    {
      "company": "Falabella.com Colombia",
      "position": "Programador web",
      "website": "https://www.falabella.com.co",
      "startDate": "2013-03-01",
      "endDate": "2014-10-01",
      "summary": "Creación de landing pages y email marketing para los diferentes eventos de Falabella.com",
      "highlights": [
      ]
    },
    {
      "company": "Falabella.com Colombia",
      "position": "Coordinador de desarrollo web",
      "website": "https://www.falabella.com.co",
      "startDate": "2014-10-01",
      "endDate": "2015-09-01",
      "summary": "Liderar el equipo de desarrollo de Falabella.com Colombia. Responsable de la creación de herramientas para uso interno con el proposito de automatizar las tareas diarias",
      "highlights": [
      ]
    },
    {
      "company": "Falabella.com Chile",
      "position": "Ingeniero de software",
      "website": "https://www.falabella.com",
      "startDate": "2015-09-01",
      "endDate": "2017-05-01",
      "summary": "A cargo de asesorar a los equipos de diseño de los países donde tiene presencia la compañia y asegurar que creen excelentes aplicaciones de cara al cliente. Además, responsable de la implementación de los sistemas de analítica en todos los sitios de Falabella.",
      "highlights": [
      ]
    },
    {
      "company": "Adessa Falabella",
      "position": "Desarrollador Frontend",
      "startDate": "2017-05-01",
      "endDate": "2018-06-01",
      "summary": "Responsable de la creación de nuevas funcionalidades para la página de despacho en el proceso de compra asegurando un desempeño optimo de la página, la salud del repositorio de código y un uso correcto del flujo de trabajo de Git.",
      "highlights": [
      ]
    },
    {
      "company": "Adessa Falabella",
      "position": "UI Lead Architect",
      "startDate": "2017-06-01",
      "endDate": "Present",
      "summary": "Lider del equipo desarrollo Frontend de Falabella. Responsable de asegurar la calidad de los desarrollos del equipo Frontend tanto del equipo en Chile como en India.",
      "highlights": [
      ]
    },
    {
      "company": "Mediastream",
      "position": "React Developer",
      "website": "https://www.mediastre.am/",
      "startDate": "2018-11-26",
      "endDate": "Present",
      "summary": "Desarrollador React del equipo OTT.",
      "highlights": [
      ]
    }
  ],
  "education": [{
    "institution": "Universidad Pedagógica Nacional",
    "area": "Licenciatura en electrónica",
    "startDate": "2006-07-01",
    "endDate": "2013-07-01",
    "project": {
      "name": "\"Estimación del foco de atención visual por medio de tecnicas de visión artificial\"",
      "grade": "4.8/5.0"
    }
  }],
  "skills": [{
    "name": "Desarrollo Web",
    "level": "Senior",
    "keywords": [
      "HTML5 y APIs relacionadas",
      "CSS (Sass, LESS y Stylus)",
      "Javascript",
      "NodeJS",
      "TypeScript"
    ]
  }],
  "languages": [
    {
      "name": "Español",
      "level": "Nativo"
    },
    {
      "name": "Inglés",
      "level": "Fluido escrito y hablado"
    }
  ],
  "projects": [
    {
      "name": "MDNotes",
      "url": "https://mdnotes-b0ddf.firebaseapp.com/",
      "repository": "https://github.com/raerpo/mdnotes",
      "summary": "Aplicación para tomar notas en formato Markdown en tiempo real con sincronización en diferentes dispositivos",
      "techs": [
        "Firebase",
        "React"
      ]
    },
    {
      "name": "World Capitals",
      "url": "https://react-capitals.netlify.com/",
      "repository": "https://github.com/raerpo/capitals-game",
      "summary": "Juego de preguntas y respuestas para aprender las capitales del mundo",
      "techs": [
        "TypeScript",
        "React",
        "Styled Components"
      ]
    },
    {
      "name": "Chipfly",
      "url": "https://chipfly.co",
      "repository": "https://github.com/raerpo/chipfly",
      "summary": "Obtener los vuelos más baratos desde Santiado de Chile hacia algunas ciudades. No importa cuando sea el viaje, solo que sea el más barato.",
      "techs": [
        "Next.js",
        "React",
        "Styled Components",
        "TypeScript"
      ]
    },
  ],
  "talks": [
    {
      "name": "TypeScript in the real world",
      "description": "Charla de introducción para el grupo Noders Chile acerca de Typescript y sus beneficios en el desarrollo frontend",
      "date": "",
      "url": "https://revealjs-rsnoaqtlel.now.sh/"
    },
    {
      "name": "TypeScript and why you should be using it...",
      "description": "Como puede Typescript aumentar la productividad entre desarrolladores Backend y Frontend que usen Javascript como lenguaje principal. Esta charla fue parte de la seria *Tech Talks* in Adessa Falabella.",
      "date": "",
      "url": "http://slides.com/raerpo/tech-talk-typescript#/"
    }
  ]
}