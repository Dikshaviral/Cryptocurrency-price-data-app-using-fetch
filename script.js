"use strict";
var url = "https://api.coinranking.com/v2/coins";
var proxy="https://cors-anywhere.herokuapp.com/";
var key="coinranking73d892100d6181e060e1546955daf5745022f81cf2a09ce9";

fetch(`${proxy}${url}`, {
    method: "GET",
    withCredentials: true ,
    headers:{
        'Content-Type': 'application/json',
        
        'X-Auth-Token': `${key}`,
        'Access-Control-Allow-Origin': '*'
    }

}).then((Response)=>{
    if(Response.ok)
    {
        Response.json().then((json) =>
            {
                console.log(json.data.coins);
                let coins = json.data.coins;

                if(coins.length >0)
                {
                    var cryp = ""
                }

                coins.forEach((coin)=>{
                    cryp+= '<tr>';
                    cryp+=`<td> <img src=${coin.iconUrl} > </td>`;
                    cryp+=`<td> ${coin.rank} </td>`;
                    cryp+=`<td> ${coin.symbol} </td>`;
                    cryp+=`<td> ${coin.name} </td>`;
                    cryp+=`<td> ${coin.tier} </td>`;
                    cryp+=`<td> ${coin.btcPrice} </td>`;
                    cryp+=`<td> ${coin.price} </td>`;
                    cryp+= '</tr>';
                }
                )
                document.getElementById("data").innerHTML = cryp;

            })
    }
    
}).catch((error)=>{
    console.log(error)
});
















/*let key = "907ff6e3-161e-46c5-8676-1c8521d34962"

let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";
let qString = "?CMC_PRO_API_KEY=" + key ;

fetch(url+qString)
    .then(function(resp)
    {
        console.log(resp);
    });*/











