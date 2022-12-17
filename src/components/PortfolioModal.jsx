import styled from 'styled-components';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { TfiWorld } from 'react-icons/tfi';
import { motion } from 'framer-motion';

const ModalStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.modalBg};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  .modal {
    background-color: ${({ theme }) => theme.background};
    
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
        /* color: ${({ theme }) => theme.fontColor}; */
        font-weight: 600;
        color:#ffc500;
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
      
      
      a {
        font-size: 1.5rem;
        transition: color 0.3s;
        color: ${({ theme }) => theme.fontColor};

        &:hover {
          color: ${({ theme }) => theme.btnClr};
        }
      }
    }
  }
`;
function PortfolioModal({ setIsShowModal, item }) {
  return (
    <ModalStyle onClick={() => setIsShowModal(false)}>
      <motion.div
        className="modal"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}>
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
          <a href={item.gitLink} target="_blank" rel="noreferrer">
            {' '}
            <FaTwitter />
          </a>
          <a href={item.gitLink} target="_blank" rel="noreferrer">
            {' '}
            <FaGithub />
          </a>
          <a href={item.webLink} target="_blank" rel="noreferrer">
            <TfiWorld />
          </a>
        </div>
      </motion.div>
    </ModalStyle>
  );
}

export default PortfolioModal;
