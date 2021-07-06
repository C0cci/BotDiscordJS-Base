const Discord = require("discord.js");
const Client = new Discord.Client;

const prefix = "!";

Client.on("message", message => {
    message.delete()
    if(message.author.bot) if(message.channel.type === "dm") return;
    if(message.content === prefix + "ping"){
      message.channel.send(":ping_pong: Pong!")
    }
})

Client.login("VOTRE TOKEN");
