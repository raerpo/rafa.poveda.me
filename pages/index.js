import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Description from '../components/Description';
import SocialNetworks from '../components/SocialNetworks';

const Index = ({mediumJSON}) => {
  return <Layout>
    <Description mediumJSON={mediumJSON}/>
    <SocialNetworks />
  </Layout>
};

Index.getInitialProps = async () => {
  const mediumData = await fetch('https://medium.com/@raerpo/latest?format=json');
  const mediumText = await mediumData.text();
  try {
    return {
      mediumJSON: JSON.parse(mediumText.replace('])}while(1);</x>', ''))
    }
  } catch (error) {
   return error; 
  }
}

export default Index;