// src/components/Banner.js
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: #3cc781;
  color: white;
  padding:80px;
  text-align: center;
`;

function Banner() {
  return (
    <BannerContainer>
      <h1>Agrega tu imagen</h1>
    </BannerContainer>
  );
}

export default Banner;
