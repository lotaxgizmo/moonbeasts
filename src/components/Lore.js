import React from 'react'
import loretext from '../assets/loretext.svg'
import onceupon from '../assets/onceupon.svg'
import fountain from '../assets/fountain.svg'
import topframe from '../assets/topframe.svg'
import subtractcolor from '../assets/subtractcolor.svg'
import brframe from '../assets/brframe.svg'
import subractboth from '../assets/subractboth.svg'
import midframe from '../assets/midframe.svg'

function Lore() {
    return (
        <div className='LORE flex flex-col items-center justify-center pt-5 '>
            <img src={loretext} alt="" className='mb-[-90pxd' />
            <div className="onceupon flex flex-row ">
                <img src={fountain} alt="" className='w-60' />

                <div className='onceupon relative flex flex-col items-center justify-center align-middle px-4'>
                    <img src={onceupon} alt="" className='absolutes' />
                    <div className="frame absolute top-6">
                        <img src={topframe} alt="" className='absolute  w-[800px] max-w-none' />
                        <img src={subtractcolor} alt="" className='absolutes mix-blend-color-dodge  w-[800px] max-w-none' />
                    </div>
                </div>

                <img src={fountain} alt="" className='w-60' />
            </div>

            <div className="loretext relative flex flex-col justify-center items-center">

                <p className='text-[#9A7AF2] text-3xl text-center z-10 absolute px-14'>
                    The four clans lived in harmony, till blah blah blah, Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet Lorem ipsum dolor amet
                </p>
                <div className="frame absolutes top-6">
                    <img src={midframe} alt="" className='absolute  w-[800px]l max-w-none' />
                    <img src={subractboth} alt="" className='absolutes mix-blend-color-dodge  w-[800px]l max-w-none' />
                </div>


            </div>
        </div>
    )
}

export default Lore