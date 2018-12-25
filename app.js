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
      .setThumbnail('https://cdn.discordapp.com/attachments/514395518340825089/526093235492356096/image0.png')
      .setColor(0x00FFFF)
      .addField('Status', 'Sister');
     message.channel.send(embed);
  }

});
client.login(process.env.token);
