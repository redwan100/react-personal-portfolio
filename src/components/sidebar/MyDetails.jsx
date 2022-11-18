import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const Details = styled.div`
  padding-top: 1rem;
  .item {
    position: relative;
    .line {
      width: 2px;
      height: 110%;
      background-color:  ${({ theme }) => theme.lineClr};
      display: block;
      border-radius: 20px;
      position: absolute;
      top: -10px;
      left: 3px;
      z-index: 1;
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 1rem;

      h5{
        color: ${({theme}) => theme.descColor};
        margin-right:7px ;
      }

      span{
        color: ${({theme}) => theme.fontColor};
        font-size: 14px;
      }

      .dot {
        width: 8px;
        height: 8px;
        border: 2px solid  ${({ theme }) => theme.btnClr};;
        border-radius: 50%;
        background-color: ${({theme}) => theme.background};
        box-shadow: 0 0 0 5px ${({theme})=> theme.primaryColor};
        display: inline-block;
        z-index: 2;
        margin-right: .75rem;
      }
    }
  }

  .user {
    width: 45px;
    height: 45px;
    background-color:  ${({ theme }) => theme.btnClr};;
    border-radius: 50%;
    position: absolute;
    top: -55px;
    left: -16px;
    z-index: 2;
    padding: 0.75rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
`;
function MyDetails() {
  return (
    <Details>
      <div className="item">
        <FaUser size={30} className="user" />
        <span className="line" />
        <li>
          <span className="dot" />
          <h5>Name:</h5> <span>Redwan</span>
        </li>
        <li>
          <span className="dot" />
          <h5>Title:</h5> <span>Front-End Developer</span>
        </li>
        <li>
          <span className="dot" />
          <h5>Email:</h5> <span>redwanislam2760@gmail.com</span>
        </li>
        <li>
          <span className="dot" />
          <h5>Phone :</h5><span>+880 1965182760</span>
        </li>
        <li>
          <span className="dot" />
          <h5>Skype:</h5> 
          <span>
            <a href="#">Start Chat</a>
          </span>
        </li>
      </div>
    </Details>
  );
}

export default MyDetails;
