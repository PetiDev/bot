const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"howgay",
    
run: function(bot,message,args){
    let szemelyek = message.mentions.users.first();
    let szemely;
    let küldő = message.author;
    let szama = 0;
    try {
        szemely = szemelyek.username;
    } catch (erro) {
        const gay = new Discord.MessageEmbed()
            .setTitle("Howgay")
            .addField("Error: ", `${botconfig.error.howgay.replace(/pref-/g, prefix)}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(gay);
        return;
    }
    if (szemelyek.id == botconfig.creatorid) {
        szama = Math.floor(Math.random() * 25);
    } else {
        if (message.author.id == szemelyek.id) {
            szama = Math.floor(Math.random() * 50);
        } else {
            szama = Math.floor(Math.random() * 100);
        }
    }
    const gay = new Discord.MessageEmbed()
        .setTitle("Howgay")
        .addField(szemely + " ", `${szama}% gay`)
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
        if(szama >= 50)gay.setColor("#ff9ff3");
    message.channel.send(gay);
}}