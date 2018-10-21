import fetch from 'isomorphic-unfetch';
import Loader from './Loader';

export default class extends React.Component {
  state = {
    repositories:null, 
    followers:null,
    yearOfExperience:null
  }

  componentDidMount() {

    const githubPublicRepos = fetch('https://api.github.com/users/raerpo')
      .then(res => res.json());
            
    // How many year from March 2013
    const yearOfExperience = ((new Date() - new Date(2013, 2, 1)) / (1000 * 60 * 60 * 24 * 365)).toFixed(2);

    Promise.all([githubPublicRepos, yearOfExperience]).then((values) => {
      const [ githubData, yearOfExperience ] = values;
      const { public_repos: repositories, followers} = githubData;
      this.setState({
        repositories,
        followers,
        yearOfExperience
      });
    });
  }

  render() {
    const { mediumJSON } = this.props;
    const { payload: { userMeta: { numberOfPostsPublished: blogEntries}} } = mediumJSON;
    const { repositories, followers, yearOfExperience } = this.state;
    return <div className="description">
      <h2>My name is <strong className="highlight">Rafael Poveda</strong> and I'm a <br /> <strong className="highlight">Frontend Developer</strong></h2>
      <p>
        I love creating web applications that solve real life problems with fast, functional, and well written interfaces. 🚀
    </p>
      <p>
        I'm in ❤️ with Javascript and Typescript either in the client and in the server.
    </p>
      <ul className="description_counters">
        <li>
          <div className="description_counter">{repositories || <Loader />}</div>
          <p>Repositories on Github 🐙</p>
        </li>
        <li>
          <div className="description_counter">{blogEntries || <Loader />}</div>
          <p>Blog entries 🤓</p>
        </li>
        <li>
          <div className="description_counter">{followers || <Loader />}</div>
          <p>Github Followers 🤖</p>
        </li>
        <li>
          <div className="description_counter">{yearOfExperience || <Loader />}</div>
          <p>Year of Experience 👴🏼</p>
        </li>
      </ul>
      <style jsx>
        {`
        .description {
          width: 70%;
          margin: 0 auto;
          text-align: center;
          font-size: 1.2em;
          padding-top: 3em;
        }
        .description > p {
          width: 50%;
          margin: 0 auto;
        }
        h2 {
          font-size: 2.5em;
          margin: 0 auto 2em auto;
          font-weight: 100;
        }
        .description_counters {
          list-style: none;
          margin: 5em 0px 0px 0px;
          padding: 0px;
          display: flex;
          flex-flow: wrap;
          justify-content: center;
        }
        .description_counters li {
          text-align: center;
          padding: 0px 1em;
          width: 20%;
          border-right: 1px solid;
        }
        .description_counters li:last-child {
          border-right: none;
        }
        .description_counters li p {
          margin: 0px;
        }
        .description_counters li > .description_counter {
          font-size: 2em;
          font-weight: bold;
        }

        @media (max-width: 1140px) { 
          .description {
            width: 100%;
            padding-top: 0px;
          }
          h2 {
            margin: 0 auto 1em auto;
          }
        }

        @media (max-width: 850px) { 
          h2 {
            font-size: 2em;
          }
          .description {
            width: 100%;
            padding-top: 0px;
          }
          .description > p {
            width: 90%;
            margin: 0 auto;
          }
          .description_counters {
            margin-top: 2em;
          }
          .description_counters li {
            width: 100%;
            padding: 1em 0px;
            border: none;
            border-bottom: 1px solid;
          }
          .description_counters li:first-child {
            border-top: 1px solid;
          }
        }
      `}
      </style>
    </div>
  }
}