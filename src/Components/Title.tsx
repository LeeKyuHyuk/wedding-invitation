import React from 'react';
import styled from 'styled-components';
import { WEDDING_DATE, WEDDING_LOCATION, GROOM_NAME, BRIDE_NAME } from '../Config';
import BackgroundVidio from '../Assets/BackgroundVideo.mp4';

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  margin: 0px auto;
  position: relative;
`;

const TitleWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-shadow: -1px 0 #9e9e9e, 0 1px #9e9e9e, 1px 0 #9e9e9e, 0 -1px #9e9e9e;
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
`;

const VideoBackground = styled.video`
  background-color: #aeb8b3 !important;
  opacity: 0.9;
  object-fit: cover;
  object-position: center center;
  width: 100%;
  height: 100%;
  min-height: 480px;
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

const Title = () => {
  return (
    <Layout>
      <VideoBackground autoPlay loop muted playsInline={true}>
        <source src={BackgroundVidio} type="video/mp4" />
      </VideoBackground>
      <TitleWrapper>
        <WeddingInvitation>WEDDING INVITATION</WeddingInvitation>
        <GroomBride>
          {GROOM_NAME} &#38; {BRIDE_NAME}
        </GroomBride>
        <Schedule>
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </Schedule>
      </TitleWrapper>
    </Layout>
  );
};

export default Title;
