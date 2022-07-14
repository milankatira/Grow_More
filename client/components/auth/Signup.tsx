import React from 'react';
import { Formik, Field, Form } from 'formik';
import axios from 'axios';
import { Signup } from '../../validator/signup';
import { intialValue } from '../../constant/initialValue';
import Textinput from '../common/design/Textinput';
import ButtonField from '../common/design/ButtonField';
import { Isignup } from '../../interface/form/Auth';
const SignUp = () => {

  const onFormSubmit = async (data: Isignup) => {
    const packet = {
      email: data.email,
      password: data.password,
    };
    axios
      .post('http://localhost:4000/api/register', { ...packet })
      .then((res) => {
        // toast.success(res?.data?.message);
        // const serialized = cookie.serialize('token', res?.data?.token, {
        //   httpOnly: false,
        //   secure: process.env.MODE_ENV !== 'development',
        //   sameSite: 'strict',
        //   maxAge: 60 * 60 * 24 * 1, // 1 day
        //   path: '/',
        // });
        // //  ("Set-Cookie", serialized);
        // Router.push('/myprofile');
      })
      .catch((err) => {
        console.log(err);
        // toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div>
      <Formik
        initialValues={intialValue.signup}
        validationSchema={Signup}
        onSubmit={onFormSubmit}
      >
        {(props) => {
          return (
            <Form>
              <div className='mx-auto mt-4 px-4 h-full flex flex-col justify-center align-middle'>
                <div className='flex content-center items-center justify-center h-full'>
                  <div className='w-full lg:w-4/12 px-4'>
                    <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 dark:bg-gray-800 border-0'>
                      <div className='rounded-t mb-0 px-6 py-6'>
                        <div className='btn-wrapper text-center font-bold text-xl  dark:text-white'>
                          Welcome
                        </div>
                        <hr className='mt-6 border-b-1 border-gray-300 dark:border-blue-300' />
                      </div>
                      <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                        <div>
                          <div className='relative w-full mb-3'>
                            <Textinput
                              text='userName'
                              type='text'
                              name='userName'
                              error={
                                props.touched &&
                                props.touched.userName &&
                                props.errors.userName
                              }
                              placeholder='userName'
                            />
                          </div>{' '}
                          <div className='relative w-full mb-3'>
                            <Textinput
                              text='name'
                              type='text'
                              name='name'
                              error={
                                props.touched &&
                                props.touched.name &&
                                props.errors.name
                              }
                              placeholder='name'
                            />
                          </div>{' '}
                          <div className='relative w-full mb-3'>
                            <Textinput
                              text='phone'
                              type='number'
                              name='phone'
                              error={
                                props.touched &&
                                props.touched.phone &&
                                props.errors.phone
                              }
                              placeholder='phone number'
                            />
                          </div>
                          <div className='relative w-full mb-3'>
                            <Textinput
                              text='email'
                              type='email'
                              name='email'
                              error={
                                props.touched &&
                                props.touched.email &&
                                props.errors.email
                              }
                              placeholder='Email address'
                            />
                          </div>
                          <div className='relative w-full mb-3'>
                            <Textinput
                              text='password'
                              name='password'
                              type='password'
                              placeholder='password'
                              error={
                                props.touched &&
                                props.touched.password &&
                                props.errors.password
                              }
                            />
                          </div>
                          {/* <div>
                            <label className='inline-flex items-center cursor-pointer'>
                              <input
                                id='customCheckLogin'
                                type='checkbox'
                                defaultChecked
                                className='form-checkbox border-0 rounded text-gray-600 ml-1 w-5 h-5 ease-linear transition-all duration-150'
                              />
                              <span className='ml-2 text-sm font-semibold text-gray-600'>
                                Remember me
                              </span>
                            </label>
                          </div> */}
                          <div className='text-center mt-6'>
                            <ButtonField text='Signup' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
