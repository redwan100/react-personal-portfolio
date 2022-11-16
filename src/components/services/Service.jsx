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
    background-color: var(--white-clr);
    padding: 1.25rem;
    border-radius: 7px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

    h3{
        margin-bottom:.5rem ;
    }
    .icon {
      margin-bottom: .75rem;
    }
  }

  .para {
    text-align: inherit;
    color: #221f1f;
  }

  .title{
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
