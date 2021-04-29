const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "howgay",
    run: function (bot, message) {
        let person = message.mentions.users.first();
        let kuldo = message.author;
        let user = (person) ? person.username : kuldo.username;
        let userId = (person) ? person.id : kuldo.id;
        let num;
        
        if (userId == botconfig.creatorid) {
            num = Math.floor(Math.random() * 25);
        } else {
            num = Math.floor(Math.random() * 100);
        }
        const gay = new Discord.MessageEmbed()
            .setTitle("Howgay")
            .addField(user + " ", `${num}% gay`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        if (num >= 50) gay.setColor("#ff9ff3");
        message.channel.send(gay);
    }
}