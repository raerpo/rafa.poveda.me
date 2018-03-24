import Link from 'next/link';

const Layout = ({ children }) => (
  <main>
    <header>
      <div className="logo">
        Rafael Poveda
      </div>
      <ul>
        <li><Link><a>Work</a></Link></li>
        <li><Link><a>Skills</a></Link></li>
        <li><Link><a>CV</a></Link></li>
        <li><Link><a>Blog</a></Link></li>
      </ul>
    </header>
    <section>
      {children}
    </section>
  </main>
);

export default Layout;