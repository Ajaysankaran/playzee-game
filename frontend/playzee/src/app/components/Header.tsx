'use client'
import React from 'react'

const Header = () => {
    return (
        <nav className="flex items-center justify-between flex-wrap header-gradient p-5">
            <div className="flex items-center flex-shrink-0 text-white mr-6 font-turret font-extrabold text-2xl">
                PLAYZEE
            </div>
            <div className='items-end text-white'>
                Login
            </div>
        </nav>
    )
}

export default Header