import React from 'react'
import './Dashboard.css'
import { VictoryPie, VictoryLabel } from "victory";

function Application({data}) {
    const bg = {
        background: data.bg
      };
    
     const color={
         color:data.txtColor
     } 
    
    
    return (
        <div className="card-wrapper row " style={bg}>
        <div className="col-sm-10 col-lg-7">
            <h4>{data.title}</h4>
             <h2>{data.count}</h2>
             <p style={color}><i class='bx bx-up-arrow-alt'></i> {data.percentage}</p>
        </div>
        <div className="v-wrapper col-sm-2 col-lg-5">
        <svg viewBox="0 0 300 300">
                <VictoryPie
                  standalone={false}
                  width={300} height={300}
                  colorScale={[data.circleColor, "rgba(204, 204, 204, 0.116" ]}
                  data={[
                    { x: 1, y: 350 }, { x: 2, y: 150 }
                  ]}
                  labels={() => null}
                  innerRadius={120} labelRadius={20}
                  style={{ labels: { fontSize: 20, fill: "white" } }}
                />
               <VictoryLabel
                  textAnchor="middle"
                  verticalAnchor="middle"
                  style={[
                    {
                      fontSize: 50,
                      color: "#fff",
                      fontWeight: "600",
                      lineHeight: 40,
                      fill:'#fff'
                    },
                    { fontWeight: "600", fontSize: 16 }
                  ]}
                  x={150}
                  y={150}
                  text={data.label}
                />
              </svg>
        </div>                        
                            </div>
                       
    )
}

export default Application
