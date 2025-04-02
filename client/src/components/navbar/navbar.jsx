import React, { useState } from 'react'

import { NavbarContainer, ImageContainer, Image, NavLinksContainer, NavLink, NavLinkText, HamburgerIcon, FullScreenMenu, DesktopNavLinksContainer, CloseButton } from "./navbar.styles";

import logo from '../../../public/images/logo.png'

import { GrHomeRounded } from "react-icons/gr";
import { TbUserCode } from "react-icons/tb";
import { IoGitMergeOutline, IoWaterOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer>
      <ImageContainer to={'/'}>
        <Image src={logo} alt="DevClub Logo" />
      </ImageContainer>
      <HamburgerIcon onClick={toggleMenu}>
        <RxHamburgerMenu />
      </HamburgerIcon>
      <DesktopNavLinksContainer>
        <NavLink>
          <GrHomeRounded />
          <NavLinkText to={'/'}>Home</NavLinkText>
        </NavLink>
        <NavLink onClick={() => scrollToSection('topProjects')}>
          <IoGitMergeOutline />
          <NavLinkText>Projects</NavLinkText>
        </NavLink>
        <NavLink>
          <SlCalender />
          <NavLinkText to={'/events'}>Events</NavLinkText>
        </NavLink>
        <NavLink>
          <TbUserCode />
          <NavLinkText to={'/about'}>About Us</NavLinkText>
        </NavLink>
      </DesktopNavLinksContainer>
      <FullScreenMenu menuOpen={menuOpen}>
        <CloseButton onClick={toggleMenu}>
          <RxCross1 />
        </CloseButton>
        <NavLinksContainer>
          <NavLink onClick={toggleMenu}>
            <GrHomeRounded />
            <NavLinkText to={'/'}>Home</NavLinkText>
          </NavLink>
          <NavLink onClick={() => { scrollToSection('topProjects'); toggleMenu(); }}>
            <IoGitMergeOutline />
            <NavLinkText>Projects</NavLinkText>
          </NavLink>
          <NavLink onClick={toggleMenu}>
            <BsGear />
            <NavLinkText to={'/achievements'}>Achievements</NavLinkText>
          </NavLink>
          <NavLink onClick={toggleMenu}>
            <SlCalender />
            <NavLinkText to={'/events'}>Events</NavLinkText>
          </NavLink>
          <NavLink onClick={toggleMenu}>
            <IoWaterOutline />
            <NavLinkText to={'/resources'}>Resources</NavLinkText>
          </NavLink>
          <NavLink onClick={toggleMenu}>
            <TbUserCode />
            <NavLinkText to={'/about'}>About Us</NavLinkText>
          </NavLink>
        </NavLinksContainer>
      </FullScreenMenu>

    </NavbarContainer>
  )
}

export default Navbar