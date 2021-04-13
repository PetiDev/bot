const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"penis",
    
run: function(bot,message,args){
    let szemelyek = message.mentions.users.first();
    let szemely;
    let kuldo = message.author;
    let szama = 0;
    let eq = '';
    try {
        szemely = (szemelyek)? szemelyek.username : kuldo.username;
        szemelyId = (szemelyek)? szemelyek.id : kuldo.id;
    } catch (erro) {
        
        const penis = new Discord.MessageEmbed()
            .setTitle("Penis")
            .addField("Error: ", `Nem tudom mit tudtál elrontani`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(penis);
        return;
    }
    if (szemelyId == botconfig.creatorid) {
        szama = Math.floor(Math.random() * 65);
    } else {
            szama = Math.floor(Math.random() * 50);
        }
        
    for(count=szama;count>=0;count--){
        eq += '=';
    }
    const penis = new Discord.MessageEmbed()
        .setTitle("Penis")
        .addField(szemely + " pénisze\n", `8${eq}D`)
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
    message.channel.send(penis);
}}