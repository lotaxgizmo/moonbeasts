import React from 'react'
import howtobuy2 from '../assets/howtobuy2.svg'
import tobuybox from '../assets/tobuybox.svg'

function Howto() {
    return (
        <div className='HOWTOBUY flex flex-col items-center pb-32 justify-center pt-10 px-4'>
            <img src={howtobuy2} alt="" className='mb-[-90pxd' />
            <div className="box flex flex-col lg:flex-row justify-around w-full">
                <img src={tobuybox} alt="" className='mb-[-90pxd' />
                <img src={tobuybox} alt="" className='mb-[-90pxd' />
                <img src={tobuybox} alt="" className='mb-[-90pxd' />
                <img src={tobuybox} alt="" className='mb-[-90pxd' />
            </div>
        </div>
    )
}

export default Howto