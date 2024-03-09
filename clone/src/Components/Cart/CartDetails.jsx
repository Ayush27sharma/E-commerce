import React from 'react';

const CartDetails = ({ imgUrl, Tittle, Price, quantity, id, removeItem }) => {

  return (
    <div className='card-detail w-56 h-70 border border-slate-400  border-x-slate-200 p-2'>
      <img src={imgUrl} alt='' />
      <h2>{Tittle}</h2>
      <p>{id}</p>
      <p>{Price}</p>
      <p>{quantity}</p>
      <button
        onClick={() => removeItem()}
        className='px-2 py-1 border border-red-300 bg-red-400 rounded'
      >
        Remove Cart
      </button>
    </div>
  );
};

export default CartDetails;
