import React from 'react'
import './Home.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const home = ({sidebar}) => {
  console.log(` ${(sidebar?"Default":"small-sidebar")} in home.jsx`)

  return (
    <>
      <Sidebar sidebar={sidebar} />
            <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed/>
      </div>
    </>
  )
}

export default home