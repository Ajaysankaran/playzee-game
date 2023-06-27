'use client'
import React, { useRef, useState } from 'react'
import LoginDialog from './LoginDialog'

const Header = () => {

    const [showLoginDialog, toggleLoginDialog] = useState(false)

    return (
        <>
            <nav className="flex items-center justify-between flex-wrap header-gradient p-5">
                <div className="flex items-center flex-shrink-0 text-white mr-6 font-turret font-extrabold text-2xl">
                    PLAYZEE
                </div>
                <div className='items-end text-white cursor-pointer' onClick={() => toggleLoginDialog(true)}>
                    Login
                </div>
            </nav>
            <LoginDialog showDialog={showLoginDialog} closeDialog={() => {
                console.log("Dialog close")
                toggleLoginDialog(false)
            }}/>
        </>
    )
}

export default Header