import { useEffect } from "react";
import { Error } from "../../src/components";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Something went wrong :(";
  }, []);

  return <Error />;
};

export default ErrorPage;
