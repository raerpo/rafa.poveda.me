import Head from './Head';
import HeaderLinks from './HeaderLinks';
import * as routes from '../routes';
import Link from 'next/link';

const GlobalStyles = () => (<style jsx global>
  {`
     body{
       font-family: 'Ubuntu', sans-serif, arial;
       background-color: #dddded;
     }
  `}
</style>);

const buildTitle = (title) => {
  const defaultTitle = "Rafael Poveda - Frontend Dev";
  return title ? `${title} - ${defaultTitle}` : defaultTitle;
}

export default ({ children, title }) => (
  <main>
    <Head title={ buildTitle(title) }/>
    <header>
      <div className="logo">
        <Link href={ routes.HOME }>
          <a>Rafael Poveda</a>
        </Link>
      </div>
      <HeaderLinks />
    </header>
    <section>
      {children}
    </section>
    <style jsx>
    {`
      header {
        display: flex;
        justify-content: space-between;
        padding: 2rem;
        text-transform: uppercase;
      }
    `}
    </style>
    <GlobalStyles />
  </main>
);
