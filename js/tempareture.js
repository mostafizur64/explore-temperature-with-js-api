const API_key =`0588b8e9d82b9fec28ebbb6d876838f3`;

const fetchTemperature = city=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&&units=metric`;
     fetch(url)
    .then(res => res.json())
    .then(data=>{
    showInfo(data);
    });

}
const showInfo = (data)=>{
    // const temperature =document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    innerTextById('temperature',data.main.temp)
    innerTextById('condition',data.weather[0].main)

    console.log(data.weather[0].main);

}

const innerTextById= (id,text)=>{
 const temperature= document.getElementById(id);
 temperature.innerText=text;
}

document.getElementById('search-btn').addEventListener('click',function(){
    const searchValue = document.getElementById('search-field');
    const city = searchValue.value;
    document.getElementById('city').innerText= city;
    fetchTemperature(city);
})

fetchTemperature();