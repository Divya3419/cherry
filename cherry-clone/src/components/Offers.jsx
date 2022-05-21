import React from 'react'

const Offers = (props) => {
  return (

    <section className="offers">
        <div className="container">
        {props.offers.map(ele=>
           <img key={ele.id} className="offer" src={ele}/>
        )}   
        </div>
    </section>
  )
}

export default Offers