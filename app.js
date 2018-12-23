const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const request = require('request');
const config = require('./config.json');

client.on("ready", () => {
  console.log(chalk.blue("HI"));
  client.user.setActivity('over authora', { type: 'WATCHING' })
});

client.on("message", async message => {

  let prefix = config.prefix;

  if(message.content === prefix + "settings") {
    let embed = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setAuthor(client.user.username, client.user.displayAvatarURL)
      .setFooter(message.author.username, message.author.displayAvatarURL);

    message.channel.send(embed);
  }

});
client.login(process.env.token);
