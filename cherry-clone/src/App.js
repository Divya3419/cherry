import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Filters from './components/Filters';
import Restaurent from './components/Restaurent';
import userinfo from '../src/Data/userinfo';
import offers from "../src/Data/offers.json"

import restro from "../src/Data/restro.json"
const filters=[
  "Cost High to Low",
  "Cost Low to High",
  "Rating",
  "Delivery Time",
  "Relevance",
]

function App() {
  const[filter,setFilter]=useState("")
  const[data,setData]=useState(restro)

  const updatefilter=(newfilter)=>{
switch(newfilter){
  case "Cost High to Low":{
    setFilter("Cost High to Low")
    data.sort((a,b)=>b.costfortwo - a.costfortwo)
    console.log(data.map((d)=>d.costfortwo))
    setData([...data])
    break;
  }
  case "Cost Low to High":{
    setFilter("Cost Low to High")
    data.sort((a,b)=>a.costfortwo - b.costfortwo)
    console.log(data.map((d)=>d.costfortwo))
    setData([...data])
    break;
  }
}
  }
  return (
    <div>
      <Navbar {...userinfo.location} />
      <Offers offers={offers}/>
      <section className="near-you">
      <Filters filters={filters} currentFilters={filter} updatefilter={updatefilter}/>
      <Restaurent restro={data}/>
      </section>

      
    </div>
  );
}

export default App;
