import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

// SIDEBAR
export const Sidebar = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  position: sticky;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.accent};
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  margin: 2rem 0 4rem 0;
`;

export const NavLink = styled(RouterNavLink)`
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  padding: 10px 15px;
  margin: 5px 0;
  border-radius: 5px;

  &.active {
    background-color: ${(props) => props.theme.colors.secondary};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;
