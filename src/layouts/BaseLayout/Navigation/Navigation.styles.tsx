import styled from "styled-components";

import { Link as RouterLink } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  background: var(--light-gray);
  border-bottom: 1px solid var(--gray);
  color: var(--dark);
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`

export const Link = styled(RouterLink)`
  color: var(--dark);
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  
  &:hover {
    opacity: 0.6;
  }
`
