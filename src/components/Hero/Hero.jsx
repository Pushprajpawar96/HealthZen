import React from 'react'
import sunita from '../../img/imgonline-com-ua-resize-MnojFK8fFV3kQ.jpg'

const Hero = () => {
    return (
        <div>
            <div className='absolute top-16 bg-sky-50'>
                <div style={{ backgroundRepeat:'no-repeat', backgroundImage: `url(https://wallpaperaccess.com/full/1994610.jpg)` }}>
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 ">
                        <h1 className="text-4xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-red-700">Hey Sunita! let's enjoy life to it's fullest!</h1>
                        <p className="mt-6 mb-8 text-md  sm:mb-12 xl:max-w-2xl text-gray-700">Here is mantra for you to stay heathy and happy. Start with some light exercise and yoga, follow your diet and enjoy with music and movies. </p>
                    </div>
                </div>
                {/* 480x320 */}
                <img src={sunita}  className="w-5/6 mx-auto mb-12 -mt-20 rounded-3xl shadow-md lg:-mt-40 dark:bg-gray-500" />
                <div className='h-60 -mt-32 -z-50 '>
                    <p className='w-full pb-4 absolute text-green-600 text-center bottom-0 bg-red-100'>
                        <a href="https://github.com/Pushprajpawar96">Made By RAJ_PAWAR</a>
                    </p>
                </div>

                <div className=" -mt-48 mb-10 py-4 px-4 pt-16 bg-red-100 flex flex-col items-center text-center">
                    <div className='max-w-4xl text-lg px-4'>
                        <h1 className='w-full text-center text-3xl py-4 font-semibold mb-2 text-gray-700'><span className='text-red-600'>HealthZen</span>   Your Guide to a Vibrant Life! 😊😊</h1>
                        <p className='text-gray-700'>Age knows no boundaries when it comes to health. Shield yourself from complications as you age. A mere cold can escalate into pneumonia or more. Chronic conditions like asthma or diabetes add to the risk. Strengthen your immune system with smart choices. Stay resilient, stay vibrant! 🌟</p>



                        <p className='py-10 text-3xl text-gray-700 font-semibold'> Remember these <span className='text-red-600'>Nine tips</span> to stay healthy</p>
                        <ol className='list-decimal text-gray-700'>
                            <p className='hover:text-red-600'>Balanced Diet</p>
                            <p className='hover:text-red-600'>Stay Hydrated</p>
                            <p className='hover:text-red-600'>Regular Exercise</p>
                            <p className='hover:text-red-600'>Adequate Sleep</p>
                            <p className='hover:text-red-600'>Manage Stress</p>
                            <p className='hover:text-red-600'>Practice Good Hygiene</p>
                            <p className='hover:text-red-600'>Regular Health Check-ups</p>
                            <p className='hover:text-red-600'>Schedule annual physicals</p>
                            <p className='hover:text-red-600'>Stay connected</p>
                        </ol>
                    </div>
                    <br className='bg-red-500 h-2' />
                    {/* checkbox table */}
                    {/* <p className='w-full text-center text-2xl my-2 mt-10 text-gray-700'> Check following boxes to track daily report</p>
                    <div className='flex justify-center'>
                        <table class="table-auto justify-start">
                            <tbody className='text-xl'>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Exercise and Yoga</td>
                                </tr>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Healthy Diet</td>
                                </tr>
                                <tr className='flex space-x-4'>
                                    <td>
                                        <label>
                                            <input type="checkbox" className='accent-green-600' />
                                        </label>
                                    </td>
                                    <td>Feeling Happy Happy! 😄</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                    {/* checkbox table */}
                </div>
            </div>
        </div>
    )
}

export default Hero