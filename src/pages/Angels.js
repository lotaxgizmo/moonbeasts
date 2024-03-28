import React from 'react'
import angelsbg from '../assets/angelsbg.svg'
import angelshero from '../assets/angelshero.svg'

function Angels() {
    return (
        <div className='ANGELS flex flex-col items-center justify-center pt-5  px-4'>
            <img src={angelshero} alt="" className='w-[800px]' />
        </div>
    )
}

export default Angels