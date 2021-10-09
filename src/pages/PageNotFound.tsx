import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const HeroImage = styled.section`
  max-width: 600px;
  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const PageNotFound = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("/");
    }, 3000);
  });

  return (
    <Container className="center">
      <HeroImage>
        <img src="/images/404.png" alt="404 Illustration" />
      </HeroImage>
    </Container>
  );
};

export default PageNotFound;
