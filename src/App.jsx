import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import GlobalStyle from './GlobalStyle';
import Footer from './pages/Footer';
import Router from './routes/Router';

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
  @media (max-width: 968px) {
    flex-direction: column;
  }
  .left{
    flex: 1;
  }
  .right{
    flex: 2;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyle className="container ">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Router />
          <Footer />
        </div>
      </AppStyle>
    </>
  );
}

export default App;
