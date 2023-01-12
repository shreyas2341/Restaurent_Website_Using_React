import React from 'react'
import CollapsibleExample from './Components/Hitesh/Appbar'
import Menu from './Components/Shreyas/Menu'
import Down from './Components/Hitesh/Down'
import App_ghritanchi from './Components/Gritanchi/App'
import App_pranjin from './Components/Pranjin/App'


export default function App() {
  return (
    <>
      <div className='app__bg'>
        <CollapsibleExample />
        <App_ghritanchi />
        <Menu />
        <App_pranjin />
        <Down />
      </div>
    </>
  )
}

