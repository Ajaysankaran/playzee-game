"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Dialog from './Dialog';

interface GameCardProps {
    name: string;
    link?: string
}

const GameCard = (props: GameCardProps) => {
    const router = useRouter()
    const [showDialog, setShowDialog] = useState(false)

    const openDialog = React.useCallback(() => {
        setShowDialog(true)
    }, [])
    
    const goToGame = React.useCallback(() => {
        router.push("/tic-tac-toe")
    }, [])

    const body = <>
        <button className='px-4 mx-4 border-2 border-zinc-500 rounded-full' onClick={goToGame}>Single Player</button>
        <button className='px-4 mx-4 border-2 border-zinc-500 rounded-full'>Multiplayer</button>
    </>

    const closeDialog = React.useCallback(() => {
        setShowDialog(false)
    }, [])

    const footer = <div className="flex p-4 justify-end">
        <button className="px-4 mx-4 border-2 border-zinc-500 rounded-full" onClick={closeDialog}>Close</button>
    </div>

    return (
        <>
            <a className='grid-cols-3 cursor-pointer' onClick={openDialog}>
                <img src='tic-tac-toe.jpg' />
                <span className='text-lg font-semibold font-turret'>{props.name}</span>
            </a>
            <Dialog show={showDialog} body={body} footer={footer}></Dialog>
        </>
    )
}


export default GameCard