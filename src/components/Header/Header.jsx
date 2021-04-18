import React from 'react';

import {
  HeaderContainer,
  HeaderLogo,
  HeaderContentContainer,
  HeaderLogoContainer,
  HeaderSectionOneContainer,
  HeaderSectionTwoContainer,
  NavLink,
  NavLinkContainer,
  Bag,
  BagContainer,
  BagStrap,
} from './styles';

import logo from '../../assets/baby-store-logo.svg';
const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <HeaderSectionOneContainer>
          <HeaderLogoContainer>
            <span
              style={{ padding: '0 16px 0 0', height: '34px', width: '122px' }}
            >
              <HeaderLogo src={logo} alt="logo" />
            </span>
          </HeaderLogoContainer>
        </HeaderSectionOneContainer>
        <HeaderSectionTwoContainer>
          <NavLinkContainer>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Shop</NavLink>
            <NavLink to="/">About Us</NavLink>
            <NavLink to="/">Testimonial</NavLink>
            <NavLink to="/">Contact Us</NavLink>
          </NavLinkContainer>
          <BagContainer>
            <Bag bagItens={2} title="View Your Shopping Cart">
              <BagStrap />
            </Bag>
          </BagContainer>
        </HeaderSectionTwoContainer>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;
