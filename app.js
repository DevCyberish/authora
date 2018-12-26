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

    if(message.channel.id == '527196584530673664' || message.author.id == '366283647587713034' || message.author.id == '506533999318007810') {
     message.channel.send(embed);
    }
  }
  
  if(message.content === prefix + "vynox") {
     let embed = new Discord.RichEmbed()
      .setThumbnail('https://cdn.discordapp.com/attachments/519249071215738887/526923530496114718/image0.png')
      .setColor(0x00FFFF)
      .addField('Status', 'Sister');
    if(message.channel.id == '527196584530673664' || message.author.id == '366283647587713034' || message.author.id == '506533999318007810') {
     message.channel.send(embed);
    }
  }
  
  if(message.content === prefix + "hcf" || message.content === prefix + "hc" || message.content === prefix + "hcfcommunity" || message.content === prefix + "hccommunity") {
    let embed = new Discord.RichEmbed()
     .setThumbnail('https://cdn.discordapp.com/icons/526847900286976011/ea8b1cd20fcf85566a542924df9c23ee.webp')
     .setColor(0x00FFFF)
     .addField('Status', 'Partnered');
    if(message.channel.id == '527196584530673664' || message.author.id == '366283647587713034' || message.author.id == '506533999318007810') {
     message.channel.send(embed);
    }
  }
  
  if(message.content === prefix+"help") {
   let embed = new Discord.RichEmbed()
     .setThumbnail(client.user.displayAvatarURL)
     .setColor(0x00FFFF)
     .addField(prefix+'logo', "Display the server's logo")
     .addField(prefix+'hcf', "Display hcf community's information")
     .addField(prefix+'vynox', "Display vynox's information")
     .setFooter(client.user.username, client.user.displayAvatarURL)
     .setAuthor(message.author.username, message.author.displayAvatarURL);
    if(message.channel.id == '527196584530673664' || message.author.id == '366283647587713034' || message.author.id == '506533999318007810') {
     message.channel.send(embed);
    }
  }
  
  client.on('guildMemberAdd', (guildMember) => {
   guildMember.addRole(guildMember.guild.roles.find(role => role.name === "Member"));
   let channel = message.channel.get("527525346417836042");
    channel.sendMessage('Welcome, **<@'+guildMember.user.id+'>**')
    channel.sendMessage(' Authora, is an minigames server, that will provide')
    channel.sendMessage("a variety of minigame's including bedwars, skywars and tnt tag");
  });

});
client.login(process.env.token);
