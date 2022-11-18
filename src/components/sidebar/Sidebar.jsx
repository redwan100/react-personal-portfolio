import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineFileDownload } from 'react-icons/md';
import Typed from 'react-typed';
import { HiOutlineSun } from 'react-icons/hi';
import { BiMoon } from 'react-icons/bi';
import Person from '../../assets/person2.jpg';
import MyDetails from './MyDetails';
import Button from '../../shared/Button';

const SideBar = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2rem;
  border-radius: 10px;
  position: relative;

  .title {
    padding: 1rem;
    h2 {
      text-transform: uppercase;
    }

    p {
      color: ${({ theme }) => theme.descColor};
    }
  }

  .imgBox {
    width: 100%;

    img {
      clip-path: polygon(0 8%, 100% 0%, 100% 95%, 0% 100%);
      width: 100%;
      height: auto;
    }
  }
  .details {
    padding: 1rem 0 0 2rem;
  }

  .downBtn {
    margin: 0 auto;
    display: block;
    width: max-content;
    padding: 0 0 1rem;
  }
  .theme {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.descColor};
    display: grid;
    place-content: center;
    cursor: pointer;
    color: ${({ theme }) => theme.background};
    transition: all .2s;

  }
`;
function Sidebar({ toggleThem }) {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
    toggleThem()
  };
  return (
    <SideBar className="sidebar">
      <div className="theme" onClick={handleMode}>
      {mode ? <HiOutlineSun /> : <BiMoon />}
      </div>
      <div className="title">
        <h2>Redwan islam</h2>
        <p>
          <Typed
            strings={['Front-End Web Developer.', 'Web Designer']}
            loop
            typeSpeed={40}
            backSpeed={20}
            backDelay={500}
            smartBackspace
            cursorChar="&#9825;"
          />
        </p>
      </div>

      <div className="imgBox">
        <img src={Person} alt="hero img" />
      </div>
      <div className="details">
        <MyDetails />
      </div>

      <div className="downBtn">
        <Button text="Download" icon={<MdOutlineFileDownload />} />
      </div>
    </SideBar>
  );
}

export default Sidebar;
