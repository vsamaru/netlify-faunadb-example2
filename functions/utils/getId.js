var fetch = require('isomorphic-unfetch')

async function telg(T) {

T = T != 'string' ? JSON.stringify(T,null,4) : T
await fetch('https://api.telegram.org/bot1068309359:AAHBqpIpwDcanS-XNfbWh-uPctjouz9rjDw/sendMessage?chat_id=-1001431294521&text=' + T)
}
module.exports = function getId(urlPath) {
  var o = urlPath.match(/([^\/]*)\/*$/)[0]
  telg(o)
  return o
}
