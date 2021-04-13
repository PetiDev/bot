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
    let person = message.mentions.users.first();
    let sender = message.author;
    let szemely = (person)? person : sender;
    const stat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Infók " + szemely.username + "-ról")
            .setThumbnail(szemely.avatarURL())
            .addField("Név:", `${szemely.username}`,true)
            .addField("ID:", `${szemely.id}`,true)
            .addField("Felhasználó létrehozva:", `${szemely.createdAt}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(stat);
}}