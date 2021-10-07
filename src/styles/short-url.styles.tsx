import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 1rem;
  max-width: 700px;
  margin-top: 5rem;
  border: 1px solid #ff0076;
  background-color: #ff007710;
  border-radius: 10px;
  cursor: pointer;
`;

export const ShortUrlText = styled.p`
  color: #ff0076;
  margin-right: 0.5rem;
`;

export const CopyToClip = styled.span`
  font-size: 2rem;
  transition: all 150ms ease-in-out;
  :hover {
    transform: scale(1.075);
  }
`;
