import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { GetCoinHistory } from '../../services/awesomeApiCoins'
import { TimestapToDate, TimestapToNumber } from '../../utils/utils'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

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
  var bidPrices = [{}];
  var maxValue = 0;
  var minValue = coinHistory[1].bid;
  console.log(minValue);

  coinHistory.map(data => {
    try{
      if(data.bid > maxValue){
        maxValue = data.bid;
      }

      if(data.bid < minValue){
        minValue = data.bid;
      }

      bidPrices.push({data:(TimestapToDate(data.timestamp)), valor: data.bid})
    } catch {

    }
  })

  const lineChart = (
    <LineChart width={800} height={400} data={bidPrices}
            margin={{top: 50, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="data"/>
       <YAxis type="number" domain={[minValue, maxValue ]}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="valor" stroke="#82ca9d" />
      </LineChart>
  )

  return lineChart;
}