import React from 'react';

function Card({ children }) {
  return (
    <div
      className="rounded-xl p-4 border-2 border-solid"
    >
      {children}
    </div>
  );
}

export default Card;
