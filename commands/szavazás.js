const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"szavazás",
run: function(bot,message,args){
  
    const vote = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Szavazás:")    
            .setDescription(`${args.join(' ')}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(vote)
            .then(function (message) {
                message.react("✔")
                message.react("❌")
            });
    
}}