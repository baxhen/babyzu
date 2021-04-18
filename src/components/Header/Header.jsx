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
  HeaderSpanLogo,
} from './styles';

import logo from '../../assets/baby-store-logo.svg';
const Header = () => {
  const navLinks = [
    { to: '/', name: 'Home' },
    { to: '/shop', name: 'Shop' },
    { to: '/about-us', name: 'About Us' },
    { to: '/testimonial', name: 'Testimonial' },
    { to: '/contact-us', name: 'Contact Us' },
  ];
  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <HeaderSectionOneContainer>
          <HeaderLogoContainer>
            <HeaderSpanLogo>
              <HeaderLogo src={logo} alt="logo" />
            </HeaderSpanLogo>
          </HeaderLogoContainer>
        </HeaderSectionOneContainer>
        <HeaderSectionTwoContainer>
          <NavLinkContainer>
            {navLinks.map(({ to, name }) => (
              <NavLink key={name} to={to}>
                {name}
              </NavLink>
            ))}
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
