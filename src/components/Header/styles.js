import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  background: none;
  height: 70px;
  width: 100%;
  position: relative;
  display: block;
  font-size: 16px;
`;
export const HeaderContentContainer = styled.div`
  min-height: 70px;
  max-width: 1240px;
  margin: 0 55px 0 55px;
  padding: 0 20px 0 20px;
  display: flex;
`;
export const HeaderSectionOneContainer = styled.div`
  width: 386px;
  height: 70px;
`;
export const HeaderSectionTwoContainer = styled.div`
  width: 786px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const HeaderLogoContainer = styled.div`
  width: 122px;
  height: 66px;
  padding: 18px 0 16px 0;
  min-height: auto;
  min-width: auto;
`;
export const HeaderLogo = styled.img`
  width: 106px;
  height: 34px;
  cursor: pointer;
  line-height: 16px;
`;

export const NavLinkContainer = styled.div`
  height: 70px;
  width: 489.5px;
  padding: 0 10px 0 0;
  color: #5a5a5a;
`;

export const NavLink = styled(Link)`
  transition: all 0.2s linear 0s;
  padding: 0 16px 0 16px;
  height: 70px;
  width: 77px;
  text-decoration: none;
  text-align: left;
  cursor: pointer;
  color: #3e1f55;
  line-height: 70px;
  &:hover {
    color: #f47c7c;
  }
  font-family: 'Open Sans', sans-serif;
`;

export const BagContainer = styled.div`
  line-height: 70px;
  height: 70px;
  width: 28.8906px;
  padding: 20px 0 15px 10px;
`;

export const Bag = styled.div`
  position: relative;
  height: 28.8906px;
  width: 28.8906px;
  border: 2px solid #f9db60;
  border-radius: 0 0 5px 5px;
  text-align: center;
  cursor: pointer;
  font-size: 13.76px;
  &:after {
    position: absolute;
    content: '${(props) => props.bagItens}';
    top: -23px;
    left: 8px;
    color: #f9db60;
    font-size: 13.76px;
    text-align: center;
    font-weight: 700;
  }
`;
export const BagStrap = styled.span`
  position: absolute;
  height: 11px;
  width: 9px;
  border: 2px solid #f9db60;
  border-bottom: none;
  border-radius: 45% 45% 0 0;
  padding: 0 1px 0 6px;
  top: -8px;
  left: 7px;
`;
