const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;

module.exports = {
    name:"help",
    run: function(bot,message,args){
    const hrlp = new Discord.MessageEmbed()
    .setTitle("Help")
    .setTimestamp(Date.now())
    .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
    .setColor("RANDOM");
    Object.entries(botconfig.help).forEach((key,value) => {
        hrlp.addField(prefix + key[0], key[1].replace(/pref-/g,prefix));
        })
    if (message.author.id == botconfig.creatorid) {
        hrlp.addField("\n __**Admin help**__ \n",`${botconfig.alisdef}`);
        Object.entries(botconfig.ahelp).forEach((key,value) => {
            hrlp.addField(prefix + key[0], key[1].replace(/pref-/g,prefix));
            }) } else {}
    message.channel.send(hrlp);
}}