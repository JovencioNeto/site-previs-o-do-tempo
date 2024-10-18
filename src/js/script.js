let key = "39d996edea6b0bc7cc0049dbc19394f2"
const button = document.getElementById('button-search')

async function search_city(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt-br&units=metric`).then(resp => resp.json())
    return data
}

function data_insert(data) {
    if(data.name != undefined){
        document.getElementById('city').innerHTML = `Tempo em ${data.name}`
        document.getElementById('temp').innerHTML = `${Math.floor(data.main.temp)} ° C`
        document.getElementById('text-prev').innerHTML = data.weather[0].description
        document.getElementById('humidity').innerHTML = `Umidade: ${data.main.humidity} %`
        document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    }else{
        document.getElementById('city').innerHTML = 'Escreva um local que existe!'
        document.getElementById('temp').innerHTML = '0 ° C'
        document.getElementById('text-prev').innerHTML = 'N.A'
        document.getElementById('humidity').innerHTML = 'Umidade: 0 %'
    }
    
}

button.addEventListener('click', async () => {
    let city = document.getElementById('input-city').value
    let data = await search_city(city) 
    data_insert(data)
})
