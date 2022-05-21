import React from 'react'

const Restaurent = (props) => {
  return (
  
    
    <div className="container divider">
        <div className="cards">

{props.restro.map(ele=>(
     <div key={ele.id} className="card">
     <img width="254" height="160px" src={ele.image} />
     <div className="restaurant-details">
         <div className="restaurant-title">{ele.name}</div>
         <div className="restaurant-subtitle">
             {ele.category.join(",  ")}
              </div>
     </div>
     <div className="restaurant-info">
         <div className="restaurant-ratings">
             <i className="material-icons star-icon">star</i> {ele.rating}
         </div>
          .<div className="restaurant-delivery-timings"> {ele.deliveryTimings}</div> .
         <div className="restaurant-cost-for-two">{ele.costfortwo} FOR TWO</div>
     </div>
     <div className="offer-banner">
         <span className="material-icons"> local_offer </span>
         <span className="offer-text">{ele.offer.join(" | ")}</span>
     </div>
 </div>
))}
</div>
</div>
           
  )
}

export default Restaurent