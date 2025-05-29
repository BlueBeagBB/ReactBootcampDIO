import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HeaderContainer, LogoContainer, Title, GitHubLink } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <FaGithub className="text-4xl mr-3 text-gray-800" />
        <Title>GitHub Wiki Search</Title>
      </LogoContainer>
      <GitHubLink href="https://github.com/" target="_blank">
        <FaExternalLinkAlt className="mr-1" /> GitHub
      </GitHubLink>
    </HeaderContainer>
  );
};

export default Header;