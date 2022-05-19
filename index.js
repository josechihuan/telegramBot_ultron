const express = require('express');
const { Telegraf } = require('telegraf');

require('dotenv').config();

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN)
// EL HOOK ganchos urls que nosostros le decimos a telegran donde nos va a mandar cosas, el hook debe estar online
// configuracion, del sitio online 
app.use(bot.webhookCallback('/url_telegram'));
//accedemos a las herramientas nativas de telegram, esta es la url donde nos vas a mandar la url
bot.telegram.setWebhook(process.env.BOT_URL + '/url_telegram')




app.post('/url_telegram', (req, res) => {

  res.end('Termina la petición');
});

// COMANDOS generacion de comandos a traves de command /test
 /* bot.command('test', (ctx) => {
  ctx.reply('Hola, qué pasa!');
  console.log(ctx.message);
  ctx.replyWithDice();
  });//vamos acrear un fichero commands y alli llevamos las funciones de commandos para refactorizar, quedaria asi*/

bot.command('test', require('./commands/test'));

bot.command('weather', require('./commands/weather'));

bot.command('where', require('./commands/where'));//la purba es lanzando /where en telegrat
// importante enlazar a cualquier texto que nos lance el usuario, nos suscribimos a un evento con bot.on()
bot.on('text', require('./nlu'));
// ojo esto se activa cada vez que mandemos un mensaje que nosea un comando probamos en nlu.js

//peticion de prueba vamos a probar si funciona el puerto localhost
app.get('/', (req, res)=> {
  res.send('Funciona')
});

// LA APLICACION DEBE ESTAR ONLINE NO EN LOCALHOST3000 que hay muchos asi no la va encontrar nunca, telegran tiene que interactuar con una aplicacion en linea, ngrok, pero ngrok no esta constantement online, render, heroku, .
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando el puerto ${PORT}`);

});

// vamos a instalar las librerias necesarias de la api oficial de telegram, vamos a usar telegraf 
