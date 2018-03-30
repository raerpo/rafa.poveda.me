import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Description from '../components/Description';
import SocialNetworks from '../components/SocialNetworks';

const Index = (props) => {
  return <Layout>
    <Description {...props} />
    <SocialNetworks />
  </Layout>
};

Index.getInitialProps = async () => {
  const resGithub = await fetch('https://api.github.com/users/raerpo');
  const jsonGithub = await resGithub.json();
  const resTwitter = await fetch('http://api.twittercounter.com?twitter_id=2690456491&apikey=39f870f9caaf999f77f877f6346f1cd6');
  const jsonTwitter = await resTwitter.json();
  // How many year from March 2013
  const yearOfExperience = ((new Date() - new Date(2013, 2, 1)) / (1000 * 60 * 60 * 24 * 365)).toFixed(2);
  return {
    repositories: jsonGithub.public_repos, 
    twitterFollowers: jsonTwitter.followers_current, 
    blogEntries: 10, 
    yearOfExperience
  }
};

export default Index;