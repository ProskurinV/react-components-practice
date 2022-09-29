import React from 'react';

export default function Controls({ onIncrement, onDecrement }) {
  return (
    <div>
      <button type="button" onClick={onIncrement}>
        Increment+1
      </button>
      <button type="button" onClick={onDecrement}>
        Decrement-1
      </button>
    </div>
  );
}
