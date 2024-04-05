import React from 'react'
import wartext from '../assets/wartext2.svg'
import flags from '../assets/flags.svg'
import darkbluebg from '../assets/darkbluebg.svg'
import raydium from '../assets/raydium.svg'

function War() {
    return (
        <div className='WAR flex flex-col items-center justify-center pb-32 pt-10 px-4'>
            <img src={wartext} alt="" className='mb-[-90pxd' />
            <img src={flags} alt="" className='w-72q' />


            <div className="text  relative flex flex-col justify-center items-center my-10">
                <p className='text-[#9A7AF2] text-md lg:text-xl text-center z-10 lg:absolute lg:px-24'>
                    Amidst the chaos, allegiances shifted like shadows in the moonlight. Some creatures, driven by primal instincts, rallied under the banners of the Trinity, seeking refuge in the stability they offered. Others, drawn by the allure of newfound power or swayed by whispers from the void, cast aside their former alliances, embracing the chaos that now threatened to consume them all.
                    <br />
                    <br />
                    In the midst of this upheaval, legends began to emerge—tales of heroes and villains, of alliances forged and betrayed, of battles waged in the spaces between worlds. And at the heart of it all, the fate of the Moonbeasts hangs in the balance, their destinies intertwined with the cosmic forces that shape their existence.


                </p>

                <img src={darkbluebg} alt="" className='hidden lg:block' />
            </div>

            <img src={raydium} alt="" className='py-5' />
        </div>
    )
}

export default War