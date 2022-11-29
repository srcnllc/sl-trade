import React from 'react'
import { Link } from 'react-router-dom'
import List from '../../json/List.json'

function HeaderBottom() {
  return (
    <div className='headerbottom'>
      <ul className='nav'>
        {List.map((listItem, i) => {
          return (
            <div className='navlist' key={i}>
              <Link className='navlist' to={`/sl-trade/${listItem.name}`}>
                <img src={listItem.url} alt={listItem.name} />
                <li >{listItem.name}</li>
              </Link>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default HeaderBottom