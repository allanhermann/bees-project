import { createContext } from "react";

interface IContextProps {
  userName: string;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
}

const defaultState = {
  userName: "",
};

export const UserContext = createContext<IContextProps>(defaultState);
