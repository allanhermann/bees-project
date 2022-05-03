import { PageContainer, ImageContainer } from "./style";

import Bee from "../../assets/Images/bee.png";
import Image from "next/image";
import { Form } from "./partials/Form";

export const Login = () => {
  return (
    <PageContainer>
      <Form />

      <ImageContainer>
        <Image src={Bee} alt="Bee" layout="fill" />
      </ImageContainer>
    </PageContainer>
  );
};
