const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"idő",
run: function(bot,message){
    
    try {
        let date = new Date();
        const ido = new Discord.MessageEmbed()
            .setTitle("Idő: " + date.toLocaleString())
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);
        message.channel.send(ido);
    } catch (err) { console.log("Idő lekérési hiba: \n" + err); }
}}