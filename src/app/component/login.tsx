import Box from '@mui/material/Box'
import React from 'react';
import Link from 'next/link';
export default function Login() {

    return (
        <div className=" font-[sans-serif]  max-w-xl flex items-center mx-auto h-screen p-4">
            <div className='bg-neutral-300 rounded-2xl w-full py-6 px-6 sm:px-16"' >
                <form className=" w-full py-6 px-6 sm:px-16">
                    <div className="mb-6 items-center justify-centers">
                        <h3 className="text-2xl font-bold">Login</h3>
                    </div>
                    <div className='mb-6'>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" id="email">
                                Email
                            </label>
                            <div className='relative flex  items-center shadow appearance-none border rounded gap-2 p-2 bg-neutral-200'>
                                <Box
                                    component='img'
                                    src='/assets/icon/email.svg'
                                    width={24}
                                    height={24}
                                />
                                <input className="w-full bg-neutral-200 outline-blue-500 px-4 rounded-md" id="email " type="email" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" id='password'>
                            Password
                        </label>
                        <div className='flex items-center shadow appearance-none border  rounded gap-2 p-2 bg-neutral-200 '>
                            <Box
                                component='img'
                                src='/assets/icon/password.svg'
                                width={24}
                                height={24}
                            />
                            <input className="w-full bg-neutral-200 outline-blue-500 px-4" id="password" type="password" placeholder="Enter your password" />
                            <Box
                                component='img'
                                src='/assets/icon/eye-hide.svg'
                                width={24}
                                height={24}
                            />
                        </div>

                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign In
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <div className='w-full flex items-center justify-center pb-5'>
                    <p>OR</p>
                </div>
                <div className='flex justify-center items-center pb-5'>
                    {/* !-- Facebook --> */}
                    <span className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:bg-indigo-100  [&>svg]:border-2  [&>svg]:border-indigo-400 [&>svg]:rounded-full  [&>svg]:p-2 [&>svg]:m-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 320 512">
                            <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                    </span>
                    {/* <!-- Instagram --> */}
                    <span className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:bg-red-100  [&>svg]:border-2  [&>svg]:border-red-500 [&>svg]:rounded-full  [&>svg]:p-2 [&>svg]:m-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
                            <path
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </span>
                    {/* <!-- Google --> */}
                    <span className="[&>svg]:h-10 [&>svg]:w-10 [&>svg]:bg-purple-100  [&>svg]:border-2  [&>svg]:border-purple-400 [&>svg]:rounded-full  [&>svg]:p-2 [&>svg]:m-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 488 512">
                            <path
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                        </svg>
                    </span>
                </div>
                <p className="text-center text-gray-500 text-xs">
                    Not a member yet? <Link className='text-blue-800 hover:text-blue-900 hover:underline' href='/register'>Register now </Link>
                </p>
            </div>
            <div>
                <Box
                    component='img'
                    src='assets/image/image 21.png'
                    position='absolute'
                    bottom={0}
                    zIndex={-1}
                    left={0}
                    className='w-60 sm:w-96 md:w-1/2 '


                />
                <Box
                    component='img'
                    src='assets/image/image 22.png'
                    position='absolute'
                    zIndex={-1}
                    bottom={0}
                    right={0}
                    className='w-60 sm:w-96 md:w-1/2 '

                />
            </div>
        </div>

    );
}