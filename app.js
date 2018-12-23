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
  
  if(message.content === prefix + "prune") {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
        if(!args[0]) return message.channel.send(`Invalid syntax, **${prefix}prune** <amount>`);
    message.channel.bulkDelete(args[0]).then(() => {
      message.channel.send(`Sucessfully prunted ${args[0]} messages`)
    });
  }

});
client.login(process.env.token);
