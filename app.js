const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const request = require('request');
const config = require('./config.json');

client.on("ready", () => {
  client.user.setActivity('over my update', { type: 'WATCHING' })
});
client.login(process.env.token);
