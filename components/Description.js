export default ({ repositories, twitterFollowers, blogEntries, yearOfExperience }) => (
  <div>
    <h2>My name is <strong>Rafael Poveda</strong> and i'm a <strong>Frontend Developer</strong></h2>
    <p>
      I love creating web applications that solve real life problems with beatiful, fast and functional interfaces. 🚀
    </p>
    <p>
      I'm in ❤️ with Javascript and Typescript either in the client and in the server.
    </p>
    <ul>
      <li>
        <p>{ repositories }</p>
        <p>Repositories on Github 🐙</p>
      </li>
      <li>
        <p>{ twitterFollowers }</p>
        <p>Followers on Twitter where i talk about tech 🤖</p>
      </li>
      <li>
        <p>{ blogEntries }</p>
        <p>Blog entries 🤓</p>
      </li>
      <li>
        <p>{ yearOfExperience }</p>
        <p>Year of Experience 👴🏼</p>
      </li>
    </ul>
  </div>
);