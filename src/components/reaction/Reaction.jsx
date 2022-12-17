import React, { useState } from 'react';

import styled from 'styled-components';

const ReactStyle = styled.div`
  padding: 1rem;
  background-color: teal;
  width: max-content;
  span {
    margin: 1rem;
    cursor: pointer;
  }

  .icon {
    color: #ededed;
  }

  .active {
    color: crimson;
  }
`;

const reaction = [
  {
    id: 1,
    type: 'Like',
  },
  {
    id: 2,
    type: 'Dislike',
  },
];

function Reaction() {
  const [reacts, setReacts] = useState(reaction);
  const [selected, setSelected] = useState(null);

  const handleReact = (id) => {
    const filterItem = reacts.filter((react) => react.id === id);
    setSelected(filterItem);
  };

  return (
    <ReactStyle>
      {reacts.map((react) => (
        <span
           className={selected === react ? 'active icon' : 'icon'}
          key={react.id}
          onClick={() => handleReact(react.id)}>
          {react.type}
        </span>
      ))}
    </ReactStyle>
  );
}

export default Reaction;
