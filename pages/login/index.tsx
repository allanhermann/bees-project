import { useContext, useEffect } from "react";
import { Login } from "../../src/components";
import { UserContext } from "../context/userContext";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const { userName, setUserName } = useContext(UserContext);

  return <Login />;
};

export default LoginPage;
