import Layout from '../components/Layout';
import CVData from '../data/CVData';
import format from 'date-fns/format';

const FORMAT_DATE = 'MMM YYYY';

export default () => {
  const { 
    basics, 
    work, 
    education, 
    skills, 
    languages, 
    projects, 
    talks } = CVData;

  return <Layout title="Curriculum Vitae">

    <section className="cv-wrapper">

      <div className="cv-title">
        <h1>{ basics.name }</h1>
        <p>{ basics.label }</p>
      </div>

      <div className="cv-sections">

        <div className="cv-section">
          <h3>Who am i?</h3>
          <p>{ basics.summary }</p>
        </div>

        <div className="cv-section">
          <h3>Where have i worked?</h3>
          { renderWorks(work) }
        </div>

        <div className="cv-section">
          <h3>What have i studied?</h3>
          { renderEducation(education) }
        </div>

        <div className="cv-section">
          <h3>Where you can contact me?</h3>
          { renderContact(basics.profiles) }
        </div>

        <div className="cv-section">
          <h3>Where you can see my open source work?</h3>
          { renderOpenSourceProjects(projects) }
        </div>

        <div className="cv-section">
          <h3>What have you talked about?</h3>
          { renderTalks(talks) }
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
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
        .cv-title {
          text-align: center;
          margin-bottom: 3em;
        }
        .cv-title > h1 {
          font-size: 2em;
        }
        .cv-title > p {
          text-transform: uppercase;
          font-size: .9em;
        }
        .cv-title > * {
          margin: 0px;
        }
        .cv-sections {

        }
        .cv-section{
          margin-bottom: 2em;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          padding-bottom: 1em;
        }
        .cv-section h3 {
          margin: 0 0 .7em 0;
          font-size: 1.3em;
          text-transform: uppercase;
        }
        .cv-section p {
          margin: 0px;
        }
      `}
    </style>

  </Layout>
};

const renderWorks = (jobs) => {
  const jobsSections = jobs.map((job, index) => (
    // It's OK to use index as key because data don't change.
    <div className="cv-work-place" key={index}>
      <h4 className="company">{ job.company }</h4>
      <p className="job-title">{ job.position }</p>
      <p className="job-description">{ job.summary }</p>
      <div className="job-dates">
        <span className="start-date">{ format(job.startDate, FORMAT_DATE) }</span>
        <span className="end-date">{ job.endDate === 'Present' ? job.endDate : format(job.endDate, FORMAT_DATE) }</span>
      </div>
      <style jsx>
        {`
          .cv-work-place {
            margin-bottom: 2em;
            width: calc(100% / 2 - 3em);
            padding-right: 3em;
          }
          .company {
            margin: 0px;
            color: hsl(204, 3%, 35%);
          }
          .job-title {
            margin: .2em 0px 0px 0px;
            font-size: .95em;
          }
          .job-description {
            font-size: .85em;
          }
          .job-dates {
            font-size: .85em;
          }
          .job-dates .start-date {
            display: block;
          }
          .job-dates .start-date:before {
            content: 'From: ';
            font-weight: bolder;
          }
          .job-dates .end-date:before {
            content: 'Until: ';
            font-weight: bolder;
          }
        `}
      </style>
    </div>
  )).reverse();
  return <div className="cv-work-places-wrapper">
    { jobsSections }
    <style jsx>
    {`
      .cv-work-places-wrapper {
        display: flex;
        flex-wrap: wrap;
      }
    `}
    </style>
  </div>
}

const renderEducation = (studies) => {
  return studies.map((study, index) => (
    <div className="cv-study-place" index={index}>
      <h4 className="university">{ study.institution }</h4>
        <p className="career">{ study.area }</p>
        { study.project && <p className="study-project">{ study.project.name } - { study.project.grade }</p> }
        <div className="study-dates">
          <span className="initial-date">{ study.startDate }</span>
          <span className="end-date">{ study.endDate }</span>
        </div>
    </div>
  ));
};

const renderContact = (profiles) => {
  return profiles.map((profile, index) => (
    <div className="cv-profile" key={index}>
        <a href={ profile.url }>
          { profile.network }
        </a>
        <style jsx>
        {`
          .cv-profile a {
            display: block;
            color: inherit;
            margin: 0px 0px .5em 0px;
            font-weight: 100;
          }
        `}
        </style>
    </div>
  ));
}

const renderOpenSourceProjects = (projects) => {
  return projects.map((project, index) => (
    <div className="cv-project">
      <h4 className="project-name">{ project.name }</h4>
      <a className="url-demo"href={ project.url }>{ project.url }</a>
      <a className="url-repository" href={ project.repository }>{ project.repository }</a>
      <p className="project-description">
        { project.summary }
      </p>
      <ul className="techs">
        { project.techs.map((keyword, index) => <li key={index}> { keyword } </li> ) }
      </ul>
      <style jsx>
        {`
          .url-demo, .url-repository {
            display: block;
          }
        `}
      </style>
    </div>
  ));
}

const renderTalks = (talks) => {
  return talks.map((talk, index) => (
    <div className="cv-talk">
      <h4 className="talk-name">{ talk.name }</h4>
      <a href={ talk.url }>Slides</a>
      <p className="project-description">
        { talk.description }
      </p>
      <ul className="subjects">
        { talk.keywords.map((keyword, index) => <li key={index}> { keyword } </li> ) }
      </ul>
    </div>
  ));
}