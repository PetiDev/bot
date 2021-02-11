const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"bc",
run: function(bot,message,args){
    
    if (message.author.id == "336233673911173120" || message.author.id == botconfig.creatorid) {
        let me = message.content.replace(prefix, '').replace("bc ", '').replace(message.mentions.channels.array()[0], '');
        if(!message.mentions.channel) message.channel.send(botconfig.error.bc.replace(/pref-/,prefix));
        let csat = message.mentions.channels.array()[0].name;
        const channel = message.guild.channels.cache.find(ch => ch.name === csat);
        if (!channel) return;
        const bcMe = new Discord.MessageEmbed()
            .setTitle(me)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        channel.send(bcMe);
    } else {
        return;
    }
}}