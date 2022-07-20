import React from 'react';
import { Likepost, DeletePost, RemoveLike } from '../../api/Post';
import { usePostcontext } from '../../context/store/Post';

const Post = ({ data }) => {
  const { PostData, Post_api } = usePostcontext();
  const userId = '62d292d9986237fa1716b205';
  const likePost = (id: string) => {
    Likepost(id).then((res) => Post_api.MyPost());
  };

  const removelike = (id: string) => {
    RemoveLike(id).then((res) => Post_api.MyPost());
  };

  const DeletePostHandler = (id: string) => {
    DeletePost(id).then((res) => Post_api.MyPost());
  };
  return (
    <>
      <div className='w-full mt-4 dark:bg-black bg-white p-2 rounded-lg'>
        <div className='flex flex-row rounded overflow-hidden'>
          <img
            className='block h-10 w-10 rounded-full flex-none bg-cover'
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
          />
          <div className=' px-4 flex flex-col justify-between leading-normal w-full'>
            <h1 className='text-xl font-bold flex items-center'>
              pablo <span className='-mt-3 mx-2'> . </span>{' '}
              <span className='font-medium text-xs'>1hr</span>
            </h1>
            <div
              className='flex justify-end -mt-6 w-full'
              onClick={() => DeletePostHandler(data._id)}
            >
              DELETE
            </div>
            <p className='text-sm text-gray-700 dark:text-gray-400'>@pablo</p>
            <p>{data.postText}</p>

            <div className='flex flex-row items-center'>
              {data.likes &&
              data.likes.filter((e: any) => e.userId == userId).length > 0 ? (
                <svg
                  onClick={() => removelike(data._id)}
                  className='h-4 w-4 text-red-700 mr-4 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path d='M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z' />
                </svg>
              ) : (
                <svg
                  onClick={() => likePost(data._id)}
                  className='h-4 w-4 text-black dark:text-white mr-4 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 512 512'
                >
                  <path d='M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z' />
                </svg>
              )}
              <p className='ml-2 font-bold'>{data.likes.length} Like</p>
            </div>

            <div className='flex flex-row rounded-3xl items-center p-2 w-full'>
              <img
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                alt='profile'
                className='block h-10 w-10 rounded-full flex-none bg-cover'
              />

              <svg
                className='text-black dark:text-white w-6 h-6 ml-3 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path d='M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z' />
              </svg>

              <input type='text' className='ml-2 p-2 rounded-lg w-full' />

              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
                className='h-8 w-8 text-black dark:text-white mr-4 fill-current ml-2'
              >
                <path d='M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
