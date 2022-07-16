import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Login } from '../../validator/login';
import { intialValue } from '../../constant/initialValue';
import Textinput from '../common/design/Textinput';
import ButtonField from '../common/design/ButtonField';
import { ILogin } from '../../interface/form/Auth';
import { LoginApi } from '../../api/Auth';
import { toast } from 'react-hot-toast';
import { setCookies } from 'cookies-next';
import Router from 'next/router';
const LoginScreen = () => {
  const onFormSubmit = async (data: ILogin) => {
    const packet = {
      email: data.email,
      password: data.password,
    };
    LoginApi(packet)
      .then((res) => {
        toast.success(res?.data?.message);
        setCookies('token', res.data.token);
        Router.push('/home');
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div>
      <Formik
        initialValues={intialValue.login}
        validationSchema={Login}
        onSubmit={onFormSubmit}
      >
        {(props) => {
          return (
            <Form>
              <div className='mx-auto mt-20 px-4 h-full flex flex-col justify-center align-middle'>
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

export default LoginScreen;
