import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../shared/SectionTitle';
import skillsData from '../constant/skills';

const SkillStyle = styled.div`
  padding: 1.5rem;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.5rem;
  }

  .item {
    background-color: ${({ theme }) => theme.primaryColorDark};
    padding: 1.5rem;
    border-radius: 7px;
    box-shadow: ${({ theme }) => theme.shadow};
    border: 1px solid ${({ theme }) => theme.borderClr};
  }

  .tit {
    margin-bottom: 0.75rem;
  }

  .dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.btnClr};
    display: inline-block;
  }
  .skill {
    display: flex;
    align-items: center;
    gap: 0.45rem;
    color: ${({ theme }) => theme.descColor};
    font-size: 15px;
    margin-bottom: 0.25rem;
  }

  .title {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;
function Skills() {
  const [skills, setSkills] = useState([...skillsData]);
  return (
    <SkillStyle>
      <SectionTitle title="My Skills" />

      <div className="wrapper">
        {skills.map((skill) => {
          const { id, title, skills } = skill;
          return (
            <div className="item" key={id}>
              <h4 className="tit">{title}</h4>
              <div className="dotWrap">
                {skills.map((sk) => (
                  <li className="skill">
                    <span className="dot" />
                    {sk}
                  </li>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SkillStyle>
  );
}

export default Skills;
