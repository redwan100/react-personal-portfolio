import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BlogStyle = styled.div`
  margin-top: 2rem;
  background-color:  ${({ theme }) => theme.primaryColor};
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
  height: 80vh;
  .blog {
    padding: 5rem 0 8rem 0;
    position: relative;
    h2 {
      font-size: 7rem;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 2px;
      -webkit-text-stroke-color: ${({ theme }) => theme.btnClr};
      font-style: italic;
      font-weight: 700;
    }
    p {
      font-size: 3rem;
      color:  ${({ theme }) => theme.descColor};
      margin-top: -10px;
      transform: translateY(-20px) rotate(-3deg);
      font-family: 'Pacifico', cursive;
    }
  }
`;
function Blog() {
  return (
    <motion.div
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}>
      <BlogStyle>
        <div className="blog">
          <h2 className="font-effect-fire-animation">blog</h2>
          <p className="font-effect-fire-animation"> Comming soon </p>
        </div>
      </BlogStyle>
    </motion.div>
  );
}

export default Blog;
