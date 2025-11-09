import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'


const OnSale = () => {
  return (
    <div className='main-con'>

      <div className='_line'></div>
           
        <div className="submain-con">

          <div className="semi-con">
            
            <div className='link-con'>
              <ul>
                <li>
                  <Link to={'/'}>Home </Link>
                </li>

                <li>
                  <Link to={'/'}>Home </Link>
                </li>

                <li>
                  <Link to={'/'}>Home </Link>
                </li>
              </ul>
            </div>

          </div>   

          <div className="semi-con1">

          </div>

          </div>

    </div>

  )
}

export default OnSale