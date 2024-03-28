import React from 'react'
import trinitytext from '../assets/trinitytext.svg'
import plants from '../assets/plants.svg'
import bearstitle from '../assets/bearstitle.svg'
import bearstab from '../assets/bearstab.svg'
import angelstitle from '../assets/angelstitle.svg'
import angelstab from '../assets/angelstab.svg'
import alpacastitle from '../assets/alpacastitle.svg'
import alpacastab from '../assets/alpacastab.svg'
import trinitytab from '../assets/trinitytab.svg'
import raydium from '../assets/raydium.svg'

function Trinity() {
    return (
        <div className='TRINITY flex flex-col items-center pb-32 justify-center pt-10 px-4'>
            <img src={trinitytext} alt="" className='mb-[-90pxd' />
            <img src={plants} alt="" className='w-52 lg:w-72' />

            <div className="angel">
                <img src={angelstitle} alt="" className='my-10' />
                <img src={angelstab} alt="" className='my-10' />
            </div>



            <div className="column flex flex-col lg:flex-row justify-around w-full">

                <div className="bear">
                    <img src={bearstitle} alt="" className='my-10' />
                    <img src={bearstab} alt="" className='my-10' />
                </div>

                <div className="alpaca">
                    <img src={alpacastitle} alt="" className='my-10' />
                    <img src={alpacastab} alt="" className='my-10' />
                </div>
            </div>

            <div className="tab relative flex justify-center items-center">
                <p className='text-[#9A7AF2] lg:text-black text-md lg:text-xl text-center z-10 lg:absolute px-4'>
                    The three clans control territorial forces in the ether world. lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet The three clans control territorial forces in the ether world. lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet lorem ipsum dolor amet
                </p>

                <img src={trinitytab} alt="" className='hidden lg:block' />
            </div>
            <img src={raydium} alt="" className='py-5' />
        </div>
    )
}

export default Trinity