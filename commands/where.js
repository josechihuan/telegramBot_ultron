const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',
  apiKey: process.env.GOOGLE_API_KEY
}

const handleWhere = async (ctx) => { 
  //sacamos la direccion
 // const direccion = ctx.message.text
 // console.log(direccion) importamos node geocoder
// seguimos los pasos de al api https://www.npmjs.com/package/node-geocoder
  try {
    const direccion = ctx.message.text.split('/where ')[1].trim().toLowerCase();

    const geocoder = NodeGeocoder(options);
    const res = await geocoder.geocode(direccion);
    console.log(res);
    
  //ctx.reply('Funciona')
    
    //CREACION GOOGLE MAP STATIC cambiamos la direccion por latitud, longitud
    //const imgMap = `https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=YOUR_API_KEY`;
    const imgMap = `https://maps.googleapis.com/maps/api/staticmap?center=${res[0].latitude}, ${res[0].longitude}&zoom=17&size=600x300&maptype=hybrid&markers=color:blue%7Clabel:S%7C${res[0].latitude}, ${res[0].longitude}&key=${process.env.GOOGLE_API_KEY}`;
    //console.log(imgMap);
    
    ctx.replyWithLocation(res[0].latitude, res[0].longitude);
    ctx.replyWithPhoto()
  } catch (error) {
    ctx.reply('Ha ocurrido un error, inténtelo con otra dirección')
  }
  
  
}

module.exports = handleWhere;