process.title = 'TTT Server';

//Importando ExpressJS
var express = require('express'),


  //Criando uma instancia do ExpressJS
  app = express(),

  //Criando um HTTP Server a partir do ExpressJS
  httpServer = require('http').createServer(app),

  //Importando Socket.IO
  socketio = require('socket.io')(httpServer),

  //Utilizando a mesma porta do HTTP Server para o Socket.IO
  io = httpServer.listen('9000')
;

//Diz ao Express que o diretório web contém conteúdos estáticos
app.use(express.static(__dirname + '/web'));

//Exporta os módulos
module.exports.socketServer = io;
module.exports.webServer = httpServer;