import React from 'react';
import styled from 'styled-components';
import Ptext from '../../shared/Ptext';
import SectionTitle from '../../shared/SectionTitle';
import Service from '../services/Service';

const AboutStyle = styled.div`
  background-color: ${({ theme }) => theme.primaryColor};
  padding: 1.5rem;
  
  .title{
    margin-bottom: 1rem;
  }
  .para{
    margin-bottom: 1.5rem;
    color: ${({theme}) => theme.descColor};
  }

`;
function AboutMe() {
  return (
    <>
      <AboutStyle>
        <SectionTitle title="About Me" />
        <Ptext
          text="Hello Sir/Madam my name is Redwan Islam a Front-End Developer. I have been studying web
        design and development since 2018 when I took my first web development class in high school.
        I have studied and practiced graphic and web design to further my knowledge of the entire
        process of building a web app. As a developer and entrepreneur, I believe in passion,
        quality, ethics, and values that bring success. I love what I do and I'm quite confident in
        my skillset."
        />
        <Ptext text="I'm here to create your new site or landing page. My goal is to create a professional and attractive landing page or site that will beat your competitor's website. As a Front-End Developer I created a lot of different websites for our clients using HTML, CSS, Bootstrap, ReactJS, Material UI, and JavaScript to built the sites. Check my portfolio there i already shared all of projects that done by me. The things I learned by myself became the vast majority of what I know today." />
      </AboutStyle>

      <Service />
    </>
  );
}

export default AboutMe;
