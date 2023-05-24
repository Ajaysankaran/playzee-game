import GameCard from './components/GameCard'
import './globals.css'


export default function Home(props: any) {
  return (
    <>
      <div className="container mx-auto my-4">
        <GameCard name='Tic Tac Toe'/>
        {props.children}
      </div>
    </>
  )
}
