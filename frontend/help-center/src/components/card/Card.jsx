import React from 'react';

function Card({ title, description }) {
  return (
    <div className='flex flex-col bg-gray-100 border border-gray-300 rounded-xl w-[340px] h-[150px]'>
      <div className='text-gray pt-2 ps-3 text-lg font-bold'>{title}</div>
      <hr className='text-gray-300 my-1' />
      <div className='ps-3 max-w-[340px] overflow-wrap break-words pe-2'>
        {description}
      </div>
    </div>
  );
}

export default Card;
