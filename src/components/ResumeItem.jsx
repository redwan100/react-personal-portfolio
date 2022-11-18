import styled from 'styled-components';
import { IoMdBriefcase } from 'react-icons/io';
import { FaGraduationCap } from 'react-icons/fa';
import workingData, { educationData } from '../constant/resume';

const ResItem = styled.div`
  .wrapper {
    display: flex;
    gap: 1rem;
  }
  .left,
  .right {
    position: relative;
  }
  .line {
    width: 1.4px;
    height: 100%;
    background-color:  ${({ theme }) => theme.lineClr};
    position: absolute;
    left: 7px;
    top: 0px;
    z-index: 1;
  }
  li {
    position: relative;
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid  ${({ theme }) => theme.btnClr};
    position: absolute;
    top: 10px;
    left: -20px;
    background-color:  ${({ theme }) => theme.primaryColor};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.primaryColor};
    z-index: 4;
  }

  .icon {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    padding: 0.65rem;
    background-color: ${({ theme }) => theme.btnClr};
    box-shadow: 0 0 0 5px white;
    z-index: 5;
  }

  .work {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: -14px;
    margin-bottom: 2rem;
    z-index: 3;

    h2 {
      font-weight: 600;
      font-size: 20px;
    }
  }

  .desc {
    h3 {
      font-weight: 600;
      margin-bottom: 0.25rem;
      font-size: 18px;
    }
    span {
      font-size: 12px;
    }
    p {
      margin-top: 5px;
      color:  ${({ theme }) => theme.descColor};
    }
  }


  @media (max-width: 768px){
    .wrapper{
      flex-direction: column;
      row-gap: 2rem;
    }
  }
`;


function ResumeItem() {
  return (
    <ResItem>
      <div className="wrapper">
        {/* TODO: Work  */}

        <div className="left">
          <div className="work">
            <IoMdBriefcase className="icon" size={35} />

            <h2>Working History</h2>
          </div>
          <div className="line" />
          {workingData.map((item) => {
            const { id, title, desc, date } = item;
            return (
              <li key={id}>
                <span className="dot" />
                <div className="desc">
                  <h3>{title}</h3>
                  <span>{date}</span>
                  <p>{desc}</p>
                </div>
              </li>
            );
          })}
        </div>

        {/* TODO: Education  */}
        <div className="right">
          <div className="work">
            <FaGraduationCap className="icon" size={35} />

            <h2>Education History</h2>
          </div>
          <div className="line" />
          {educationData.map((item) => {
            const { id, title, desc, date } = item;
            return (
              <li key={id}>
                <span className="dot" />
                <div className="desc">
                  <h3>{title}</h3>
                  <span>{date}</span>
                  <p>{desc}</p>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </ResItem>
  );
}

export default ResumeItem;
