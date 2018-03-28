import Layout from '../components/Layout';
import CVData from '../data/CVData';

export default () => (
  <Layout title="Curriculum Vitae">
    <section className="cv">
      <h1>Nombre</h1>
    </section>
    <style jsx>
      {`
        .cv {
          width: 70%;
          margin: 0 auto;
          background: white;
          padding: 4rem 5rem;
          box-sizing: border-box;
          min-height: 80vh;
        }
      `}
    </style>
  </Layout>
);