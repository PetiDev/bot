const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;

module.exports = {
    name:"help",
    run: function(bot,message,args){
    const hrlp = new MessageEmbed()
    .setTitle("Help")
    .setTimestamp(Date.now())
    .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
    .setColor(`${botconfig.color}`);
    Object.entries(botconfig.help).forEach((key,value) => {
        hrlp.addField(prefix + key[0], key[1].replace(/%prefix%/g,prefix));
        })
    if ((message.author.id == botconfig.creatorid) || message.author.id == botconfig.bendi) {
        hrlp.addField("\n __**Bot tulaj help**__ \n",`${botconfig.alisdef}`);
        Object.entries(botconfig.ahelp).forEach((key,value) => {
            hrlp.addField(prefix + key[0], key[1].replace(/%prefix%/g,prefix));
            }) }
    message.channel.send({embeds:[hrlp]});
}}