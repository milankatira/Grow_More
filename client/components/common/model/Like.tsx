import React, { useEffect, useState } from 'react';
import { getAlllikes } from '../../../api/Like';
import ButtonField from '../design/ButtonField';

export default function Like({
  showModal,
  setShowModal,
  postId,
}: {
  showModal: boolean;
  setShowModal: (arg: boolean) => void;
  postId: string;
}) {
  const [Likes, setLike] = useState([]);
  useEffect(() => {
    showModal && getAlllikes(postId).then((res) => setLike(res.data.likes));
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
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
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
                <div className='relative p-6 flex flex-row w-full items-center'>
                  <div className='flex flex-row justify-between w-full border-gray-200 border  rounded-lg'>
                    {Likes.map((d):any => {
                      return (
                        <>
                          <div className='w-full mt-2 h-full  flex items-center  p-2'>
                            <img
                              alt='team'
                              className='w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'
                              src='https://dummyimage.com/80x80'
                            />
                            <div className='flex-grow'>
                              <h2 className='text-gray-900 title-font font-medium'></h2>
                              <p className='text-gray-500'>
                                {d?.userId?.userName}
                              </p>
                            </div>
                          </div>

                          <div className='mt-2 flex items-center'>
                            <ButtonField text='follow' />
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
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
