import { styled, keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1rem;
    position: relative;

    @media (max-width: 815px) {
        align-items: flex-start;
    }
`;

export const ImageContainer = styled.div`
`;

export const Image = styled.img`
    @media (max-width: 815px) {
        width: 130px;
        height: auto;
    }
`;

export const NavLinkText = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  font-family: ${({ theme }) => theme.typography.font};
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;


export const NavLinksContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xxl};

  @media (max-width: 815px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xxl};
    padding: 0;
  }
`;

export const NavLink = styled.div`
  display: flex;
  position: relative;
    gap: 0.40rem;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.typography.sizes.md};

    @media (max-width: 815px) {
        gap: 0.75rem;
        font-size: ${({ theme }) => theme.typography.sizes.xl};
    }

    &:hover {
    color: ${({ theme }) => theme.colors.primary};

     
  }
    &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary}; /* Uses text color */
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.75rem;
  position: absolute;
  top: 1rem;
  right: 0.1rem;

  @media (max-width: 815px) {
    display: block;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const FullScreenMenu = styled.div`
display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 815px) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ menuOpen }) => (menuOpen ? "1" : "0")};
  transform: ${({ menuOpen }) => (menuOpen ? "translateX(0)" : "translateX(100%)")};
  animation: ${({ menuOpen }) => (menuOpen ? slideIn : slideOut)} 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  pointer-events: ${({ menuOpen }) => (menuOpen ? "auto" : "none")};
  }
`;

export const DesktopNavLinksContainer = styled.ul`
  display: flex;
  list-style: none;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 815px) {
    display: none;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;
`;