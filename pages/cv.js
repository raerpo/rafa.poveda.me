import { format, parse, parseISO } from "date-fns";

import Layout from "components/Layout";

import cvData from "data/cv";

const FORMAT_DATE = "MMM yyyy";

const getPDFVersion = () => {
  window.print();
};

const CV = () => {
  const { basics, work, education, projects, talks } = cvData;
  return (
    <Layout title="Curriculum Vitae">
      <section className="cv-wrapper">
        <a href="" onClick={getPDFVersion} className="pdf-download">
          Want the PDF version?
        </a>

        <p className="call-me">Want to call me? +56996665537</p>

        <div className="cv-title">
          <h1>{basics.name}</h1>
          <p>{basics.label}</p>
          <a className="email" href={`mailto:${basics.email}`}>
            {basics.email}
          </a>
          <p className="location">
            Currently living in {basics.location.city},{" "}
            {basics.location.country}.
            <br />
            {basics.location.countryFlag}
          </p>
        </div>

        <div className="cv-sections">
          <div className="cv-section">
            <h3>Who am i?</h3>
            <p className="cv-summary">{basics.summary}</p>
          </div>

          <div className="cv-section">
            <h3>Where have i worked?</h3>
            {renderWorkExperience(work)}
          </div>

          <div className="cv-section">
            <h3>What have i studied?</h3>
            {renderEducation(education)}
          </div>

          <div className="cv-section print-hidden">
            <h3>Where you can contact me?</h3>
            {renderContact(basics.profiles)}
          </div>

          <div className="cv-section">
            <h3>Where you can see my open source work?</h3>
            {renderOpenSourceProjects(projects)}
          </div>

          <div className="cv-section">
            <h3>What have i talked about?</h3>
            {renderTalks(talks)}
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .cv-wrapper {
            width: 215mm;
            margin: 0 auto;
            background: white;
            padding: 4rem 5rem;
            box-sizing: border-box;
            min-height: 80vh;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
            position: relative;
          }
          .pdf-download,
          .call-me {
            position: absolute;
            right: 1em;
            top: 1em;
            color: inherit;
          }
          .call-me {
            display: none;
          }
          @media screen and (max-width: 215mm) {
            .cv-wrapper {
              width: 100%;
              box-shadow: none;
            }
          }
          @media screen and (max-width: 600px) {
            .cv-wrapper {
              padding: 4rem 2em;
            }
          }
          @media print {
            .cv-wrapper {
              box-shadow: none;
            }
            .pdf-download {
              display: none;
            }
            .call-me {
              display: block;
            }
            .print-hidden {
              display: none;
            }
          }
          .cv-title {
            text-align: center;
            margin-bottom: 3em;
          }
          .cv-title > h1 {
            font-size: 2em;
            text-transform: uppercase;
          }
          .cv-title > p {
            text-transform: uppercase;
            font-size: 0.9em;
          }
          .cv-title > * {
            margin: 0px;
          }
          .cv-title .location {
            font-size: 0.8em;
            margin-top: 0.5em;
          }
          .cv-title .email {
            color: inherit;
          }
          .cv-summary {
            text-align: justify;
          }
          .cv-section {
            margin-bottom: 2em;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding-bottom: 1em;
          }
          .cv-section:last-child {
            border: none;
          }
          .cv-section h3 {
            margin: 0 0 0.7em 0;
            font-size: 1.3em;
            text-transform: uppercase;
          }
          .cv-section p {
            margin: 0px;
          }
        `}
      </style>
    </Layout>
  );
};

export default CV;

const renderWorkExperience = (jobs) => {
  return (
    <div className="cv-work-places-wrapper">
      {jobs
        .map((job) => {
          return (
            <div
              className="cv-work-place"
              key={`${job.company} - ${job.position}`}
            >
              <h4 className="company">{job.company}</h4>
              <p className="job-title">{job.position}</p>
              <p className="job-description">{job.summary}</p>
              {job.highlights && job.highlights.length > 0 && (
                <ul className="job-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
              <div className="job-dates">
                <span className="start-date">
                  {format(parseISO(`${job.startDate}T00:00:00`), FORMAT_DATE)}
                </span>
                <span className="end-date">
                  {job.endDate
                    ? format(parseISO(`${job.endDate}T00:00:00`), FORMAT_DATE)
                    : "Currently"}
                </span>
              </div>
            </div>
          );
        })
        .reverse()}
      <style jsx>
        {`
          .cv-work-places-wrapper {
            display: flex;
            flex-wrap: wrap;
          }
          .cv-work-place {
            margin-bottom: 2em;
            width: 100%;
          }
          .cv-work-place:before {
            content: "";
            background-image: url("/arrow.svg");
            background-repeat: no-repeat;
            width: 25px;
            height: 25px;
            display: block;
            transform: rotate(-90deg) translateX(1rem);
          }
          .cv-work-place:first-child:before {
            display: none;
          }
          .company {
            margin: 0px;
            color: hsl(204, 3%, 35%);
          }
          .job-title {
            margin: 0.2em 0px 0px 0px;
            font-size: 0.95em;
          }
          .job-description {
            font-size: 0.85em;
            text-align: justify;
          }
          .job-highlights {
            font-size: 0.85em;
            padding: 0;
            padding-left: 1rem;
          }
          .job-dates {
            font-size: 0.85em;
          }
          .job-dates .start-date {
            display: block;
          }
          .job-dates .start-date:before {
            content: "From: ";
            font-weight: bolder;
          }
          .job-dates .end-date:before {
            content: "Until: ";
            font-weight: bolder;
          }
        `}
      </style>
    </div>
  );
};

const renderEducation = (studies) => {
  return studies.map((study, index) => (
    <div className="cv-study-place" index={index}>
      <h4 className="university">{study.institution}</h4>
      <p className="career">{study.area}</p>
      {study.project && (
        <p className="study-project">
          {study.project.name} - {study.project.grade}
        </p>
      )}
      <div className="study-dates">
        <span className="start-date">{study.startDate}</span>
        <span className="end-date">{study.endDate}</span>
      </div>
      <style jsx>
        {`
          .university {
            color: hsl(204, 3%, 35%);
          }
          .study-dates {
            font-size: 0.85em;
          }
          .study-dates .start-date {
            display: block;
          }
          .study-dates .start-date:before {
            content: "From: ";
            font-weight: bolder;
          }
          .study-dates .end-date:before {
            content: "Until: ";
            font-weight: bolder;
          }
        `}
      </style>
    </div>
  ));
};

const renderContact = (profiles) => {
  return (
    <div className="cv-profiles-wrapper">
      {profiles.map((profile, index) => (
        <div className="cv-profile" key={index}>
          <a href={profile.url}>{profile.network}</a>
        </div>
      ))}
      <style jsx>
        {`
          .cv-profiles-wrapper {
            column-count: 2;
          }
          @media print {
            .cv-profiles-wrapper {
              display: none;
            }
          }
          @media screen and (max-width: 215mm) {
            .cv-profiles-wrapper {
              column-count: 1;
            }
          }
          .cv-profile a {
            display: block;
            color: inherit;
            margin: 0px 0px 0.5em 0px;
            font-weight: 100;
          }
        `}
      </style>
    </div>
  );
};

const renderOpenSourceProjects = (projects) => {
  return (
    <div className="cv-projects-wrapper">
      {projects.map((project, index) => (
        <div className="cv-project" key={index}>
          <h4 className="project-name">{project.name}</h4>
          <a className="url-demo" href={project.url}>
            {project.url}
          </a>
          <a className="url-repository" href={project.repository}>
            {project.repository}
          </a>
          <p className="project-description">{project.summary}</p>
          <ul className="techs">
            <h4>Built with:</h4>
            {project.techs.map((keyword, index) => (
              <li key={index}> {keyword} </li>
            ))}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          .cv-projects-wrapper {
            display: flex;
            flex-wrap: wrap;
          }
          .cv-project {
            width: calc(100% / 2 - 3em);
            padding-right: 3em;
            margin-bottom: 0.5rem;
          }
          @media screen and (max-width: 215mm) {
            .cv-projects-wrapper {
              display: block;
            }
            .cv-project {
              width: 100%;
              margin-bottom: 3em;
            }
          }
          .cv-project a {
            color: inherit;
          }
          .cv-project .project-name {
            margin: 0px 0px 0.2em 0px;
            font-size: 1.1rem;
          }
          .url-demo,
          .url-repository {
            display: block;
          }
          .url-demo:before,
          .url-repository:before {
            content: "";
            display: inline-block;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-right: 0.3rem;
            transform: translateY(0.2rem);
          }
          [class*="url-"] {
            margin-bottom: 0.4rem;
          }
          .url-demo:before {
            background-image: url("/link.svg");
          }
          .url-repository:before {
            background-image: url("/github.svg");
          }
          .techs {
            padding-left: 1em;
          }
          .techs h4 {
            margin: 0px;
            transform: translateX(-1em);
          }
        `}
      </style>
    </div>
  );
};

const renderTalks = (talks) => {
  return (
    <div className="cv-talks-wrapper">
      {talks.map((talk, index) => (
        <div className="cv-talk" key={index}>
          <h4 className="talk-name">{talk.name}</h4>
          <a href={talk.url}>Slides</a>
          <p className="project-description">{talk.description}</p>
        </div>
      ))}
      <style jsx>
        {`
          .cv-talks-wrapper {
            display: flex;
            flex-wrap: wrap;
          }
          .cv-talk {
            width: calc(100% / 2 - 3em);
            padding-right: 3em;
          }
          @media screen and (max-width: 215mm) {
            .cv-talks-wrapper {
              display: block;
            }
            .cv-talk {
              width: 100%;
              margin-bottom: 3em;
            }
          }
          .cv-talk a {
            color: inherit;
          }
          .cv-talk .talk-name {
            margin: 0px 0px 0.5em 0px;
          }
        `}
      </style>
    </div>
  );
};
