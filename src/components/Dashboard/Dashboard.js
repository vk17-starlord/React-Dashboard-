import React from 'react'
import './Dashboard.css'
import Application from './Application'
import Progress from './Progress'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { VictoryPie, VictoryLabel } from "victory";

function Dashboard() {

    
    const Dataset1={
        title:"Total Application",
        count : 7956,
        percentage:'+3.59%',
        label:"70%",
        bg:"transparent",
        circleColor:"#8261f8",
        txtColor:"#8261f8",
     
    }
    const Dataset2={

        title:"Listed Candidates",
        count : 4658,
        percentage:'+06%',
        label:"60%",    
        bg:"#2E9CFB",
        circleColor:"#fff",
        txtColor:"#fff",
    
       }
    const Dataset3={
        title:"Total Application",
        count :1501,
        percentage:'-0.4%',
        label:"40%",     
        bg:"transparent",
        circleColor:"#F2506E"  ,
        txtColor:"#F2506E"
    }
  

    const ProgressData=[
      {
          color:"#B1D1EA",
          Text:"Application",
          progress:'45%',
      },
      {
        color:"#2EA7F2",
        Text:"Shortlisted",
        progress:'75%',
        
    },
    {
        color:"#F2506E"
        ,
        Text:"Rejected",
        progress:'45%',
    },
    {
        color:"#D3C5DF",
        Text:"On Hold",
        progress:'20%',
    },
    {
        color:"#6543B3",
        Text:"Progress",
        progress:'85%',
    },
    ]

    const data = [
        {
          name: 'Jan',
          uv: 20,
          pv: 0,
        },
        {
          name: 'Feb',
          uv: 10,
          pv:20
        },
        {
          name: 'Mar',
          uv: 30,
          pv:30
        },
        {
          name: 'Apr',
          uv: 20,
          pv:20
        },
        {
          name: 'May',
          uv: 30,
          pv:40
        },
        {
          name: 'June',
          uv: 20,
          pv:20
        },
      
      ];

    return (
        <div className="dashboard">
            <h3>Dashboard</h3>
            <p className="date">Monday ,<span> 02 July 2020</span></p>

            <div className="row application">
                <div className="col-sm-12 col-lg-4 card-container col-md-4">
         <div className="upper-container">
         <Application data={Dataset1}  />
         </div>
               </div>
                <div className="col-sm-12 col-lg-4 card-container col-md-4">
                <div className="upper-container dotted">
         <Application data={Dataset2}  />
         </div>
                </div>
                <div className="col-sm-12 col-lg-4 card-container col-md-4">
                <div className="upper-container">
         <Application data={Dataset3}  />
         </div>
                </div>

            </div>

     <div className="row second" >
    <div className="col-sm-12 col-lg-8 col">

<div className="inner-col2">
    <div className="top">
        <h4>Application Recieved</h4>
<div>
    
<label>This Year</label>
        <label>This Week</label>
        <label>This Today</label>
        <label><i class='bx bxs-folder'></i> Download Report </label>
</div>
    </div>

    <div className="chart-wrapper">
    <ResponsiveContainer width="100%" height="100%" >
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right:0,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="#F2506E" fill="#f2506e38" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="#F2506E" fill="#f2506e38" />
        </AreaChart>
      </ResponsiveContainer>

</div>
</div>

    </div>
    <div className="col-sm-12 col-lg-4 col">
        <div className="inner-col">
            <h5>Total Application</h5>
           {
               ProgressData.map((data,index)=>(
                   <Progress  key={index} data={data}/>
               ))
           }
        </div>
    </div>

    </div>


<div className="r-container row">
    <div className="col-sm-12 col-lg-8 no-pad">
        <div className="stat">
          
          <div className="top row">
            <div className="col-sm-12 col-lg-6 center">
              <h4>Referals and Campgain Stats</h4>
            </div>
            <div className="col-sm-2 col-lg-1 center">
         <h3 className="red">   <i className='bx bxl-telegram'></i></h3 >
            </div>
            <div className="col-sm-10 col-lg-5 center">
              <h4 className="red">40 Campgains sent in total</h4>
              <p>4 camgains sent in last month</p>
            </div>
          </div>

 <div className="mid row">
   <div className="col-sm-6 col-md-3 col-lg-3  m-col">
     <h4>User's Reached</h4>
     <p><span><i class='bx bx-up-arrow-alt'></i></span> +3.59%</p>
     <h1>7956</h1>
   </div>


   <div className="col-sm-6 col-md-3 col-lg-3  m-col">
     <h4>Referals</h4>
     <p><span><i class='bx bx-up-arrow-alt'></i></span> +9.01%</p>
     <h1>0662</h1>
   </div>


   <div className="col-sm-6 col-md-3 col-lg-3  m-col">
     <h4>Shares</h4>
     <p><span><i class='bx bx-up-arrow-alt'></i></span> +39.19%</p>
     <h1>1478</h1>
   </div>


   <div className="col-sm-6 col-md-3 col-lg-3  m-col">
     <h4>Applications</h4>
     <p><span><i class='bx bx-up-arrow-alt'></i></span> +12.00%</p>
     <h1>0567</h1>
   </div>

 </div>
          
          <div className="btn-container row">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <button className="r-btn">Start A New Campgain Now</button>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
            <button className="r-btn pink">Pause All Running Campgain</button>

            </div>

          </div>
        </div>
    </div>
    <div className="col-sm-12 col-lg-4 no-pad">
    <div className="pie-wrapper">
      <h4>Open Positon By Department</h4>
    <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          width={400} height={400}
          data={[
            { x: '45%', y: 150 }, { x: '20%', y: 80 }, { x: '25%', y: 120 }
          ]}
          innerRadius={68} labelRadius={100}
          colorScale={["#2E9CFB", "#8261f8", "#F2506E" ]}
          style={{ labels: { fontSize: 20, fill: "white" } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={ {
            fontSize: 15,
            color: "#fff",
            fontWeight: "600",
            lineHeight: 40,
            fill:'#fff'
          }}
          x={200} y={200}
          text="Open Positon"
        />
      </svg>
    </div>

    </div>

</div>
        </div>


        
    )
}

export default Dashboard
