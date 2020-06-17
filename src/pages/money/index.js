import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { GetCoinHistory } from '../../services/awesomeApiCoins'
import { TimestapToDate, TimestapToNumber } from '../../utils/utils'
import { Chart } from 'react-charts'

export default function Money() {
  const { coinID } = useParams();
  const [coinHistory, setCoinHistory] = useState();

  useEffect(() => {
    GetCoinHistory(coinID, 50).then(response => {
      setCoinHistory(Object.values(response.data));
    });
  }, [coinID]);


  if (coinHistory === undefined) {
    return <div>loading</div>
  }

  console.log(coinHistory);

  return (
    <div>
      <div>{MyChart(coinHistory)}</div>
      <div>{coinHistory.map(coin =>
        <div>{coin.ask} - {coin.bid} - {TimestapToDate(coin.timestamp)}</div>
      )}</div>
    </div>
  )
}

function MyChart(coinHistory) {
  var bidPrices = [[]];

  coinHistory.map(data => {
    try{
      bidPrices.push([(data.timestamp/1000), data.bid])
    } catch {

    }
  })

  console.log(bidPrices)

  const data = [
      {
        label: 'Series 1',
        data: bidPrices
      }
    ]

  const axes = [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ]

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '1000px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} primaryCursor
          secondaryCursor />
    </div>
  )

  return lineChart;
}