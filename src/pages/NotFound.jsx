import { Helmet } from "react-helmet-async";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | SAAV</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1>404 – Page Not Found</h1>
    </>
  );
};

export default NotFound;
