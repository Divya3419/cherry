import React from 'react'

const Filters = ({filters,currentFilters,updatefilter}) => {
  return (
    <div className="container restaurants">
        <h1>50 restaurants</h1>
        <div className="restaurant-options">
            <div className="restaurant-option">
                {filters.map((value,key)=>(
                   <div 
                   key={key}
                   className="restaurant-option"
                   onClick={()=>updatefilter(value)}
                   >
                      {value} 
                   </div> 
                  
                ))}
                 </div>
            </div>
        </div>
  )
}

export default Filters