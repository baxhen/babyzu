import styled from 'styled-components';

export const PageContainer = styled.div``;
export const BackgroundOverlay = styled.div`
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
