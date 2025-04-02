'use client';

import Layout from 'components/Layout';
import WorkPlace from 'components/WorkPlace';
import Education from 'components/Education';

import cvData from 'data/cv';

const CV = () => {
  const { basics, work, education, talks } = cvData;
  return (
    <Layout title="Curriculum Vitae" hideHeader>
      <section className="cv-wrapper">
        <p className="call-me">
          Want to call me? +56996665537 or +573219250747
        </p>

        <div className="cv-title">
          <h1>{basics.name}</h1>
          <p>{basics.label}</p>
          <a className="email" href={`mailto:${basics.email}`}>
            {basics.email}
          </a>
          <p className="location">
            Currently living in {basics.location.city},{' '}
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

          {/* <div className="cv-section">
            <h3>Where you can see my open source work?</h3>
            {renderOpenSourceProjects(projects)}
          </div> */}

          <div className="cv-section">
            <h3>What have i talked about?</h3>
            {renderTalks(talks)}
          </div>
        </div>
      </section>

      <style jsx>
        {`
          .cv-wrapper {
            width: 80vw;
            margin: 4rem auto;
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
              padding: 4rem 1em;
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

const renderWorkExperience = jobs => {
  return (
    <div className="cv-work-places-wrapper">
      {jobs.reverse().map(job => (
        <WorkPlace key={`${job.position}-${job.company}`} {...job} />
      ))}
      <style jsx>
        {`
          .cv-work-places-wrapper {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 0.5rem;
          }
        `}
      </style>
    </div>
  );
};

const renderEducation = studies => {
  return (
    <div className="cv-education-wrapper">
      {studies.map(study => {
        return <Education key={study.institution} {...study} />;
      })}
    </div>
  );
};

const renderContact = profiles => {
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

const renderOpenSourceProjects = projects => {
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
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-size: cover;
            margin-right: 0.3rem;
            transform: translateY(0.2rem);
          }
          [class*='url-'] {
            margin-bottom: 0.4rem;
          }
          .url-demo:before {
            background-image: url('/link.svg');
          }
          .url-repository:before {
            background-image: url('/github.svg');
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

const renderTalks = talks => {
  return (
    <div className="cv-talks-wrapper">
      {talks.map((talk, index) => (
        <div className="cv-talk" key={index}>
          <div className="cv-talk__title">
            <h4 className="talk-name">{talk.name}</h4>-
            <a href={talk.url}>Slides</a>
          </div>
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
            padding-right: 3em;
            border-bottom: 2px solid var(--primary-color);
            margin-bottom: 1rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 1.5rem 1rem;
          }
          .cv-talk__title {
            display: flex;
            gap: 1rem;
          }
          .cv-talk a {
            color: inherit;
          }
          .cv-talk .talk-name {
            margin: 0;
            color: var(--primary-color);
          }
        `}
      </style>
    </div>
  );
};
