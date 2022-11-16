import { useState } from 'react';
import styled from 'styled-components';
import socialData from '../constant/socials';

const SocialStye = styled.div`
  ul {
    li {
      font-size: 1.5rem;
      a {
        font-size: 1.1rem;
      }
    }
  }
`;
function Social() {
  const [socials, setSocials] = useState([...socialData]);
  return (
    <SocialStye>
      <ul className='sIcons'>
        {socials.map((social) => {
          const { Icon, id, link } = social;
          return (
            <li key={id}>
              <a href={link}>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </SocialStye>
  );
}

export default Social;
