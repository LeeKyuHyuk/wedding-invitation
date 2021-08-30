import React from 'react';
import { Divider } from 'antd';
import styled from 'styled-components';
import {
  GROOM_NAME,
  GROOM_FATHER_NAME,
  GROOM_MOTHER_NAME,
  BRIDE_NAME,
  BRIDE_FATHER_NAME,
  BRIDE_MOTHER_NAME,
} from '../Config';

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

const Content = styled.p`
  font-size: 1.5vh;
  line-height: 1.75;
  opacity: 0.75;
  margin-bottom: 16px;
`;

const GroomBride = styled.p`
  font-size: 1.5vh;
  line-height: 1.75;
  opacity: 0.85;
  margin-bottom: 16px;
`;

const Gretting = () => {
  return (
    <Wrapper>
      <Divider plain>
        <Title>결혼합니다</Title>
      </Divider>
      <Content>
        서로 마주 보며 다져온 사랑을
        <br />
        이제 함께 한곳을 바라보며 걸어갈 수 있는
        <br />큰 사랑으로 키우고자 합니다.
        <br />
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
        <br />
        앞날을 축복해 주시면 감사하겠습니다.
      </Content>
      <GroomBride>
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장남 {BRIDE_NAME}
      </GroomBride>
    </Wrapper>
  );
};

export default Gretting;
