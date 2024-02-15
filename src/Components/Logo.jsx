import React from 'react'
import LogoImage from '../LogoImage.png'

function Logo({ width = "60px" }) {
    return (
        <img src={LogoImage}
            className='object-cover'
            alt="MITS-logo" width={width} />
    )
}

export default Logo