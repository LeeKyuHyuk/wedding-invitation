import React from 'react';
import styled from 'styled-components';
import { WEDDING_DATE, WEDDING_LOCATION, GROOM_NAME, BRIDE_NAME } from '../Config';
import { WEDDING_INVITATION_MAIN_PHOTO } from '../Images';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 42px;
`;

const WeddingInvitation = styled.p`
  font-size: 1.5vh;
  opacity: 0.45;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 3.5vh;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 16px;
`;

const Schedule = styled.p`
  font-size: 2vh;
  opacity: 0.65;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 85%;
  max-width: 1024px;
`;

const Title = () => {
  return (
    <Wrapper>
      <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
      <GroomBride>
        {GROOM_NAME} ♥ {BRIDE_NAME}
      </GroomBride>
      <Schedule>
        {WEDDING_DATE}
        <br />
        {WEDDING_LOCATION}
      </Schedule>
      <Image src={WEDDING_INVITATION_MAIN_PHOTO} />
    </Wrapper>
  );
};

export default Title;
