import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContext } from "./context";
import { useState } from "react";

function BeesProject({ Component, pageProps }: AppProps) {
  const [userName, setUserName] = useState<string>("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default BeesProject;
