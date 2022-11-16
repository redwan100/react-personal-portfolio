import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PortfolioModal from '../components/PortfolioModal';
import portfolioData from '../constant/portfolio';
import SectionTitle from '../shared/SectionTitle';

const PortStyle = styled.div`
  background-color: white;
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
    }
    .input {
      outline: none;
      padding: 2px 5px;
      border-radius: 5px;
      border: 1px solid #7777;
      &:focus {
        border: 1px solid #21e3f1f0;
      }
    }
  }
  .activeColor {
    color: #f4c20d;
  }

  /* TODO: portfolio */
  .portItems {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;

    .pItem {
      border-radius: 6px;
      overflow: hidden;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
      cursor: pointer;

      &:hover ~ desc {
        background-color: gray;
      }
    }

    .desc {
      padding: 0.5rem 1rem;
      background-color: white;
      height: 100%;

      h3 {
        font-size: 15px;
        color: #181717;
      }

      p {
        font-size: 13px;
        color: #403f3f;
      }
    }

    .imgBox {
      height: 260px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .pItem:hover ~ desc {
    background-color: gray !important;
  }

  @media (min-width: 1030px) {
    .portItems {
      grid-template-columns: repeat(3, minmax(210px, 1fr));
    }
  }
`;
// const btns = [...new Set(portfolioData.map((item) => item.group))];
const btns = ['reactJs', 'Bootstrap', 'JavaScript', 'Html Css'];
function Portfolio() {
  const [portfolios, setPortfolios] = useState([...portfolioData]);
  const [portfolioItem, setPortfolioItem] = useState('')
  const [searchTerm, setSearchTerm] = useState('');
  const [btnName, setBtnName] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const handleFilter = (name) => {
    setBtnName(name);
    const filteredItem = portfolioData.filter((item) => item.group === btnName);

    setPortfolios(filteredItem);
  };

  const filterItem = portfolios.filter(
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
    setPortfolioItem(item)
  }

  return (
    <motion.div
    initial={{ x: 1000, opacity:0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: .5, ease: "easeOut" }}>
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
              className={btn === btnName ? 'btn activeColor' : 'btn'}
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
        />
      </div>

      <div className="portItems" >
        {portfolios.map((item) => {
          const { id, img, title, subtitle } = item;
          return (
            <div className="pItem" key={id} onClick = {()=>handleModal(item)}>
              <div className="imgBox">
                <img src={img} alt="" />
              </div>
              <div className="desc">
                <h3>{title}</h3>
                <p>{subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
      {
        isShowModal && <PortfolioModal setIsShowModal={setIsShowModal} item={portfolioItem}/>
      }
    </PortStyle>
    </motion.div>
  );
}

export default Portfolio;
