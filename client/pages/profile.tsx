import React from 'react';const profile = () => {
  return (
    <div>
      <section className='rounded-3xl border-2 border-red-500 m-8 shadow-xl  p-8 mt-10 hover:shadow-2xl transition-shadow duration-500'>
        <img
          src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
          alt='profile'
          className='rounded-full w-64 h-64 mx-auto object-cover items-center border-4 border-red-400'
        />
        <h1 className='text-center dark:text-white text-3xl font-bold'>pablo</h1>
        <p className='text-center dark:text-white text-xl'>london</p>
      </section>
    </div>
  );
};

export default profile;
