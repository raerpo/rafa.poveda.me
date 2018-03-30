import Head from './Head';
import HeaderLinks from './HeaderLinks';
import * as routes from '../routes';
import Link from 'next/link';

const GlobalStyles = () => (<style jsx global>
  {`
     body {
       font-family: 'Ubuntu', sans-serif, arial;
       color: #494C4E;
       -webkit-font-smoothing: antialiased;
       background-color: #f8f7fc;
     }
     .highlight {
       position: relative;
     }
     .highlight:before {
      content: '';
      background-color: rgba(255, 107, 75, .8);
      width: 100%;
      height: .08em;
      position: absolute;
      top: 1em;
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
          <a>🏠</a>
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
      .logo a {
        color: #494C4E;
        font-size: 2em;
      }
    `}
    </style>
    <GlobalStyles />
  </main>
);
