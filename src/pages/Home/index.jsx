import React from 'react';

import { PageContainer, BackgroundOverlay } from './styles';

import hero_bg_green from '../../assets/home/baby-store-hero-bg-blob-green.svg';

const Home = () => {
  return (
    <PageContainer>
      <BackgroundOverlay url={hero_bg_green} />
    </PageContainer>
  );
};

export default Home;
