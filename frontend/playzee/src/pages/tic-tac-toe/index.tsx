import { faArrowsRotate, faCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactElement, useEffect } from 'react'

const TicTacToe = () => {
  let squares: ReactElement[] = []
  const [values, setValues] = React.useState<ReactElement[]>(new Array(9))
  const [isCross, setIsCross] = React.useState(true)

  for (let i = 0; i < 9; i++) {
    squares.push(<div className='border-2 border-sky-200 flex justify-center items-center text-8xl' key={i}
      onClick={() => onSquareClicked(i)}>{values[i]}</div>)
  }

  const onSquareClicked = (index: number) => {
    setValues(values => ({
      ...values,
      [index]: !isCross ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faCircle} />
    }))
    setIsCross(value => !value)
  }

  const reset = () => {
    setValues([])
  }

  return (
    <>
      <div className="m-6 ">
        <div className="absolute right-4 cursor-pointer hover:text-slate-500" onClick={reset}>
          <FontAwesomeIcon icon={faArrowsRotate} className='text-6xl' />
        </div>
        <div className="flex h-screen justify-center items-center">
          <div className='grid grid-rows-3 grid-cols-3 justify-self-center ring-2 ring-offset-2 border-4 border-sky-400 rounded-lg h-96 w-96'>
            {squares}
          </div>
        </div>
      </div>

    </>
  )
}

export default TicTacToe