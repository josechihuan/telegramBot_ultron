//const { response } = require('express');

const axios = require('axios').default;

const handleWeather = async(ctx) => {
  
 // console.log(ctx.message);// nos devuelve  text: '/weather Madrid',
 // const ciudad = ctx.message.text.slice(9);
 // const ciudad = ctx.message.text.split(' ')[1];
  // recuperamos el nombre de la ciudad
  const ciudad = ctx.message.text.split('/weather ')[1].trim().toLowerCase();
 //console.log(ciudad);
   const response = await axios.get(`
   https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${process.env.OWM_API_KEY}&units=metric`)
  
 // console.log(response.data)
  const res = `La temperatura en ${ciudad} es: 
   TEMP: ${response.data.main.temp}º
   MAX: ${response.data.main.temp_max}º
   MIN: ${response.data.main.temp_min}ª
   HUMEDAD: ${response.data.main.humidity}%`;
  //ctx.reply('funciona el tiempo');
  ctx.reply(res);


}
module.exports = handleWeather;