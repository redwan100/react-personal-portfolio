import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../../shared/SectionTitle';
import data from '../../constant/service';
import Ptext from '../../shared/Ptext';

const Services = styled.div`
  padding: 1.5rem;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
  }

  .item {
    position: relative;
    background-color: ${({ theme }) => theme.primaryColorDark};
    padding: 1.25rem;
    border-radius: 7px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 10px 20px 0px;
    border: 1px solid ${({ theme }) => theme.borderClr};
    transition: 0.3s ease;
    z-index: 2;

    h3 {
      margin-bottom: 0.5rem;
    }
    .icon {
      margin-bottom: 0.75rem;
    }
  }

  .para {
    text-align: inherit;
    color: ${({ theme }) => theme.descColor};
  }

  .title {
    margin-bottom: 1.5rem;
    font-size: 1.7rem;
  }
`;
function Service() {
  const [servData, setServData] = useState([...data]);
  return (
    <Services>
      <SectionTitle title="My Services" />
      <div className="wrapper">
        {servData.map((item) => {
          const { id, title, desc, Icon } = item;
          return (
            <div key={id} className="item">
              <Icon size={40} className="icon" />

              <h3>{title}</h3>
              <Ptext text={desc} />
            </div>
          );
        })}
      </div>
    </Services>
  );
}

export default Service;
