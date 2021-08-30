import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Divider } from 'antd';
import styled from 'styled-components';
import {
  GALLERY_PHOTO_1,
  GALLERY_PHOTO_2,
  GALLERY_PHOTO_3,
  GALLERY_PHOTO_4,
  GALLERY_PHOTO_5,
  GALLERY_PHOTO_6,
} from '../Images';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.p`
  font-size: 1.7vh;
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const images = [
  {
    original: GALLERY_PHOTO_1,
    thumbnail: GALLERY_PHOTO_1,
  },
  {
    original: GALLERY_PHOTO_2,
    thumbnail: GALLERY_PHOTO_2,
  },
  {
    original: GALLERY_PHOTO_3,
    thumbnail: GALLERY_PHOTO_3,
  },
  {
    original: GALLERY_PHOTO_4,
    thumbnail: GALLERY_PHOTO_4,
  },
  {
    original: GALLERY_PHOTO_5,
    thumbnail: GALLERY_PHOTO_5,
  },
  {
    original: GALLERY_PHOTO_6,
    thumbnail: GALLERY_PHOTO_6,
  },
];

const Gretting = () => {
  return (
    <Wrapper>
      <Divider plain style={{ marginBottom: 32 }}>
        <Title>우리의 아름다운 순간</Title>
      </Divider>
      <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
    </Wrapper>
  );
};

export default Gretting;
