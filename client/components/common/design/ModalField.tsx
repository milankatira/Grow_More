import React, { useEffect, useState } from 'react';
import { getComments } from '../../../api/comments';
import User from './user';

export default function Modal({ showModal, setShowModal, postId }) {
  // const [showModal, setShowModal] = React.useState(false);
  const [Comments, setComments] = useState([]);
  console.log(Comments, 'Comments');
  useEffect(() => {
    showModal &&
      getComments(postId._id).then((res) => setComments(res.data.comments));
  }, [showModal]);

  return (
    <>
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
            onClick={() => setShowModal(false)}
          >
            <div className='relative w-full my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b'>
                  <h3 className='text-base text-blue-500 font-semibold'>
                    All likes
                  </h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex flex-row w-full'>
                  {/* <div className="flex flex-wrap -m-2"> */}
                  {/* <div className='flex flex-wrap'> */}
                  <h1 className='text-black w-1/2'>{postId?.postText}</h1>
                  <div className='w-1/2'>
                    {Comments.map((d) => {
                      return (
                        <>
                          <User comments={d} />
                        </>
                      );
                      // <User />
                      // <User />
                    })}
                  </div>
                  {/* </div> */}
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className='bg-emerald-500 text-white bg-green-400 active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
