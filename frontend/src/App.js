import React,{Fragment} from 'react'
import {Routes , Route} from 'react-router-dom'
import NavBar  from './components/NavigationBar/NavBar'

import AllQuote from './components/Pages/AllQuote'
import NewQuote from './components/Pages/NewQuote'
const App = () => {
  return (
    <Fragment>
      <NavBar/>
      <main>
        <Routes>
          <Route path="/" element={<AllQuote/>}/>
          <Route path='/new' element={<NewQuote/>}/>
        </Routes>
      </main>
    </Fragment>
  )
}

export default App