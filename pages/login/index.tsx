import { useEffect } from "react";
import { Login } from "../../src/components";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return <Login />;
};

export default LoginPage;
