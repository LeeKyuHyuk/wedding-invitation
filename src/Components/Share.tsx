import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Button, Divider, message } from 'antd';
import { MessageFilled, LinkOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
  KAKAOTALK_API_TOKEN,
  KAKAOTALK_SHARE_IMAGE,
  WEDDING_INVITATION_URL,
  GROOM_NAME,
  BRIDE_NAME,
} from '../Config';
import GroovePaper from '../Assets/GroovePaper.png';

declare global {
  interface Window {
    Kakao: any;
  }
}

const Wrapper = styled.div`
  background: #efebe9;
  background-image: url(${GroovePaper});
  padding-left: 42px;
  padding-right: 42px;
  padding-bottom: 42px;
  width: 100%;
  text-align: center;
`;

const Title = styled.p`
  font-size: 2vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const KakaoTalkShareButton = styled(Button)`
  background: #fee500;
  border-color: #fee500;
  color: #181600;
  &:hover {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
  &:focus {
    background-color: #fcf07e !important;
    border-color: #fcf07e !important;
    color: #17160b !important;
  }
`;

const LinkShareButton = styled(Button)`
  background: #53acee;
  border-color: #53acee;
  color: #ffffff;
  &:hover {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
  &:focus {
    background-color: #9fcbed !important;
    border-color: #9fcbed !important;
    color: #ffffff !important;
  }
`;

const Share = () => {
  const [shareCount, setShareCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (shareCount !== 0) {
      window.Kakao.Link.createDefaultButton({
        objectType: 'feed',
        container: '#sendKakao',
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: KAKAOTALK_SHARE_IMAGE,
          link: {
            mobileWebUrl: WEDDING_INVITATION_URL,
            webUrl: WEDDING_INVITATION_URL,
          },
        },
        buttons: [
          {
            title: '청첩장 열기',
            link: {
              mobileWebUrl: WEDDING_INVITATION_URL,
              webUrl: WEDDING_INVITATION_URL,
            },
          },
        ],
        installTalk: true,
      });
      setTimeout(() => {
        document.getElementById('sendKakao')?.click();
        message.success('카카오톡으로 청첩장을 공유합니다!');
      }, 100);
    } else {
      window.Kakao.init(KAKAOTALK_API_TOKEN);
    }
  }, [shareCount]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>청첩장 공유하기</Title>
      </Divider>
      <KakaoTalkShareButton
        style={{ margin: 8 }}
        icon={<MessageFilled />}
        id="sendKakao"
        size="large"
        onClick={() => setShareCount(shareCount + 1)}
      >
        카카오톡으로 공유하기
      </KakaoTalkShareButton>
      <CopyToClipboard text={WEDDING_INVITATION_URL}>
        <LinkShareButton
          style={{ margin: 8 }}
          icon={<LinkOutlined />}
          size="large"
          onClick={() => message.success('청첩장 링크가 복사되었습니다.')}
        >
          링크로 공유하기
        </LinkShareButton>
      </CopyToClipboard>
    </Wrapper>
  );
};

export default Share;
