import Layout from '../components/Layout';
import CVData from '../data/CVData';

const renderWorks = (jobs) => {
  return jobs.map((job, index) => (
    // It's OK to use index as key because data don't change.
    <div className="cv-work-place" key={index}>
      <h4 className="company">{ job.company }</h4>
      <p className="job-title">{ job.position }</p>
      <p className="job-description">{ job.summary }</p>
      <div className="job-dates">
        <span className="start-date">{ job.startDate }</span>
        <span className="end-date">{ job.endDate }</span>
      </div>
    </div>
  ));
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
          <h4 className="university">{ profile.network }</h4>
        </a>
    </div>
  ));
}

const renderOpenSourceProjects = (projects) => {
  return projects.map((project, index) => (
    <div className="cv-project">
      <h4 className="project-name">{ project.name }</h4>
      <a href={ project.url }>{ project.url }</a>
      <p className="project-description">
        { project.summary }
      </p>
      <ul className="techs">
        { project.keywords.map((keyword, index) => <li key={index}> { keyword } </li> ) }
      </ul>
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
          <h3>What have i done?</h3>
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
          width: 70%;
          margin: 0 auto;
          background: white;
          padding: 4rem 5rem;
          box-sizing: border-box;
          min-height: 80vh;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
        }
      `}
    </style>

  </Layout>
};