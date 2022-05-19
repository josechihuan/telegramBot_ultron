const { Wit, log } = require('node-wit');
const fs = require('fs');
const googleTTS = require('google-tts-api');
// client una variable que hace peticiones o lanza acciones
const client = new Wit({

  accessToken: process.env.WIT_TOKEN,
  logger: new log.Logger(log.DEBUG)
})

const handleNlu = async(ctx) => { 

  const res = await client.message(ctx.message.text);
  //console.log(res);

//ctx.reply('holi')
  if (res.intents.length === 0) {
    ctx.reply('No te entiendo')

  } else { 
    if (res.intents[0].confidence > 0.75) {
     // console.log('INTENT', res.intents[0].name);
    //  ctx.reply('Te entiendo')
      //la IA me entiende
      const intent = res.intents[0].name;
     //  para leer ficheros requerimos file s
      const content = fs.readFileSync(`./frases/${intent}.txt`, 'utf-8');
      const frases = content.split('\n');
      const fraseSeleccionada = frases[Math.floor(Math.random() * frases.length )];
      ctx.reply(fraseSeleccionada);

      //aqui el audio, viendo la libreria en internet
      const audioUrl = googleTTS.getAudioUrl(fraseSeleccionada, {
        lang: 'es',
        slow: false
        
      });
      ctx.replyWithAudio(audioUrl);
     // ctx.reply(fraseSeleccionada)
    } else { 
      ctx.reply('No te entiendo')
           }
    }
}

module.exports = handleNlu;