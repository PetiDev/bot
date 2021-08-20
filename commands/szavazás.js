const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"szavazás",
run: function(bot,message,args){
  
    const vote = new MessageEmbed()
            .setColor(`${botconfig.color}`)
            .setTitle("Szavazás:")    
            .setDescription(`${args.join(' ')}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send({embeds:[vote]})
            .then(function (message) {
                message.react("✔")
                message.react("❌")
            });
    
}}