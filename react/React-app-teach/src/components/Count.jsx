import React from 'react'


export  function Count({count,increment}) {


  return (
  <div className="card">
        <div id="counr">
              count is {count}
        </div>
        <button onClick={()=>{
          increment()
        }}>
      click
        </button>
      
      </div>
  )
}
