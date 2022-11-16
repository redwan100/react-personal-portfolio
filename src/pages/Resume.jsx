import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ResumeItem from '../components/ResumeItem';
import SectionTitle from '../shared/SectionTitle';

const ResumeStyle = styled.div`
  margin-top: 2rem;
  background-color: var(--white-clr);
  border-radius: 10px;
  padding: 2rem;

  .title {
    margin-bottom: 2rem;
  }
`;
function Resume() {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}>
      <ResumeStyle>
        <SectionTitle title="Resume" />
        <ResumeItem />
      </ResumeStyle>
    </motion.div>
  );
}

export default Resume;
