import styled from "styled-components";
import { toRem } from "../../helpers/toRem";

export const ErrorContainer = styled.div`
  background-color: #f2ec54;
  min-height: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${toRem(50)}rem;

  @media (max-width: 1280px) {
    gap: ${toRem(20)}rem;
  }

  @media (max-width: 500px) {
    gap: ${toRem(10)}rem;
  }
`;

export const ErrorText = styled.text`
  font-size: ${toRem(30)}rem;

  @media (max-width: 1280px) {
    font-size: ${toRem(20)}rem;
  }

  @media (max-width: 500px) {
    font-size: ${toRem(15)}rem;
  }

  @media (max-width: 350px) {
    font-size: ${toRem(10)}rem;
  }
`;

export const ImageContainer = styled.div`
  height: ${toRem(120)}rem;
  width: ${toRem(120)}rem;
`;
