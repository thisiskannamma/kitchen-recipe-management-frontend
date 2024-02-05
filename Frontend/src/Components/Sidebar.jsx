import React from 'react'
import "../App.css"
import { SidebarData } from './SidebarData'

function Sidebar() {
  return (
    <div className='sidebar'>
      <ul className='sidebarList'>
      {SidebarData.map((item,key)=>{
      return(
        <li key={key} className='row'
        id={window.location.pathname===item.link?"active":""}
         onClick={()=>{window.location.pathname=item.link}}>
          <div id='icon'>{item.icon}</div>
          <div id='title'>{item.title}</div>
          </li>
      );
    })}
      </ul>
      </div>
  )
}

export default Sidebar