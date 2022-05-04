import Image from "next/image";
import styled from "styled-components";
import { toRem } from "../../helpers/toRem";

export const PageContainer = styled.div`
  background-color: #fffef0;
  min-height: 100vh;
  height: 100%;
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4rem;
  padding: ${toRem(100)}rem 15%;

  @media (max-width: 600px) {
    gap: 2rem;
    padding: 2rem 1rem;
  }
`;
