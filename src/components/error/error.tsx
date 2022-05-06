import Bee from "../../assets/Images/bee.png";
import Image from "next/image";
import { ErrorContainer, ErrorText, ImageContainer } from "./style";
import Link from "next/link";

export const Error = () => {
  return (
    <ErrorContainer>
      <ErrorText>Something went wrong :(</ErrorText>
      <ErrorText>
        {<Link href="/login">Click here</Link>} to go back to the login page
      </ErrorText>
      <ImageContainer>
        <Image src={Bee} alt="Bee" />
      </ImageContainer>
    </ErrorContainer>
  );
};
