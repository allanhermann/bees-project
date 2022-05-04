import Link from "next/link";
import Image from "next/image";
import GoBack from "../../../assets/svg/go-back-arrow.svg";
import { HeaderContainer, HeaderLink, HeaderText } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../../pages/context/userContext";

export const Header = () => {
  const { userName } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Link href="/login">
        <HeaderLink>
          <Image src={GoBack} />
          <HeaderText>Go back</HeaderText>
        </HeaderLink>
      </Link>
      <HeaderText>{userName}</HeaderText>
    </HeaderContainer>
  );
};
