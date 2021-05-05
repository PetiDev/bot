const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"info",
run: function(bot,message){
    let personMention = message.mentions.users.first();
    let person = (personMention)? personMention : message.author;
    const stat = new Discord.MessageEmbed()
            .setColor(`${botconfig.color}`)
            .setTitle("Infók " + person.username + "-ról")
            .setThumbnail(person.avatarURL())
            .addField("Név:", `${person.username}`,true)
            .addField("ID:", `${person.id}`,true)
            .addField("Felhasználó létrehozva:", `${person.createdAt}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(stat);
}}