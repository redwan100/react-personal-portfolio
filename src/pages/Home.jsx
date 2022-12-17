import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutMe from '../components/About/AboutMe';
import Skills from '../components/Skills';


const HomeStyle = styled.div`
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.primaryColor};
  backdrop-filter: blur(20px);
  border-radius: 7px;
  overflow: hidden;
`;
function Home() {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>

      <HomeStyle>
        <div>
          <AboutMe />
          <Skills />
        </div>
      </HomeStyle>
    </motion.div>
  );
}

export default Home;
