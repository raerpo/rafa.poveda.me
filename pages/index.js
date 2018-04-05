import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Description from '../components/Description';
import SocialNetworks from '../components/SocialNetworks';

const Index = (props) => {
  return <Layout>
    <Description />
    <SocialNetworks />
  </Layout>
};

export default Index;