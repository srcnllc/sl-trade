import React from 'react'
import './AltList.css'
import { Link} from "react-router-dom";


function AltList({altlist}) {
  return (
    <ul>
    {altlist.map((item) => item.test.map((i, index) => {
      return (
        <div className='navlistalt' key={index}>
          <Link to={`/sl-trade/${item.name}/${i.name}`}>
            <img src={i.image} alt={i.name} />
            <li >{i.name}</li>
          </Link>
        </div>
      )
    }))}
  </ul>
  )
}

export default AltList