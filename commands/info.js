const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"info",
run: function(bot,message,args){
    
    const stat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Infók " + message.author.username + "-ról")
            .setThumbnail(message.author.avatarURL())
            .addField("Név:", `${message.author.username}`)
            .addField("ID:", `${message.author.id}`)
            .addField("Felhasználó létrehozva:", `${message.author.createdAt}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(stat);
}}