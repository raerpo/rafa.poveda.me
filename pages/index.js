import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Description from '../components/Description';
import SocialNetworks from '../components/SocialNetworks';

const Index = ({ blogData }) => {
  return <Layout>
    <Description blogData={blogData}/>
    <SocialNetworks />
  </Layout>
};

Index.getInitialProps = async () => {
  const response = await fetch('https://dev.to/api/articles?username=raerpo', { headers: {
    'api-key': process.env.DEV_TO 
  }});
  const blogData = await response.json();
  return { blogData }
}

export default Index;