import React from 'react'
import BoxImage from '../Pictures/Box2.jpg'
import shoppingCart from '../Pictures/shopping.png'
import '../css/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons'



const Header = () => {
  return (
    <div className='header'>
    <div className='header-logo'>
    <h2 className='header-title'>@eSHOP</h2>
    <img src={BoxImage} alt='box-image'/>

    </div>


    <div className='header-search-bar'>
    <input type='search' placeholder='search brand or product with name'/>
    <div className='search-bar'> <FontAwesomeIcon icon={faSearch}/></div>
    
     
    </div>

    <div className='header-navigation-bar'>

    <div className='Nav-item'>
         <FontAwesomeIcon icon={faFlag} className='flag'/>
         <div className='span'><span className='line-one'> Your <br/> Sign In</span></div>
            
          
    </div>
    
    <div className='nav-item'>
      <div className='span'><span>Your &nbsp; SHOP</span></div>

    </div>
    <div className='shopping-details'>
      
         <img src={shoppingCart} alt='shopping-cart'/>
         <h5>0</h5>
      
    </div>
    


    </div>
      
    </div>
  )
}

export default Header
