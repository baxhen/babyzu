import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  height: 2000px;
`;
export const SectionsContainer = styled.div`
  width: 1200px;
  margin-left: 67px;
  display: flex;
`;
export const Section = styled.div`
  padding-top: 90px;
  width: 600px;
`;

export const FirstBackGroundOverlay = styled.div`
  background-color: #fff;
  background-image: url(https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-bg-blob-pink.svg);
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 60vw auto;
  opacity: 1;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
`;
export const SecondBackgroundOverlay = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: 20vw auto;
  opacity: 1;
  transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
`;

export const SpanPromo = styled.span`
  font-family: 'Nunito', sans-serif !important;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 24.1429px;
  text-decoration: none solid rgb(81, 172, 143);
  text-align: left;
  text-transform: uppercase;
  word-spacing: 0px;
  color: #51ac8f;
  height: 24px;
  width: 60px;
  padding: 0 0 0 8px;
`;

export const Title = styled.h1`
  padding: 19px 0 0 7px;
  font-family: 'Sriracha', handwriting;
  font-size: 74px;
  font-weight: 400;
  line-height: 81.4px;
  word-spacing: 0px;
  color: #3e1f55;
  height: 162px;
  width: 600px;
  word-wrap: break-word;
`;

export const Paragraph = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 29.7143px;
  text-decoration: none solid rgb(90, 90, 90);
  word-spacing: 0px;
  color: #5a5a5a;
  height: 58px;
  width: 515px;
  margin: 39px 0 16px 7px;
`;

export const ParagraphNote = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 29.7143px;
  text-decoration: none solid rgb(162, 162, 162);
  word-spacing: 0px;
  color: #a2a2a2;
  height: 29px;
  width: 512px;
  margin: 20px 0 36px 7px;
  display: block;
`;

export const ActionContainer = styled.div`
  display: flex;
  margin: 0 0 0 7px;
`;

export const ButtonLink = styled(Link)`
  padding: 17px 24px 17px 24px;
  background-color: #f47c7c;
  text-decoration: none;
  cursor: pointer;
  border-radius: 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2.1px;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  word-spacing: 0px;
  transition: all 0.3s ease 0s;
  color: white;
  height: 49px;
  width: 142px;
  &:hover {
    background-color: #51ac8f;
  }
`;
export const CouponCodeContainer = styled.div`
  height: 55px;
  width: 148.313px;
  border-bottom: 1px dashed #f47c7c;
  padding-top: 15px;
  margin-left: 40px;
`;

export const CouponCodeContent = styled.h5`
  text-align: left;
  font-family: Sriracha, handwriting;
  font-size: 20px;
  line-height: 22px;
  text-decoration: none solid rgb(244, 124, 124);
  word-spacing: 0px;
  height: 22px;
  width: 148.313px;
  font-weight: 400;
  color: #f47c7c;
`;
