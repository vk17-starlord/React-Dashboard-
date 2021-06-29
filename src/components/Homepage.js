import React  ,{useState} from 'react'
import Dashboard from './Dashboard/Dashboard'
import SideNav from './Sidenav/SideNav'
import UserSidenav from './UserSidenav/UserSidenav'

function Homepage() {


    const [show, setshow] = useState(false)
   const toggle= ()=>{
    setshow(!show)
    }

    const [Visible, setVisible] = useState(false)
   const toggleVisible= ()=>{
    setVisible(!Visible)
    }

    
    return (
        <div className="homepage row">

<div className={Visible? 'user-wrapper open': 'user-wrapper'}>
<div className="close">
    <h3 onClick={toggleVisible}><i className='bx bx-x'></i></h3>
</div>
<UserSidenav />
</div>
<div className={show? 'side-wrapper open': 'side-wrapper'}>
<div className="close">
    <h3 onClick={toggle}><i className='bx bx-x'></i></h3>
</div>
<SideNav />
</div>
 <div className="menu-wrapper  hide-on-large">
<h3 onClick={toggle}><i className='bx bx-menu-alt-left' ></i></h3>
<h4><i className='bx bxl-squarespace'></i></h4>
<h3 onClick={toggleVisible}><i className='bx bxs-user' ></i></h3>

            </div>

            <div className="col-sm-12 col-md-1 col-lg-1  col-1 hide-on-small">
                <SideNav />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-8  col-1">
<Dashboard />
            </div>

            <div className="col-sm-12 col-md-12 col-lg-3  col-1 hide-on-small">
                <UserSidenav />
            </div> 

            
        </div>
    )
}

export default Homepage
