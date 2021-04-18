import React from 'react';

import { PageContainer, BackgroundOverlay } from './styles';
import HelmetTitle from '../../components/HelmetTitle';

import hero_bg_green from '../../assets/home/baby-store-hero-bg-blob-green.svg';

const Home = () => {
  return (
    <PageContainer>
      <HelmetTitle title="Home - Baby Store" />
      <BackgroundOverlay url={hero_bg_green} />
    </PageContainer>
  );
};

export default Home;
