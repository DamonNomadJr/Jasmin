class Handler {
  _prefix;
  _discord;

  constructor(client){
    this.prefix = `/`;
    this.discord = client;
  }

  run(messageInput){
    if (messageInput.content[0] == this.prefix){
      console.log("/ running message")
      console.log(this.client);
    }
  }

  get discord(){
    return this._discord;
  }
  set discord(value){
    this._discord = value;
  }
  get prefix(){
    return this._prefix;
  }
  set prefix(value){
    this._prefix = value;
  }
}

module.exports = Handler;