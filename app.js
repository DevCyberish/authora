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
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(message.content === prefix + "settings") {
    let embed = new Discord.RichEmbed()
      .setColor(0x00FFFF)
      .setAuthor(client.user.username, client.user.displayAvatarURL)
      .setFooter(message.author.username, message.author.displayAvatarURL);

    message.channel.send(embed);
  }
  
    if (message.content === prefix + 'prune') { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Let's delete the command message, so it doesn't interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.hasPermission("MANAGE_MESSAGES")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the permission `MANAGE_MESSAGES` to run this command'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.
        }
        purge();

    }

});
client.login(process.env.token);
