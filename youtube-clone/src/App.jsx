import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

const App = () => {
  console.log()
  const [sidebar, setSidebar] = useState(true);
  console.log(` ${(sidebar?"Default":"small-sidebar")} in App.jsx`)

  return (
    <div> 

      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/'element={<Home sidebar={sidebar}/>  }/>
        <Route path='/video/:categoryID/:videoId'element={<Video/>}/>
       </Routes>
    </div>
  )
}

export default App