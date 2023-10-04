import React from 'react';

function Spacer({ size }) {
  return <div className={`invisible h-${size || 32}`}>Spacer</div>;
}

export default Spacer;
