import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PortfolioModal from '../components/PortfolioModal';
import portfolioData from '../constant/portfolio';
import SectionTitle from '../shared/SectionTitle';
import PortfolioItem from '../components/PortfolioItem';

const PortStyle = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  margin-top: 2rem;
  border-radius: 6px;
  padding: 1.5rem;
  position: relative;
  .btnGrp {
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;

    .btn {
      border: none;
      outline: none;
      background: none;
      margin-right: 10px;
      font-size: 16px;
      cursor: pointer;
      color: #949292;
      position: relative;


     &::after{
    content:'';
    width: 100%;
    height: 2px;
    background: #ece512a6;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 0;
    z-index: 1;
    transition: .3s ease;
   }

   &:hover{
    ::after{
      width: 100%;
    }
   }
      
    }
    .input {
      outline: none;
      padding: 2px 5px;
      border-radius: 5px;
      background: transparent;
      border: 1px solid ${({ theme }) => theme.fontColor};
      color: ${({ theme }) => theme.fontColor};
      ::placeholder {
        color: ${({ theme }) => theme.modalBg};
      }
      &:focus {
        border: 1px solid #0cd9e8ed;
      }
    }
  }
  .activeColor {
    color: ${({ theme }) => theme.actClr} !important;
    position: relative;

   &::after{
    content:'';
    width: 105%;
    height: 2px;
    background: #dcd50a;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
   }
  }



  /* TODO: portfolio */
  .portItems {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1.5rem;

    .pItem {
      border-radius: 6px;
      overflow: hidden;
      box-shadow: ${({ theme }) => theme.shadow};
    }

    .desc {
      padding: 0.5rem 1rem;
      background-color: ${({ theme }) => theme.primaryColorDark};
      height: 100%;
      border-radius: 0 0 6px 6px;

      h3 {
        font-size: 15px;
        color: ${({ theme }) => theme.fontColor};
      }

      p {
        font-size: 13px;
        color: ${({ theme }) => theme.descColor};
      }
    }

    .imgBox {
      width: 100%;
      height: 260px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (min-width: 1030px) {
    .portItems {
      grid-template-columns: repeat(3, minmax(210px, 1fr));
    }
  }
`;

const btns = ['reactJs', 'Bootstrap', 'JavaScript', 'Html Css'];
function Portfolio() {
  const inputRef = useRef();
  const [portfolios, setPortfolios] = useState(portfolioData);
  const [portfolioItem, setPortfolioItem] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [btnName, setBtnName] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);

  const handleFilter = (name) => {
    const filteredItem = portfolioData.filter((item) => item.group === name);

    setPortfolios(filteredItem);
    setBtnName(name);
  };

  const filterItem = portfolioData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.group.toLowerCase().includes(searchTerm.toLowerCase()) === searchTerm.toLowerCase()
  );
  const handleChange = (e) => {
    setPortfolios(filterItem);
    setSearchTerm(e.target.value);
  };

  const handleModal = (item) => {
    setIsShowModal(true);
    setPortfolioItem(item);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <PortStyle>
        <SectionTitle title="Portfolio" />
        <div className="btnGrp">
          <div>
            <button
              type="button"
              className="btn activeColor"
              onClick={() => setPortfolios(portfolioData)}>
              All
            </button>
            {btns.map((btn, index) => (
              <button
                key={index}
                type="button"
                className={btn === btnName ? 'btn activeColor active' : 'btn'}
                onClick={() => handleFilter(btn)}>
                {btn}
              </button>
            ))}
          </div>

          <input
            className="input"
            type="text"
            placeholder="Search here.."
            value={searchTerm}
            onChange={handleChange}
            ref={inputRef}
          />
        </div>

        <div className="portItems">
          {portfolios.map((item) => (
            <motion.div
              className="pItem"
              key={item.id}
              onClick={() => handleModal(item)}
              initial={{ x: 50, opacity: 0, scale: 0.3 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}>
              <PortfolioItem {...item} />
            </motion.div>
          ))}
        </div>
        {isShowModal && <PortfolioModal setIsShowModal={setIsShowModal} item={portfolioItem} />}
      </PortStyle>
    </motion.div>
  );
}

export default Portfolio;
