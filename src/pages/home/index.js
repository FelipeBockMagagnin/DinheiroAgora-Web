import React, { useState, useEffect } from 'react';
import { GetAllCoins } from '../../services/awesomeApiCoins'
import { Link } from 'react-router-dom';
import MoneyIcon from '../../components/moneyIcon';
import './styles.css';

export default function Home() {
  const [coins, setCoins] = useState()

  useEffect(() => {
    GetAllCoins().then(response => {
      console.log('get coins: ', response)
      setCoins(Object.values(response.data));
    });
  }, []);

  if (coins === undefined) {
    return <div>loading</div>
  }

  return (
    <div className='moneyList'>
      {coins.map(coin =>
        <Link 
          className='moneylink'
          to={'coin/' + coin.code}
          key={coin.code + coin.codein}>
            <MoneyIcon></MoneyIcon>
            <b>{coin.name}</b> 
            <br></br>
            {coin.code} 1,00 => {Number(coin.ask).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </Link>
      )}
    </div>
  )
}