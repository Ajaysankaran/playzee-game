import React from 'react'

const TicTacToe = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className='grid grid-cols-3 justify-self-center ring-2 ring-offset-2 border-4 border-sky-400 rounded-lg h-96 w-96'>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
        <div className='border-2 border-sky-200'></div>
      </div>
    </div>
  )
}

export default TicTacToe