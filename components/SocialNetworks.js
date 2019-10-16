import Link from 'next/link';

export default () => (
  <ul className="socialNetworks">
    <p>You can see a little bit of my work in these places:</p>
    <li>
      <Link href="https://github.com/raerpo"><a>Github</a></Link>
    </li>
    <li>
      <Link href="https://codepen.io/raerpo"><a>Codepen</a></Link>
    </li>
    <li>
      <Link href="https://codesandbox.io/u/raerpo"><a>CodeSandbox</a></Link>
    </li>
    <li>
      <Link href="https://twitter.com/raerpo"><a>Twitter</a></Link>
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