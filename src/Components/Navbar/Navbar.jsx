import React, { useContext } from 'react'
import '../Navbar/Navbar.css'
import CryptoLogo from '../../assets/CryptoLogo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'
import {Link} from 'react-router-dom'
import Button from '../Button/Button'
const Navbar = () => {
  const {setCurrency} = useContext(CoinContext);

  const currencyHandlder = (e) => {
    switch(event.target.value) {
      case "USD": {
        setCurrency({name:"usd", symbol: "$"});
        break;
      }
      case "EUR": {
        setCurrency({name:"usd", symbol:"€"});
        break;
      }
      case "INR": {
        setCurrency({name:"inr", symbol:"₹"});
        break;
      }
      default: {
        setCurrency({name:"usd", symbol: "$"});
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img className='logo' src={CryptoLogo} alt="" />
        </Link>
        <ul>
        <Link to={'/'}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>

        <div className='nav-right'>
            <select onChange={currencyHandlder}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="INR">INR</option>
            </select>

            <Button/>
        </div>
    </div>
  )
}

export default Navbar