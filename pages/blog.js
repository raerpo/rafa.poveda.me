import { useEffect } from "react";

import { BLOG } from "routes";

const Blog = () => {
  useEffect(() => {
    window.location.href = BLOG;
  }, []);
  return <p>Redirecting...</p>;
};

export default Blog;
