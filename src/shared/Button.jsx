import styled from 'styled-components';

const ButtonStyle = styled.button`
  background-color: var(--primary-clr);
  border: none;
  outline: none;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.5rem 0.35rem 0.75rem;
  border-radius: 20px;
  cursor: pointer;

  .icon {
    background-color: var(--white-clr);
    width: 25px;
    height: 25px;
    padding: 0.25rem;
    border-radius: 50%;
  }
`;

function Button({ text = 'title', icon }) {
  return (
    <ButtonStyle className="btn">
      {text}
      <span className="icon">{icon}</span>
    </ButtonStyle>
  );
}

export default Button;
