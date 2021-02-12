const Discord = require('discord.js');
const Handler = require('./handler.js');

class Bot {
  _client;
  _messageHandler;
  
  constructor() {
    //init
    this.client = new Discord.Client();
    this.messageHandler = new Handler(this.client);
    console.log(this.client);

    this.client.on('ready', () => { console.log('Running ' + this.client.user.tag) });
    this.client.login(this.token().bot_setting.token);
    this.client.on('message', (recievedMessage) => {
      //Check for loopback
      if(recievedMessage.author == this.client.user)
        return;
      //Message structure
      this.messageHandler.run(recievedMessage);
    });
  }

  token() {
    let token = JSON.parse(process.env.TOKEN);
    if (token)
      return token;
    else
      process.exit();
  }

  get client(){
    return this._client;
  }
  set client(value){
    this._client = value;
  }
  get messageHandler(){
    return this._messageHandler;
  }
  set messageHandler(value){
    this._messageHandler = value;
  }
}

module.exports = Bot;