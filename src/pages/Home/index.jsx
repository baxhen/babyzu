import React from 'react';
import { FaTag } from 'react-icons/fa';
import {
  PageContainer,
  SecondBackgroundOverlay,
  FirstBackGroundOverlay,
  SectionsContainer,
  Section,
  SpanPromo,
  Title,
  Paragraph,
  ParagraphNote,
  ButtonLink,
  CouponCodeContainer,
  CouponCodeContent,
  ActionContainer,
} from './styles';
import HelmetTitle from '../../components/HelmetTitle';

import hero_bg_green from '../../assets/home/baby-store-hero-bg-blob-green.svg';
import hero_bg_pink from '../../assets/home/baby-store-hero-bg-blob-pink.svg';
// import hero_bg_yellow from '../../assets/home/baby-store-hero-bg-blob-yellow.svg';

const Home = () => {
  return (
    <PageContainer>
      <HelmetTitle title="Home - Baby Store" />
      <FirstBackGroundOverlay url={hero_bg_pink}></FirstBackGroundOverlay>
      <SecondBackgroundOverlay url={hero_bg_green} />
      <SectionsContainer>
        <Section>
          <SpanPromo>
            <FaTag height={14} width={17.5} color="#51AC8F" /> FLAT 30% OFF +
            CASHBACK! *
          </SpanPromo>
          <Title>Baby Essential Fashion & Nursery</Title>
          <Paragraph>
            Fermentum, cursus ultrices porttitor tincidunt suscipit quam
            facilisis sit massa pellentesque mi quis elit elementum tristique
            urna.
          </Paragraph>
          <ParagraphNote>
            * Enim cras quam et nullam risus nec tincidunt mattis nunc.
          </ParagraphNote>
          <ActionContainer>
            <ButtonLink to="/shop">SHOP NOW</ButtonLink>
            <CouponCodeContainer>
              <CouponCodeContent>Use code: BEC30</CouponCodeContent>
            </CouponCodeContainer>
          </ActionContainer>
        </Section>
      </SectionsContainer>
    </PageContainer>
  );
};

export default Home;
