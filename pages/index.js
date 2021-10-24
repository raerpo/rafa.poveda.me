import fetch from "isomorphic-unfetch";
import Layout from "components/Layout";
import Description from "components/Description";
import SocialNetworks from "components/SocialNetworks";

const Home = ({ blogPosts, githubData, yearsOfExperience }) => {
  const { followers, public_repos: repositories } = githubData;
  return (
    <Layout>
      <Description
        repositories={repositories}
        blogPosts={blogPosts.length}
        githubFollowers={followers}
        yearsOfExperience={yearsOfExperience}
      />
      <SocialNetworks />
    </Layout>
  );
};

export default Home;

export async function getServerSideProps() {
  const devToPromise = fetch("https://dev.to/api/articles?username=raerpo", {
    headers: {
      "api-key": process.env.DEV_TO,
    },
  }).then((res) => res.json());
  const githubPromise = fetch("https://api.github.com/users/raerpo").then(
    (res) => res.json()
  );
  // How many year from March 2013
  const yearOfExperience = new Promise((resolve) => {
    return resolve(
      (
        (new Date() - new Date(2013, 2, 1)) /
        (1000 * 60 * 60 * 24 * 365)
      ).toFixed(2)
    );
  });

  return Promise.all([devToPromise, githubPromise, yearOfExperience]).then(
    (data) => {
      const [blogPosts, githubData, yearsOfExperience] = data;
      return { props: { blogPosts, githubData, yearsOfExperience } };
    }
  );
}
