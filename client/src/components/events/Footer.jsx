import React from 'react';
import { FooterWrapper, FooterText, FooterLinks, FooterLink, FooterSocial } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSocial as="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </FooterSocial>
      <FooterSocial as="a" href="https://github.com" target="_blank" rel="noopener noreferrer">
        GitHub
      </FooterSocial>
      <FooterSocial as="a" href="mailto:devclub@example.com" target="_blank" rel="noopener noreferrer">
        Email
      </FooterSocial>
      <FooterSocial as="a" href="https://discord.com" target="_blank" rel="noopener noreferrer">
        Discord
      </FooterSocial>
      <FooterText>© 2025 DevClub. Made with ❤️</FooterText>
      <FooterLinks>
        <FooterLink href="https://newtonschool.co" target="_blank" rel="noopener noreferrer">
          Newton School of Technology
        </FooterLink>
        <span>|</span>
        <FooterLink href="https://rishihood.edu.in" target="_blank" rel="noopener noreferrer">
          Rishihood University
        </FooterLink>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
