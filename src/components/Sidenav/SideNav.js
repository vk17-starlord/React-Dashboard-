import React from 'react'
import './SideNav.css'
function SideNav() {

    return (
        <div className="sidenav">
          <div className="top">
                
            <h4><i className='bx bxl-squarespace'></i></h4>
             <div className="active" ><i className='bx bxs-home' ></i></div>
             <div className="link" ><i className='bx bx-bar-chart-square' ></i></div>
             <div className="link" ><i className='bx bxs-folder' ></i></div>
             <div className="link"><i className='bx bxs-calendar-check' ></i></div>
             <div  className="link"><i className='bx bxs-user-account' ></i></div>
             <div className="link"><i className='bx bxs-message-detail' ></i></div>
            <div className="link"><i className='bx bxs-log-in' ></i></div>
          </div>

<div className="bottom ">
<i className='bx bx-cog'></i>
</div>
        </div>
    )
}

export default SideNav
