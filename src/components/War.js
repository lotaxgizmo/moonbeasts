import React from 'react'
import wartext from '../assets/wartext.svg'
import flags from '../assets/flags.svg'
import darkbluebg from '../assets/darkbluebg.svg'

function War() {
    return (
        <div className='WAR flex flex-col items-center justify-center pt-10'>
            <img src={wartext} alt="" className='mb-[-90pxd' />
            <img src={flags} alt="" className='w-72q' />


            <div className="text  relative flex justify-center items-center my-10">
                <p className='text-[#9A7AF2] text-xl text-center z-10 absolute px-24'>
                    The three clans control territorial forces in the ether world. lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet The three clans control territorial forces in the ether world. lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet.

                    The three clans control territorial forces in the ether world. lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet The three clans control territorial forces in the ether world. lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet.


                </p>

                <img src={darkbluebg} alt="" className='' />
            </div>
        </div>
    )
}

export default War