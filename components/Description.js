import fetch from 'isomorphic-unfetch';

const Description = ({ repositories, twitterFollowers, blogEntries, yearOfExperience }) => {
  return <div className="description">
    <h2>My name is <strong className="highlight">Rafael Poveda</strong> and I'm a <br/> <strong className="highlight">Frontend Developer</strong></h2>
    <p>
      I love creating web applications that solve real life problems with beatiful, fast and functional interfaces. 🚀
    </p>
    <p>
      I'm in ❤️ with Javascript and Typescript either in the client and in the server.
    </p>
    <ul className="description_counters">
      <li>
        <p className="description_counter">{ repositories }</p>
        <p>Repositories on Github 🐙</p>
      </li>
      <li>
        <p className="description_counter">{ twitterFollowers }</p>
        <p>Followers on Twitter where i talk about tech 🤖</p>
      </li>
      <li>
        <p className="description_counter">{ blogEntries }</p>
        <p>Blog entries 🤓</p>
      </li>
      <li>
        <p className="description_counter">{ yearOfExperience }</p>
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
          justify-content: space-evenly;
        }
        li {
          text-align: center;
          margin-right: 2em;
          max-width: 20%;
        }
        li > p {
          margin: 0px;
        }
        li > .description_counter {
          font-size: 2em;
        }
      `}
    </style>
  </div>
};

export default Description;