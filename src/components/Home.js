import React from 'react'
import about from '../assets/about.svg'
import clan from '../assets/clan.svg'
import header from '../assets/header.svg'
import homebtn from '../assets/homebtn.svg'
import lorebtn from '../assets/lorebtn.svg'
import moonbeastshero from '../assets/moonbeastshero.svg'
import portal from '../assets/portal.svg'
import raydium from '../assets/raydium.svg'
import telegram from '../assets/telegram.svg'
import x from '../assets/x.svg'

function Home() {
    return (
        <div className='HOME flex flex-col items-center justify-center pt-5 pb-32 px-4 lg:px-0'>
            <img src={moonbeastshero} alt="" className='lg:mb-[-90px] ' />
            <img src={header} alt="" />

            <div className="btns flex flex-row justify-around w-full mt-3">
                <div className="leftbtn">
                    <img src={telegram} alt="" className='w-80 py-4' />
                    <img src={x} alt="" className='w-80 py-4' />
                    <img src={lorebtn} alt="" className='w-80 py-4' />
                </div>
                <div className="midbtn">
                    <img src={portal} alt="" className='w-72' />
                </div>
                <div className="rightbtn">
                    <img src={homebtn} alt="" className='w-80 py-4' />
                    <img src={about} alt="" className='w-80 py-4' />
                    <img src={raydium} alt="" className='w-80 py-4' />
                </div>
            </div>
            <img src={clan} alt="" className=' lg:w-80 py-4' />
        </div>
    )
}

export default Home