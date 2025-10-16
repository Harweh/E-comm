import {useEffect} from 'react'
import './style.css'
import shirt from '../../assets/shirt.jpg'
import jean from '../../assets/jean.jpg'
import { Link } from 'react-router-dom'

const NewA = () => {

    const handleData = () => {
    
    };

  return (
        <div className='parent-new-arivalProd'>
            <div className="userNewarrival-prodt">

                <div>
                    <span className="newA"> NEW ARRIVALS</span>
                </div>

               

                <div className="newClothes-Con">

                    <div className='img-con'> 
                        <div className="img-cart">
                           <img src={shirt} alt="" />
                           <div className="T-shirt">
                            <span >T-shirt with trap details</span>
                            <p>Price: </p>
                           </div>
                        </div>
                    </div>

                <div className='img-con'> 
                        <div className="img-cart">
                           <img src={shirt} alt="" />
                           <div className="T-shirt">
                            <span >T-shirt with trap details</span>
                            <p>Price: </p>
                           </div>
                        </div>
                    </div>


                    <div className='img-con'> 
                      <div className="img-cart">
                            <img src={jean} alt="" />
                             <div className="T-shirt">
                            <span >Skinny</span>
                            <p>Price: </p>
                           </div>
                        </div>
                    </div>

                    <div className='img-con'> 
                        <div className="img-cart">
                           <img src={shirt} alt="" />
                           <div className="T-shirt">
                            <span >T-shirt with trap details</span>
                            <p>Price: </p>
                           </div>
                        </div>
                    </div>

                    
                </div>



                <div className='view'>
                    <button onClick={handleData}>View All</button>
                </div>
            

            </div>
            
        </div>
  )
}

export default NewA