import React, { useState, useEffect } from 'react';
import { GetAllCoins } from '../../services/awesomeApiCoins'
import { Link } from 'react-router-dom';

function Home() {
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

  console.log('chegou aqui:', coins);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
      {coins.map(coin =>
        <div
          style={{ textAlign: "center", width: 100, height: 100, padding: 10, border: '10px solid black', margin: 10 }}
          key={coin.code + coin.codein}>
          Hoje o <b>{coin.name}</b> vale <b>{coin.ask}</b> reais
          <br></br>
          <Link to={'coin/' + coin.code}>Open</Link>
        </div>
      )}
    </div>
  )
}

export default Home;