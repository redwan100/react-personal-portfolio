import styled from 'styled-components';

const PItemStyle = styled.div`
  position: relative;
 

  .overlay {
    position: absolute;
    display: grid;
    place-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4c4a4aa8;
    transform: scale(0);
    transition: background 2s ease;
    z-index: 10;
  }

  .imgBox {
    overflow: hidden;
  }
  img {
    transition: all 0.3s ease-in-out;
  }
  .imgBox:hover {
    img {
      transform: scale(1.2);
    }

    .overlay {
      transform: scale(1);
    }
  }

  .expand {
    position: relative;
    color: white;
    cursor: pointer;
  }
`;
function PortfolioItem({ img, title, subtitle }) {
  return (
    <PItemStyle className="main__card">
      <div className="imgBox">
        <img src={img} alt="" />
      </div>
      <div className="desc">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </PItemStyle>
  );
}

export default PortfolioItem;
