import styled from "styled-components";

export const Wrapper = styled.section`
  height: 50vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const Info = styled.section`
  color: grey;
  text-align: center;
  a,
  span {
    text-decoration: none;
    color: #ff0076;
    margin: auto.25rem;
  }
  span {
    font-size: 1.25rem;

    animation: grow 550ms linear infinite;
  }
`;
