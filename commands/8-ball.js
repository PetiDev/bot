const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"8-ball",
    
run: function(bot,message,args){
    try {
        let ar = message.content.replace(prefix, '').replace("8-ball", '').replace(' ', '').split(',');
        let d = Math.floor(Math.random() * ar.length);
        let rand = ar[d];
        const ball = new Discord.MessageEmbed()
            .setTitle("8-ball")
            .addField("Eredmény: ", `${rand}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(ball);
    } catch (e) {
        const ball = new Discord.MessageEmbed()
            .setTitle("8-ball")
            .addField("Eredmény: Hiba ", `${botconfig.error.nball}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(ball);
    }
}}