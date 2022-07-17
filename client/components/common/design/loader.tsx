import React from 'react';

const Loader = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <div
          className='spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full'
          role='status'
        >
        </div>
      </div>
    </div>
  );
};

export default Loader;
