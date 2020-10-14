const axios=require('axios');
const cpt = axios.get('http://api.openweathermap.org/data/2.5/weather?q=Tunisia&appid=7705b67ff363bd54e146edfa5d408f51&units=metric')
cpt.then(res=>console.log(res))