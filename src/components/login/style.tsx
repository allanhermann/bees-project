import styled from "styled-components";
import { toRem } from "../../helpers/toRem";

export const PageContainer = styled.div`
  background-color: #f2ec54;
  min-height: 100%;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;

  @media (min-width: 600px) {
    height: ${toRem(120)}rem;
    width: ${toRem(120)}rem;
  }

  @media (min-width: 1200px) {
    height: ${toRem(278)}rem;
    width: ${toRem(278)}rem;
  }
`;
