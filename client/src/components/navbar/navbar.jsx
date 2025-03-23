import React, { useState } from 'react'

import { NavbarContainer, ImageContainer, Image, NavLinkText, NavLinksContainer, NavLink, HamburgerIcon, FullScreenMenu, DesktopNavLinksContainer, CloseButton } from "./navbar.styles";

import logo from '../../../public/images/logo.png'
import { GrHomeRounded } from "react-icons/gr";
import { RiQuestionMark } from "react-icons/ri";
import { IoGitMergeOutline, IoWaterOutline } from "react-icons/io5";
import { BsGear } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <NavbarContainer>
      <ImageContainer>
        <Image src={logo} alt="DevClub Logo" />
      </ImageContainer>
      <HamburgerIcon onClick={toggleMenu}>
        <RxHamburgerMenu />
      </HamburgerIcon>
      <FullScreenMenu menuOpen={menuOpen}>
        <CloseButton onClick={toggleMenu}>
          <RxCross1 />
        </CloseButton>
        <NavLinksContainer>
          <NavLink onClick={toggleMenu}>
            <GrHomeRounded />
            <NavLinkText to={'/'}>Home</NavLinkText>
          </NavLink>
          <NavLink onClick={toggleMenu}>
            <RiQuestionMark />
            <NavLinkText to={'/about'}>About Us</NavLinkText>
          </NavLink>
          <NavLink onClick={toggleMenu}>
            <IoGitMergeOutline />
            <NavLinkText to={'/projects'}>Projects</NavLinkText>
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
        </NavLinksContainer>
      </FullScreenMenu>
      <DesktopNavLinksContainer>
        <NavLink>
          <GrHomeRounded />
          <NavLinkText to={'/'}>Home</NavLinkText>
        </NavLink>
        <NavLink>
          <RiQuestionMark />
          <NavLinkText to={'/about'}>About Us</NavLinkText>
        </NavLink>
        <NavLink>
          <IoGitMergeOutline />
          <NavLinkText to={'/projects'}>Projects</NavLinkText>
        </NavLink>
        <NavLink>
          <BsGear />
          <NavLinkText to={'/achievements'}>Achievements</NavLinkText>
        </NavLink>
        <NavLink>
          <SlCalender />
          <NavLinkText to={'/events'}>Events</NavLinkText>
        </NavLink>
        <NavLink>
          <IoWaterOutline />
          <NavLinkText to={'/resources'}>Resources</NavLinkText>
        </NavLink>
      </DesktopNavLinksContainer>
    </NavbarContainer>
  )
}

export default Navbar