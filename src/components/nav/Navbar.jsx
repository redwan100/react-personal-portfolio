import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { CgMenuRight } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import Social from '../Social';
import Button from '../../shared/Button';

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.primaryColor};
  height: 65px;
  overflow: hidden;
  border-radius: 10px;
  padding-right: 1rem;
  position: sticky;
  top: 5px;
  left: 0;
  z-index: 1000;

  .home {
    background-color: ${({ theme }) => theme.btnClr};
    width: 65px;
    height: 80px;
    padding: 1.4rem;
    margin-right: 0.5rem;
    transition: all 0.3s;
    color: ${({ theme }) => theme.fontColor} !important;

    &:hover {
      background-color: ${({ theme }) => theme.btnClr};
    }
  }
  .left {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    li {
      a {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 15px;
        transition: 0.2s;
        color: ${({ theme }) => theme.fontColor2};
        &:hover {
          color: ${({ theme }) => theme.actClr};
        }
      }
    }
  }

  .socials {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  .active {
    color: ${({ theme }) => theme.actClr};
    font-weight: bold;
  }

  .close {
    display: none;
  }

  .grid {
    display: none;
  }

  .hbtn1 {
    display: none;
  }

  @media (max-width: 768px) {
    .menu {
      position: fixed;
      width: 300px;
      height: 350px;
      border-radius: 10px;
      background-color: #ffffff69;
      backdrop-filter: blur(10px);
      top: 1rem;
      right: 1rem;
      flex-direction: column;
      row-gap: 1rem;
      align-items: center;
      justify-content: center;
      transform: translateY(-120%);
      transition: all 0.5s;
      z-index: 100;
    }

    .menuActive {
      transform: translateY(0);
      transition: all 0.2s cubic-bezier(0.09, 0.72, 0.165, 1.2);
    }
    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
    }

    .close,
    .hbtn1 {
      display: block;
    }

    .socials {
      display: none;
    }
    .grid {
      display: block;
      cursor: pointer;
    }
  }
`;

function Navbar() {
  const [showNav, setShowNav] = useState(true);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 80);
    });
  }, []);
  return (
    <NavbarStyle style={scroll ? { boxShadow: '0 0 20px rgba(0,0,0,0.2)' } : {}}>
      <div className="left">
        <NavLink to="/" className={(navInfo) => (navInfo.isActive ? 'active' : '')}>
          <AiFillHome className="home" color="black" />
        </NavLink>
        <ul className={!showNav ? 'menu menuActive' : 'menu'}>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li onClick={() => setShowNav(!showNav)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="hbtn1" onClick={() => setShowNav(!showNav)}>
            <NavLink to="/contact">
              <Button text="Hire Me" icon={<FaTelegramPlane />} />
            </NavLink>
          </li>

          <li className="close">
            <GrFormClose size={30} onClick={() => setShowNav(!showNav)} />
          </li>
        </ul>
      </div>

      <div className="socials">
        <Social />
        <NavLink to="/contact">
          <Button text="Hire Me" icon={<FaTelegramPlane />} />
        </NavLink>
      </div>

      <CgMenuRight size={30} className="grid" onClick={() => setShowNav(!showNav)} />
    </NavbarStyle>
  );
}

export default Navbar;
