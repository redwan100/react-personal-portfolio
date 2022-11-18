import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ErrorStyle = styled.section`
  margin-top: 2rem;
  overflow: hidden;
  background: ${({ theme }) => theme.primaryColor};
  border-radius: 8px;

  .page_404 {
    padding: 40px;
    font-family: 'Arvo', serif;
  }

  .page_404 img {
    width: 100%;
  }

  .four_zero_four_bg {
    background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
    height: 550px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }



  .link_404 {
    color: ${({ theme }) => theme.fontColor};
    padding: 10px 20px;
    background: ${({ theme }) => theme.btnClr};
    margin: 20px 0;
    display: inline-block;
    cursor: pointer;
  }
  .contant_box_404 {
    margin-top: -50px;
    padding: 1rem;
  }
`;

function Error() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/', {
      replace: true,
    });
  };
  return (
    <ErrorStyle className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center font-effect-fire-animation">404</h1>
              </div>

              <div className="contant_box_404">
                <span className="link_404" onClick={goHome}>
                  Go to Home
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorStyle>
  );
}

export default Error;
