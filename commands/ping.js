const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"ping",
run: function(bot,message,args){
    
    console.log("ping = " + bot.ws.ping + "ms")
    const ping = new Discord.MessageEmbed()
        .setTitle("Pong")
        .addField("A ping: ", `${bot.ws.ping}ms`)
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
    message.channel.send(ping);
}}