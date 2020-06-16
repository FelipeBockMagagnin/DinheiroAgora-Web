//Make requisitions to this public api
//https://docs.awesomeapi.com.br/api-de-moedas

import axios from 'axios'

const baseUrl = 'https://economia.awesomeapi.com.br/json'

function GetAllCoins(){
  return axios.get(baseUrl + "/all");
}


export { GetAllCoins }