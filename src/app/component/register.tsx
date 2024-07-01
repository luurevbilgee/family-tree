import Box from '@mui/material/Box'
export default function SignUp() {
    return (
        <div className="font-[sans-serif]  max-w-xl flex items-center mx-auto h-screen p-4">
            <div className="bg-neutral-300 rounded-2xl w-full py-6 px-6 sm:px-16">
                <form className="">
                    <div className="mb-6">
                        <h3 className="text-2xl font-bold">Create an account</h3>
                    </div>

                    <div className="space-y-6">
                        <div className='grid columns-2 grid-flow-col gap-2'>
                            <div>
                                <label className="text-gray-700 text-sm font-bold mb-2 block">First name</label>
                                <div className="relative flex items-center ">
                                    <input name="firstname" type="text" required className=" bg-neutral-200 border w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter first name" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-bold mb-2 block">Last name</label>
                                <div className="relative flex items-center ">
                                    <input name="lastname" type="text" required className=" bg-neutral-200 border w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter last name" />
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                        <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                        <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                    </svg>
                                </div>
                            </div>


                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
                            <div className="relative flex items-center">
                                <input name="email" type="email" required className="text-gray-800 bg-neutral-200 border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div>
                            <label className="text-gray-800 text-sm mb-2 block">Password</label>
                            <div className="relative flex items-center">
                                <input name="password" type="password" required className="text-gray-800 bg-neutral-200 border border-gray-300 w-full text-sm px-4 py-2.5 rounded-md outline-blue-500" placeholder="Enter password" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                            <label id="remember-me" className="ml-3 block text-sm text-gray-800">
                                I accept the <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1">Terms and Conditions</a>
                            </label>
                        </div>
                    </div>

                    <div className="!mt-12">
                        <button type="button" className="w-full py-3 px-4 tracking-wider text-sm rounded-md text-white bg-gray-700 hover:bg-gray-800 focus:outline-none">
                            Create an account
                        </button>
                    </div>
                    <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <a href="/login" className="text-blue-600 font-semibold hover:underline ml-1">Login here</a></p>
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