import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { LuNewspaper } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-left: 20px;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 15px;

    color: grey;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    /* padding: 1.2rem 2.4rem; */
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: blue;
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 23px;
    height:23px;
    color: grey;
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

const Head = styled.span`
    font-size: 14px;
    color: grey;
    font-weight: 500;

`
const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 7rem;
`

function MainNav() {
  return (
    <Wrapper>
    <nav>
      <Head>Menu</Head>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <MdOutlineDashboardCustomize />
            <span>Dashboard</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/joblisting">
            <HiOutlineBriefcase />
            <span>Job Listing</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/resume">
            <LuNewspaper />
            <span>Shortlisted Resume</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/profile">
            <BsBuildings />
            <span>Company Profile</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/document">
            <IoDocumentTextOutline />
            <span>Document</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>


    <nav>
      <Head>Account</Head>
      <NavList>
        <li>
          <StyledNavLink to="/setting">
            <IoSettingsOutline />
            <span>Setting</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signout">
            <PiSignOut />
            <span>Sign Out</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/helpcenter">
            <IoIosHelpCircleOutline />
            <span>Help Center</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
    </Wrapper>
  );
}

export default MainNav;
