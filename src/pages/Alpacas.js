import React from 'react'
import alpacasbg from '../assets/alpacasbg.png'
import alpacashero from '../assets/alpacashero.svg'
import join from '../assets/join.svg'
import header from '../assets/header.svg'
import portalout from '../assets/portalout.svg'

function Alpacas() {
    return (
        <div className='ANGELS flex flex-col items-center justify-center pt-5 px-4 relative'>
            <img src={alpacashero} alt="" className='w-[600px]' />
            <img src={header} alt="" className='py-3' />
            <div className="textbox relative flex flex-col justify-center items-center">
                <img src={alpacasbg} alt="" className='w-[300px] lg:w-auto animate-pulse' />

                <p className='text-[#9A7AF2] text-sm lg:text-xl text-left lg:text-center z-10 lg:absolute px- lg:px-24'>
                    Amidst the chaos, allegiances shifted like shadows in the moonlight. Some creatures, driven by primal instincts, rallied under the banners of the Trinity, seeking refuge in the stability they offered. Others, drawn by the allure of newfound power or swayed by whispers from the void, cast aside their former alliances, embracing the chaos that now threatened to consume them all.
                    <br />
                    <br />
                    In the midst of this upheaval, legends began to emerge—tales of heroes and villains, of alliances forged and betrayed, of battles waged in the spaces between worlds. And at the heart of it all, the fate of the Moonbeasts hangs in the balance, their destinies intertwined with the cosmic forces that shape their existence.


                </p>

            </div>
            <img src={join} alt="" className='py-5' />
            <img src={portalout} alt="" className='w-[600px]c' />
            <img src={alpacashero} alt="" className='w-[600px]' />
        </div>
    )
}

export default Alpacas