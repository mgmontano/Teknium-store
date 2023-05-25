//CONSUMO DE LA API CRIPTOYA
let url = "https://criptoya.com/api/dolar"
fetch(url)
  .then(response => response.json())
  .then(data => mostrarData(data))
  .catch(error => console.log(error))

const mostrarData = (data) => {
  console.log(data)
  let body = ``
  // var dataJson=JSON.stringify(data)
  // console.log(dataJson)
  body += data.blue
  console.log(body)
  document.getElementById(`dolarPrice`).textContent = body
} 