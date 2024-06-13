import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CoinContext } from '../../Context/CoinContext';

const TableContent = ({displayCoin, currency}) => {
    const {currentPage} = useContext(CoinContext);
    let itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const CurrentPostData = displayCoin.slice(indexOfFirstItem,indexOfLastItem);

  return (
    <div>
    {
        CurrentPostData.map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                <p>{item.market_cap_rank}</p>
                <div>
                    <img src={item.image} alt="" />
                    <p>{item.name + "-" + item.symbol}</p>
                </div>
                <p>{currency.symbol} {item.current_price.toLocaleString()}</p>
                <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                    {Math.floor(item.price_change_percentage_24h*100)/100}</p>
                <p className="market_cap cap" >{currency.symbol} {item.market_cap.toLocaleString()}</p>
            </Link>
        ))
    }
    </div>
  )
}

export default TableContent