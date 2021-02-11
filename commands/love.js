const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"love",
run: function(bot,message,args){
    
    let parok = message.content.replace(prefix, '').replace('love ', '').split(' ');
        if (parok == 'love') {
            const lovembedhiba = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Szerelem?")
                .setDescription(`${botconfig.error.love}`)
            message.channel.send(lovembedhiba);
            return;
        }
        let lovmeter = Math.floor(Math.random() * 100);
        let sziv;
        if (lovmeter <= 20) sziv = "💔";
        if (lovmeter >= 20 && lovmeter <= 50) sziv = "❤";
        if (lovmeter >= 50 && lovmeter <= 75) sziv = "💖";
        if (lovmeter >= 75) sziv = "💘";
        const lovembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Szerelem?")
            .setDescription(`${parok[0]} és ${parok[1]}`)
            .addField(`${lovmeter}%-ban össze illenek`, `${sziv}`)
        message.channel.send(lovembed);
}}