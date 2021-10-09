import styled from "styled-components";

export const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  /* flex-direction: column; */
  transform: translate(-50%, -50%);
  /* padding: 2rem; */
  background-color: white;
  width: 70%;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 6%);
  @media (max-width: 780px) {
    width: 95%;
    flex-direction: column;
  }
`;

export const UrlInput = styled.input`
  padding: 2rem;
  border: none;
  background: transparent;
  outline: none;
  width: 80%;
  @media (max-width: 780px) {
    width: 100%;
  }
  font-size: 1.5rem;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
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

  @media (max-width: 780px) {
    width: 100%;
  }

  border: none;
  outline: none;
  cursor: pointer;
  display: block;
  background: transparent;
  /* color: #ff0076; */
  font-weight: 700;
  font-size: 1rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 350ms ease-in-out;
  background-image: linear-gradient(90deg, #ff0076 0%, #fbab7e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ErrorMessage = styled.p`
  display: block;
  color: #ff0076;
  font-size: 0.8rem;
  font-family: inherit;
  font-weight: 700;
  padding: 0 1rem;
`;
