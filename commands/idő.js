const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"idő",
run: function(bot,message){
    
    try {
        let date = new Date();
        const ido = new MessageEmbed()
            .setTitle("Idő: " + date.toLocaleString())
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);
        message.channel.send({embeds:[ido]});
    } catch (err) { console.log("Idő lekérési hiba: \n" + err); }
}}