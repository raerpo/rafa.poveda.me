import Layout from '../components/Layout';
import Butter from 'buttercms';
const butter = Butter('e9ec6296fe93adcfa3629467c1acab4c5b0cc77f');
import format from 'date-fns/format';

const Blog = ({ response }) => {
  const { data: { data: blogData } } = response;
  return <Layout title="Blog">
    { blogData.map(entry => (
      <div key={entry.created}>
        <h2>{ entry.title }</h2>
        <small>{ format(entry.created, 'DD MMM YYYY') }</small>
        <p>{ entry.meta_description }</p>
      </div>
    )) }
  </Layout>
};

Blog.getInitialProps = async () => {
  const response = await butter.post.list();
  return {
    response
  }
}

export default Blog;