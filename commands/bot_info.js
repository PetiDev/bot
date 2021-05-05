const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"bot_info",
run: function(bot,message,args){
    
    const botstat = new Discord.MessageEmbed()
            .setColor(`${botconfig.color}`)
            .setTitle("Infók a botról.")
            .setThumbnail(bot.user.avatarURL())
            .addField("Név:", `${bot.user.username}`)
            .addField("Ramhasználat:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3)}Mb/${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(3)}Mb`)
            .addField("Ennyi szerveren van bent: ", `${bot.guilds.cache.size}`)
            .addField("Bot létrehozva:", `${bot.user.createdAt}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(botstat);
}}