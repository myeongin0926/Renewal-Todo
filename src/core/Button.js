import { styled } from "styled-components";

export const Button = styled.button`
  position: relative;
  color: ${(props) => (props.active === "true" ? "#232323" : "#000")};
  border: none;
  outline: none;
  background-color: ${(props) => (props.active === "true" ? "white" : "transparent")};
  border-radius: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  padding-left: 20px;
  font-size: 1.8rem;
  display: flex;
  transition: 0.1s;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  span {
    padding-top: 3px;
  }
`;
