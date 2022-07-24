import React from 'react';

const User = ({ comments }) => {
  console.log(comments,"comments")
  return (
    <div className=''>
      <div className='mt-2 h-full w-full flex items-center border-gray-200 border p-2 rounded-lg'>
        <div className='flex-grow'>
          <h2 className='text-gray-900 title-font font-medium'>
            {comments?.comment?.text}
          </h2>
          <p className='text-gray-500'>{comments?.commentBy?.userName}</p>
        </div>

        <img
          alt='team'
          className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
          src='https://dummyimage.com/80x80'
        />
      </div>
    </div>
  );
};

export default User;
