import Head from 'next/head';
import Layout from '../components/Layout';
import Description from '../components/Description';

export default () => (
  <div>
    <Head>
      <title>Rafael Poveda - Frontend Dev</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Description />
    </Layout>
  </div>
);