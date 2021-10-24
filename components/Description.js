const Description = ({ repositories, blogPosts, githubFollowers, yearsOfExperience }) => {
  return (
    <div className="description">
      <h2>
        My name is <strong className="highlight">Rafael Poveda</strong> and I'm
        a <br /> <strong className="highlight">Frontend Developer</strong>
      </h2>
      <p>
        I love creating web applications that solve real life problems with
        fast, functional, and well written interfaces. 🚀
      </p>
      <p>
        I'm in ❤️ with Javascript and Typescript either in the client and in the
        server.
      </p>
      <ul className="description_counters">
        <li>
          <div className="description_counter">
            {repositories}
          </div>
          <p>Repositories on Github 🐙</p>
        </li>
        <li>
          <div className="description_counter">
            {blogPosts}
          </div>
          <p>Blog entries 🤓</p>
        </li>
        <li>
          <div className="description_counter">{githubFollowers}</div>
          <p>Github Followers 🤖</p>
        </li>
        <li>
          <div className="description_counter">
            {yearsOfExperience}
          </div>
          <p>Years of Experience 👴🏼</p>
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
  );
};

export default Description;