comando weather
ejecucion: /wether Madrid
comando /weather seguido del nombre de la ciudad
en app.js definir el comando
crear un fichero weather.js dentro de los comandos y engancharlos en app.js
de donde saco la ciudad? analizar la variable ctx.menssage
extraigo la ciudad del mensaje
lanzar una peticion sobre la API DE openweathermap PARA RECUPERAR LA INFORMACION DEL TIEMPO DE DICHA CIUDAD


GET https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric

la peticion la hacemos a traves de AXIOS

una vez hecha la descarga mostramos al usuario los datos de 
temperatura actual, maxima, minima y la humedad

//comando /where
EJECUCION  /where calle argumosa 17 Madrid
usamos otra herramienta/libreria node-geocoder

crear fichero para manejar este comando
extraer la direccion del comando
llamar a la libreria para recuperar su latitud y su longitud
api kay de google AIzaSyBMOcTcAkobrlfKIBOJNz6lDw2R5fJsk_Q


https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&key=YOUR_API_KEY

https://wit.ai/apps/1175398823295391/understanding
para usar esta inteligencia artificial vamos a requerir la libreria node-wit
https://wit.ai/apps/1175398823295391/understanding
WIT_TOKEN="GYR2YZUSQNLPTI44NWRCZV3F7KPMV3C7"
//SYZOXEOZMUH3GWBAPLTPHSQKETRKSSU7

//vamos ha consegruir que el texto que lee nos lo pase a voz, para ello usamos la libreria, en otro terminal levantamos el tunel al puerto 3000 con ngrok http 3000 en la terminal nueva.
usamos una libre ria npm install google-tts-api en la terminal del proyecto 
importante crear el fichero .gitignore, ahora lo subimos a githut
y creamos new repository