import React from 'react'
import './style.css'
import pexels from '../../assets/pexels.jpg'
import shirt from '../../assets/shirt.jpg'
import jean from '../../assets/jean.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Homepage = () => {

    // const handleData = () =>{

    // }

  return (
    <div className='all'>
        <div className='main-container'>
            <div className='red'>
                <div className='subdiv1-container'>
                    <div>
                        <h1>FIND CLOTHES <br className='br' /> THAT MATCHES <br className='br' />YOUR STYLES</h1>

                        <h4> Browse through our diverse range of meticulously crefted garments, designed <br /> to bring out your individuality and cater to your sense of style.</h4>
                    </div>

                    <div>
                        <button><Link to={'/'}>Shop Now</Link></button>
                    </div>

                    <div className='stat'>
                        <div >
                            <span>200+ <br /> <div className='div'>International Branch</div></span>
                        </div>
                        <div className='vertical_line'></div>
                        <div>
                            <span>2,000+ <br /> <div className='div'>High-Quality Products</div></span>
                        </div>
                        <div  className='vertical_line'></div>
                        <div>
                            <span>30,000+ <br /> <div className='div'>Happy Customers</div></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='yello'> 
                <img src={pexels} alt="" />
            </div>

            <div>
                
            </div>
        </div>


            <div className='brand'>
                <div className='brand1' style={{fontFamily:''}}>VERSACE</div>
                <div className='brand1'>ZARA</div>
                <div className='brand1'>GUCCI</div>
                <div className='brand1'>PRADA</div>
                <div className='brand1'>Calvin klein</div>
            </div>
            
            <br /><br/> 
            <div className='parent-new-arivalProd'>
            <h1> NEW ARRIVALS</h1>
                <div className="userNewarrival-prodt">

                    {/* <h1>welcome</h1> */}

                    <div className="newClothes-Con">

                        <div className=''> 
                        <img src={shirt} alt="" />
                        <div className="T-shirt">T-shirt with trap details</div>
                        </div>

                        <div className=''> 
                        <img src={shirt} alt="" />
                        <div className="T-shirt">T-shirt with trap details</div>
                        </div>

                        <div className=''> 
                        <img src={jean} alt="" />
                        <div className="T-shirt">Skinny Fit Jeans</div>
                        </div>

                        <div className=''> 
                        <img src={shirt} alt="" />
                        <div className="T-shirt">T-shirt with trap details</div>
                        </div>

                    </div>

                </div>


                <div className='view'>
                    <button>View All</button>
                </div>

            </div>

    </div>
  )
}

export default Homepage