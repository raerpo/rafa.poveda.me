import Link from 'next/link';

export default () => (
  <ul className="socialNetworks">
    <p>You can see a little bit of my work in these places:</p>
    <li>
      <Link><a href="https://github.com/raerpo">Github</a></Link>
    </li>
    <li>
      <Link><a href="https://codepen.io/raerpo">Codepen</a></Link>
    </li>
    <li>
      <Link><a href="https://codesandbox.io/u/raerpo">CodeSandbox</a></Link>
    </li>
    <li>
      <Link><a href="https://twitter.com/raerpo">Twitter</a></Link>
    </li>
    <style jsx>
    {`
      .socialNetworks {
        list-style: none;
        margin: 5em 0 2em 0;
        padding: 0px;
        width: 100%;
        text-align: center;
      }
      .socialNetworks li {
        display: inline-block;
        margin-right: 2em;
      }
      .socialNetworks li:last-child {
        margin-right: 0;
      }
      .socialNetworks >   li > a{
        color: #f53a11;
      }
    `}
    </style>
  </ul>
);