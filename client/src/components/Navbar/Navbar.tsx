import styled from "styled-components"
import {Title} from "../Text/Text";
import constants from "../../utils/constants";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
`
const NavLink = styled.li`
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    background: #2b2b2b;
    position: absolute;
    height: 3px;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.2s ease-in-out;
  }

  &:hover::after {
    transform: scale(1);
  }
`
const NavLogo = styled.div`
  user-select: none;
`


const Navbar = () => {
    const onHomeClick = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }
    const onGithubClick = () => window.open(constants.githubRepoUrl, "_blank")
    return <Nav>
        <NavLogo>
            <Title>Dummy Rest</Title>
        </NavLogo>
        <NavLinks>
            <NavLink onClick={onHomeClick}>Home</NavLink>
            <NavLink onClick={onGithubClick}>Github</NavLink>
        </NavLinks>
    </Nav>
}


export default Navbar