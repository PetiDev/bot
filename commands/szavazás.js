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
    
    let vote = message.content.replace(prefix, '').replace('szavazás', '');
    try {
        const votembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Szavazás:")
            .addField(vote, `By: ${message.author.username}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(votembed)
            .then(function (message) {
                message.react("✔")
                message.react("❌")
            });
    } catch (err) {
        const votembedE = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Szavazás:")
            .addField(botconfig.error.vote, `To: ${message.author.username}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(votembedE)
    }
}}