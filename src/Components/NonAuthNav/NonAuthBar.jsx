import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";



const NonAuthBar = () => {
  return (
    <nav>
        <div className="percent-container">
            <p>Sign up and get 20% off your first order. <Link to={'./signup'}>Sign Up Now</Link></p>
        </div>
            <div className='subNav-container'>

                <div className='subsub-con'>

                    <div className='logo-nav-container'>
                        <RxHamburgerMenu className='menu'  />
                        <h1>SHOP.CO</h1>              
                    </div>

                    <div className='main-nav-container'>
                        <ul>
                            <li>
                                <Link to={'/'}>Shop <MdKeyboardArrowDown/> </Link>
                            </li>
                            <li>
                                <Link to={'/onsales'}>On Sale</Link>
                            </li>
                            <li>
                                <Link to={'/newarrivals'}>New Arrivals</Link>
                            </li>
                            <li>
                                <Link to={'/brands'}>Brands</Link>
                            </li>
                        </ul>
                    </div>
                </div>


            <div className='serach-container'>
                < CiSearch className='ci' />
                <input type="text" placeholder='Serach for products' />

                
            </div>

                 <div className='icon'>   

                    <div className="con">
                        <div className=''>
                            <MdOutlineShoppingCart />
                        </div>

                        <div className=''>
                            <CgProfile />
                        </div>
                    </div>
                  </div>
            
        </div>
    </nav>
    
  )
}

export default NonAuthBar