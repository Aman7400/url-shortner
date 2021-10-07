import styled from "styled-components";

export const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  /* padding: 2rem; */
  background-color: white;
  width: 70%;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
`;

export const UrlInput = styled.input`
  padding: 2rem;
  border: none;
  background: transparent;
  outline: none;
  width: 80%;
  font-size: 1.5rem;
  font-family: inherit;
  color: #ff0076;

  ::placeholder {
    color: #ff0076;
    font-weight: 100;
  }
`;
export const ShortenLinkButton = styled.button`
  padding: 2rem 1rem;
  width: 20%;
  font-family: inherit;

  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  background: transparent;
  color: #ff0076;
  font-weight: 700;
  font-size: 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 350ms ease-in-out;
  :hover {
    background-color: #ff007730;
  }
`;
