import React from 'react';
import styled from 'styled-components';
import { MdOutlineFileDownload } from 'react-icons/md';
import Person from '../../assets/person.jpg';
import MyDetails from './MyDetails';
import Button from '../../shared/Button';

const SideBar = styled.div`
  background-color: var(--white-clr);
  margin-bottom: 2rem;
  border-radius: 10px;

  .title {
    padding: 1rem;
    h2 {
      text-transform: uppercase;
    }

    p {
      color: gray;
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
    padding: 1.5rem;
  }

  .downBtn{
    margin: 0 auto;
    display: block;
    width: max-content;
    padding: 2rem 0;
  }
`;
function Sidebar() {
  return (
    <SideBar>
      <div className="title">
        <h2>Redwan islam</h2>
        <p>Front-End Developer</p>
      </div>

      <div className="imgBox">
        <img src={Person} alt="hero img" />
      </div>
      <div className="details">
        <MyDetails />
      </div>

      <div className='downBtn'>
        <Button text="Download" icon={<MdOutlineFileDownload />} />
      </div>
    </SideBar>
  );
}

export default Sidebar;
