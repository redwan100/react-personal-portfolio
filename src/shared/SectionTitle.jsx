import styled from 'styled-components';

const SectionTitleStyle = styled.h3`
  position: relative;
  display: inline-block;

  &::before {
    content: '';
    width: 100%;
    height: 7px;
    background-color:  ${({ theme }) => theme.primaryColor};
    position: absolute;
    bottom: 4px;
    left: 0;
    z-index: -1;
  }
`;
function SectionTitle({ title }) {
  return <SectionTitleStyle className="title">{title}</SectionTitleStyle>;
}

export default SectionTitle;
