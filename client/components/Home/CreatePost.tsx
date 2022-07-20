import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { createPost } from '../../api/Post';
import { usePostcontext } from '../../context/store/Post';

const CreatePost = () => {
  const [text, settext] = useState<string>('');
  const { PostData, Post_api } = usePostcontext();

  const CreatePostHandler = () => {
    if (text == '') {
      return toast.error('jnnnnn');
    }
    const packet = {
      postText: text,
      postType: 'text',
    };
    createPost(packet).then(
      (res) => settext(''),
      Post_api.MyPost(),
    );
  };

  return (
    <div className='bg-white dark:bg-black p-2 rounded-xl'>
      <div className='flex flex-row'>
        <div className='w-12'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
            alt='profile'
            className='rounded-full w-10 h-10 mt-4'
          />
        </div>

        <textarea
          name='mk'
          id=''
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder='what`s up?'
          className='placeholder-gray-600 dark:placeholder-gray-300 bg-gray-100 dark:bg-gray-800 p-4 ml-2 w-full rounded-lg'
          cols={20}
          rows={4}
        ></textarea>
      </div>
      <hr className='border mt-2' />
      <div className='flex justify-between mt-4'>
        <button className='p-1 dark:bg-blue-500 bg-gray-200 text-black dark:text-white rounded-md flex items-center pr-3'>
          <svg
            className='text-black dark:text-white w-4 mr-3 h-4 ml-3 fill-current'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z' />
          </svg>{' '}
          media
        </button>
        <button
          onClick={CreatePostHandler}
          className='p-1  dark:bg-blue-500  bg-gray-200 text-black dark:text-white rounded-md flex items-center pl-3'
        >
          public
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            className='text-black dark:text-white w-4 mr-3 h-4 ml-3 fill-current'
          >
            <path d='M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
