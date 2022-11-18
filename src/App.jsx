import styled, { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import GlobalStyle from './GlobalStyle';
import Footer from './pages/Footer';
import Router from './routes/Router';

const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2rem;

  .left {
    flex: 1;
  }
  .right {
    flex: 2;
  }

  @media (max-width: 968px) {
    flex-direction: column;
  }

  @media (min-width: 980px) {
    gap: 1;
    .sidebar {
      width: 330px;
      margin: 0 auto;
    }
  }
`;

const lightTheme = {
  background: '#f2f1f2',
  primaryColor: '#ffffff',
  btnClr: '#FFC500',
  fontColor: '#111111f5',
  fontWhite: '#fafafa',
  descColor: '#5d5d5d',
  lineClr: '#5d5d5d',
  actClr: '#ffc500',
  shadow: '0px 0px 70px -13px rgba(0,0,0,0.27)',
  modalBg: 'rgba(0, 0, 0, 0.768)',
};
const darkTheme = {
  background: '#2c2c2c',
  primaryColor: '#5c594f',
  btnClr: '#32302c',
  fontColor: '#eeeeee',
  descColor: '#cdcdcd',
  lineClr: '#acacacc5',
  actClr: '#eee',
  shadow: '0px 0px 70px -13px rgba(228, 228, 228, 0.334)',
  modalBg: 'rgba(147, 147, 147, 0.73)',
};
function App() {
  const [selectTheme, setSelectTheme] = useState('light');

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
  };

  useEffect(() => {
    const locolTheme = window.localStorage.getItem('theme');
    locolTheme && setSelectTheme(locolTheme);
  }, []);

  const toggleThem = () => {
    selectTheme === 'light' ? setSelectTheme('dark') : setSelectTheme('light');
    setMode(!false);
  };
  return (
    <ThemeProvider theme={selectTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppStyle className="container ">
        <div className="left">
          <Sidebar toggleThem={toggleThem} />
        </div>
        <div className="right">
          <Router />
          <Footer />
        </div>
      </AppStyle>
    </ThemeProvider>
  );
}

export default App;
