import Link from 'next/link';
import * as routes from '../routes';

export default () => (
  <ul>
    <li><Link><a>Work</a></Link></li>
    <li><Link><a>Skills</a></Link></li>
    <li>
      <Link href={ routes.CV }>
        <a>CV</a>
      </Link>
    </li>
    <li><Link><a>Blog</a></Link></li>
  </ul>
);