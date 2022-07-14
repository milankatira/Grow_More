import Link from 'next/link';
import React from 'react'

const Mypage = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="px-4 lg:py-12">
          <div className="lg:gap-4 lg:flex">
            <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
              <h1 className="font-bold text-blue-600 text-9xl">404</h1>
              <p className="mb-2 text-2xl font-bold text-center text-gray-800 dark:text-gray-600 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page not found
              </p>
              <p className="mb-8 text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
              <Link href="/">
                <a className="px-6 py-2 text-sm font-semibold text-blue-800 dark:text-white bg-blue-100 dark:bg-gray-800">
                  Go home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mypage;