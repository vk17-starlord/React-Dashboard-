import React from 'react'
import './UserSidenav.css';

function UserSidenav() {
    const Applicants=[
        {
            name :"Rosie Metts",
            post:'IOS Developer'
        }
        ,
        {
            name :"James Scott",
            post:'Android Developer'
        }
        ,
        {
            name :"Jamie Larrionson",
            post:'Marketing Manager'
        }
        ,
        {
            name :"Eliza sethia",
            post:'Frontend Developer'
        }  ,
    ]

    return (
        <div className="UserSidenav">

            <div className="top-profile">
<h3><i className='bx bxs-bell-plus' ></i></h3>
<p>John Bayer</p>
<img alt="profile" src="https://images.pexels.com/photos/3760912/pexels-photo-3760912.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"></img>
<h3><i className='bx bx-caret-down'></i></h3>
            </div>

<div className="search-container row">
<div className="col-sm-12 col-lg-4">
<button className="main-btn ">
    <i className='bx bx-plus'></i>
    ADD
    </button>

</div>

<div className="col-sm-12 col-lg-8">
<input type="text" placeholder="Search For Applications "/>

</div>
</div>

<div className="application-container">

<p>Hello John Brew  </p>
<p>You have 8 new applications today !  </p>

<div className="img"></div>

<div className="app-container">

<h4>New Applicants  <i className='bx bxs-chevron-right'></i></h4>


{Applicants.map((user,index)=>(
    <div className="a-card row" key={index}>
    <div className="col-sm-2 ">
    <i  className='bx bxs-user-circle user'></i>
    </div>
    <div className="col-sm-6 ">
        <h6>{user.name}</h6>
    <p>  Applied for  <span>{user.post}</span></p>
    </div>
    <div className="col-sm-4 ">
     
     <div className="wrapper">
     <button className="g-btn"><i className='bx bxs-message-alt-detail'></i></button>
       <button className="g-btn"><i className='bx bxs-phone' ></i></button>
     </div>
    
    </div>
    </div>
    
))}


</div>

</div>
        </div>
    )
}

export default UserSidenav
