import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1f2937;
`;

export const GitHubLink = styled.a`
  color: #4b5563;
  &:hover {
    color: #111827;
  }
  display: flex;
  align-items: center;
`;