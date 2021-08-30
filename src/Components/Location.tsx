import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import { LOCATION_IMAGE } from '../Images';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 42px;
`;

const Title = styled.p`
  font-size: 1.7vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  width: 75%;
  max-width: 1024px;
`;

const Location = () => {
  return (
    <Wrapper>
      <Divider plain>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={LOCATION_IMAGE} />
    </Wrapper>
  );
};

export default Location;
