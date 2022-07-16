import React from 'react';
import CreatePost from '../components/Home/createPost';
import Post from '../components/Home/Post';

const home = () => {
  return (
    <div className='flex flex-row bg-gray-100 dark:bg-gray-900 overflow-hidden'>
      <section className='sm:w-1/5 w-0'>mk</section>

      <section className='sm:w-3/5 w-full p-4 m-2 rounded-lg'>
        <CreatePost />
        {/* user post */}
        <section className='overflow-y-scroll h-96 mt-4'>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </section>
      </section>

      <section className='sm:w-1/5 w-0'>
        {/* notification */}
        <div className='mt-10 m-2 dark:bg-black bg-white rounded-2xl'>
          <h1 className='text-center font-bold'>Notifications</h1>

          <div className='flex items-center p-2'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='profile'
              className='rounded-full w-10 h-10'
            />
            <h1 className='ml-2'>
              <span className='font-bold'>Pablo </span>
              Created a post
              <span className='font-bold'> 10hrs</span>
            </h1>
          </div>

          <div className='flex items-center p-2'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='profile'
              className='rounded-full w-10 h-10'
            />
            <h1 className='ml-2'>
              <span className='font-bold'>Pablo </span>
              Created a post
              <span className='font-bold'> 10hrs</span>
            </h1>
          </div>

          <div className='flex items-center p-2'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='profile'
              className='rounded-full w-10 h-10'
            />
            <h1 className='ml-2'>
              <span className='font-bold'>Pablo </span>
              Created a post
              <span className='font-bold'> 10hrs</span>
            </h1>
          </div>
        </div>
        {/* suggested user */}

        <div className='mt-10 m-2 dark:bg-black bg-white rounded-2xl'>
          <h1 className='text-center font-bold'>Suggested</h1>

          <div className='flex items-center p-2'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='profile'
              className='rounded-full w-10 h-10'
            />
            <div>
              <h1 className='ml-2 font-bold'>Pablo</h1>
              <h1 className='ml-2 text-gray-500'>@Pablo</h1>
            </div>
            <button className='ml-auto mr-2 p-2 bg-blue-500 rounded-lg text-white'>
              {' '}
              Follow{' '}
            </button>
          </div>

          <div className='flex items-center p-2'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='profile'
              className='rounded-full w-10 h-10'
            />
            <h1 className='ml-2'>
              <span className='font-bold'>Pablo </span>
              Created a post
              <span className='font-bold'> 10hrs</span>
            </h1>
          </div>

          <div className='flex items-center p-2'>
            <img
              src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
              alt='profile'
              className='rounded-full w-10 h-10'
            />
            <h1 className='ml-2'>
              <span className='font-bold'>Pablo </span>
              Created a post
              <span className='font-bold'> 10hrs</span>
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
