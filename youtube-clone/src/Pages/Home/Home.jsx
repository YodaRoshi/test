import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'

const home = ({sidebar}) => {
  console.log(` ${(sidebar?"Default":"small-sidebar")} in home.jsx`)

  return (
    <div>
      <Sidebar sidebar={sidebar}/>
    </div>
  )
}

export default homeg