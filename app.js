const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const request = require('request');
const config = require('./config.json');

client.on("ready", () => {
  client.user.setActivity('over authora', { type: 'WATCHING' })
});

client.on("message", async message => {

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(message.content === prefix + "logo") {
    let embed = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setImage(client.user.displayAvatarURL);

    message.channel.send(embed);
  }
  
  if(message.content === prefix + "vynox") {
     let embed = new Discord.RichEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/519249071215738887/526923530496114718/image0.png')
      .setColor(0x00FFFF)
      .addField('Status', 'Sister');
     message.channel.send(embed);
  }
  
  if(message.content === prefix + "hcf") {
    let embed = new Discord.RichEmbed()
     .setThumbnail('https://cdn.discordapp.com/icons/526504750720745504/c88db6558f7f3fd6e8d91b767e10aae9.webp')
     .setColor(0x00FFFF)
     .addField('Status', 'Partnered')
  }

});
client.login(process.env.token);
