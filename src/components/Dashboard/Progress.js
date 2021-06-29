import React from 'react'

function Progress({data}) {
    console.log(data)
    const bg = {
        background: data.color,
        width: data.progress
      };
     
      const color = {
        color: data.color,
    
      };
      
    return (
        <div className="progressbar row">
            <div className="col-sm-7 col-lg-6 no-pad">
            <p style={color}>  <i class='bx bxs-circle'></i> {data.Text}</p>
            </div>
            <div className="col-sm-5 col-lg-6 no-pad grey">
                <div className="line" style={bg}></div>
            </div>
        </div>
    )
}

export default Progress
