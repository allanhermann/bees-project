import styled from "styled-components";
import { toRem } from "../../../helpers/toRem";

export const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: ${toRem(305)}rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  gap: 1rem;

  @media (max-width: 600px) {
    font-size: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled.text`
  color: #000000;
`;

export const TextBox = styled.input`
  height: ${toRem(43)}rem;
  width: 100%;

  font-size: 1rem;
  padding-left: ${toRem(12)}rem;

  border: ${toRem(1)}rem solid #d4d4d8;
  border-radius: 0.25rem;

  color: #71717a;

  @media (max-width: 600px) {
    font-size: 0.5rem;
    width: 50%;
    height: ${toRem(21)}rem;
  }
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 0.5rem;
  justify-content: center;
`;

export const Button = styled.button`
  font-size: 1rem;
  color: #ffffff;
  align-self: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: none;
  height: ${toRem(40)}rem;
  width: ${toRem(75)}rem;
  background-color: #5d5fef;

  :hover {
    cursor: pointer;
    border: ${toRem(2)}rem solid darkblue;
  }

  :disabled {
    background-color: #52525b;
    cursor: default;

    :hover {
      border: none;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.5rem;
    height: 50%;
  }
`;
