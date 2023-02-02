import React, { useEffect } from "react";
import Link from "next/link";
import ReactGA from "react-ga";

import Head from "./Head";
import HeaderLinks from "./HeaderLinks";
import * as routes from "routes";

const GlobalStyles = () => (
  <style jsx global>
    {`
      body {
        font-family: "Ubuntu", sans-serif, arial;
        color: #494c4e;
        -webkit-font-smoothing: antialiased;
        background-color: #f8f7fc;
      }
      .highlight {
        position: relative;
      }
      .highlight:before {
        content: "";
        background-color: rgba(255, 107, 75, 0.8);
        width: 100%;
        height: 0.08em;
        position: absolute;
        top: 1em;
      }
    `}
  </style>
);

const buildTitle = (title) => {
  const defaultTitle = "Rafael Poveda - Frontend Dev";
  return title ? `${title} - ${defaultTitle}` : defaultTitle;
};

const Layout = ({ children, title }) => {
  useEffect(() => {
    ReactGA.initialize("UA-61536258-1");
    ReactGA.send("pageview");
  }, []);
  return (
    <main>
      <Head title={buildTitle(title)} />
      <header>
        <div className="logo">
          <Link href={routes.HOME}>
            🏠
          </Link>
        </div>
        <HeaderLinks />
      </header>
      <section>{children}</section>
      <style jsx>
        {`
          header {
            display: flex;
            justify-content: space-between;
            padding: 2rem;
            text-transform: uppercase;
          }
          .logo a {
            color: #494c4e;
            font-size: 2em;
          }
          @media print {
            header {
              display: none;
            }
          }
        `}
      </style>
      <GlobalStyles />
    </main>
  );
};

export default Layout;
