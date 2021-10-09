import styled from "styled-components";

export const Wrapper = styled.section`
  height: 50vh;

  /* background-color: #ff0076; */
  /* background-image: linear-gradient(90deg, #ff0076 0%, #fbab7e 100%); */
  background-image: url("/images/bg.png");
  background-size: cover;
`;

export const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  letter-spacing: 2px;

  @media (max-width: 780px) {
    font-size: 3rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`;
