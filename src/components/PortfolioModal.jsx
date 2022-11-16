import styled from 'styled-components';
import Img from '../assets/pictures/instagram (1).jpg';
import {FaTwitter, FaGithub} from 'react-icons/fa'
import {TfiWorld} from 'react-icons/tfi'
const ModalStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #0e0e0fb6;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .modal {
    background-color: #ffffff;
    max-width: 600px;
    width: 99%;
    max-height: 530px;
    height: max-content;
    border-radius: 8px;

    h2 {
      padding: 0.5rem;
    }

    .imgBox {
      width: 100%;
      height: 280px;


      img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
        height: max-content;
        aspect-ratio: 1;
      }
    }
    .desc {
      padding: 1rem;

      a {
        color: var(--primary-clr);
        font-weight: 600;
        font-size: 17px;
        letter-spacing: 0.86px;
        text-decoration: underline;
        margin-left: 5px;
      }
    }
    .icons {
      margin: 0 auto;
      width: max-content;
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;

      a{
        font-size: 1.5rem;
        transition: color .3s;

        &:hover{
            color: var(--primary-clr);
        }
      }
    }
  }
`;
function PortfolioModal({ setIsShowModal, item }) {

  return (
    <ModalStyle onClick={() => setIsShowModal(false)}>
      <div className="modal">
        <h2>{item.title}</h2>
        <div className="imgBox">
          <img src={item.img} alt="image" />
        </div>
        <div className="desc">
          <p>
           {item.desc} <a href="">Live Demo</a>
          </p>
        </div>
        <div className="icons">
         <a href={item.gitLink} target="_blank"> <FaTwitter /></a>
         <a href={item.gitLink} target="_blank">   <FaGithub /></a>
         <a href={item.webLink} target="_blank">  
                <TfiWorld />
         </a>

        </div>
      </div>
    </ModalStyle>
  );
}

export default PortfolioModal;
