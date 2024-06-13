import React, { useContext, useEffect, useState } from "react";
import "../Home/Home.css";
import { CoinContext } from "../../Context/CoinContext";
import TableContent from "./TableContent";
import Pagination from "../../Components/Pagination/Pagination";


const Home = () => {
    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    useEffect(() => {
        setDisplayCoin(allCoin);
    },[allCoin]);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const inputHandler = (e) => {
      setInput(event.target.value);
      if(event.target.value === ""){
        setError(false);
        setDisplayCoin(allCoin);
      }
    }


    const searchHander = async (e) => {
      event.preventDefault();
      const coins  = await allCoin.filter((item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
      });
      if(coins.length === 0){
        setError(true);
      }
      console.log(coins);
      setDisplayCoin(coins);
    }

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br />
          Crypto Marketplace
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHander}>
          <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder="search crypto" required />

          <datalist id="coinlist">
            {
              allCoin.map((item,index) => (<option key={index} value={item.name}/>))
            }
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{textAlign:"center"}}>24H Change</p>
          <p className="market-cap" style={{textAlign:"center"}}>Market Cap</p>
        </div>
        {error === true ? <p style={{textAlign:"center", marginTop:"20px"}}>No Data Found</p>: <TableContent displayCoin = {displayCoin} currency = {currency}/>}
      </div>
      {allCoin.length !== 0 && <Pagination allCoin={allCoin}/>}
    </div>
    
  );
};

export default Home;
