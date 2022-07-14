import React from 'react';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className='text-gray-600 body-font border-b-1 border-gray-100 shadow-lg'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            viewBox='0 0 24 24'
          >
            <path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
          </svg>
          <span className='ml-3 text-xl dark:text-gray-300'>Tailblocks</span>
        </a>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
          <a className='mr-5 hover:text-gray-900 dark:text-gray-300'>First Link</a>
          <a className='mr-5 hover:text-gray-900 dark:text-gray-300'>Second Link</a>
          <a className='mr-5 hover:text-gray-900 dark:text-gray-300'>Third Link</a>
          <a className='mr-5 hover:text-gray-900 dark:text-gray-300'>Fourth Link</a>
        </nav>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? (
            <svg
              className='h-4 w-4 text-white mr-4  fill-current'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path d='M256 159.1c-53.02 0-95.1 42.98-95.1 95.1S202.1 351.1 256 351.1s95.1-42.98 95.1-95.1S309 159.1 256 159.1zM509.3 347L446.1 255.1l63.15-91.01c6.332-9.125 1.104-21.74-9.826-23.72l-109-19.7l-19.7-109c-1.975-10.93-14.59-16.16-23.72-9.824L256 65.89L164.1 2.736c-9.125-6.332-21.74-1.107-23.72 9.824L121.6 121.6L12.56 141.3C1.633 143.2-3.596 155.9 2.736 164.1L65.89 256l-63.15 91.01c-6.332 9.125-1.105 21.74 9.824 23.72l109 19.7l19.7 109c1.975 10.93 14.59 16.16 23.72 9.824L256 446.1l91.01 63.15c9.127 6.334 21.75 1.107 23.72-9.822l19.7-109l109-19.7C510.4 368.8 515.6 356.1 509.3 347zM256 383.1c-70.69 0-127.1-57.31-127.1-127.1c0-70.69 57.31-127.1 127.1-127.1s127.1 57.3 127.1 127.1C383.1 326.7 326.7 383.1 256 383.1z' />
            </svg>
          ) : (
            <svg
              className='h-4 w-4 text-black mr-4'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path d='M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z' />
            </svg>
          )}
        </button>
        <button className='inline-flex items-center bg-gray-100 dark:bg-gray-900 dark:text-gray-50 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0'>
          Button
          <svg
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            className='w-4 h-4 ml-1'
            viewBox='0 0 24 24'
          >
            <path d='M5 12h14M12 5l7 7-7 7'></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
