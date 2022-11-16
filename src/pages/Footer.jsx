import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: #262525;
  padding: .75rem 1.1rem;
  border-radius: 5px;
  color: #ececec;
  margin-top: 2rem;

  .title{
    font-size: 13px;
  }
  .name {
    font-size: 1.1rem;
    color: var(--white-clr);
    text-transform: uppercase;
  }

  span{
    letter-spacing:1px;
  }

  
`;

function Footer() {
  return (
    <FooterStyle>
      <p className="name">Redwan</p>
      <p className="title">
        Designed <span className="font-effect-fire-animation">&</span> Developed by <span className="font-effect-fire-animation">Redwan islam .</span>
      </p>
    </FooterStyle>
  );
}

export default Footer;
