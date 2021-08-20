const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"love",
run: function(bot,message,args){
    
    let personArray = args;
        
        let num = Math.floor(Math.random() * 100);
        let hart;
        if (num <= 20) hart = "💔";
        if (num >= 20 && num <= 50) hart = "❤";
        if (num >= 50 && num <= 75) hart = "💖";
        if (num >= 75) hart = "💘";
        const lovembed = new MessageEmbed()
            .setColor(`${botconfig.color}`)
            .setTitle("Szerelem?")
            .setDescription(`${personArray[0]} és ${personArray[1]}`)
            .addField(`${num}%-ban össze illenek`, `${hart}`)
        message.channel.send({embeds: [lovembed]});
}}