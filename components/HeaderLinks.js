import Link from 'next/link';
import * as routes from '../routes';

export default () => (
  <ul>
    <li>
      <Link href={ routes.CV }>
        CV
      </Link>
    </li>
    <li>
      <Link href={ routes.BLOG }>
        Blog
      </Link>
    </li>
    <style jsx>
    {`
      ul {
        list-style: none;
        display: flex;
        margin: 0px;
        padding: 0px;
      }
      ul > li {
        margin-left: 1em;
      }
      ul > li > a {
        color: #f53a11;
      }
    `}
    </style>
  </ul>
);