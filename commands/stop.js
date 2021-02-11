const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"stop",
run: function(bot,message,args){
    
    if (message.author.id == botconfig.creatorid) {
        const stopped = new Discord.MessageEmbed()
            .setTitle("Leállítás...")
            .addField("Sikeresen leállítva ", `${message.author.username} által`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("#FF0000")
        message.channel.send(stopped);
        setTimeout(stop, 1000);
        function stop() {
            console.log("Leállítva " + message.author.username + " által");
            process.exit(0);
        }
    } else {
        const NincsJD = new Discord.MessageEmbed()
            .setTitle("Nincs jogod ehez!!")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(NincsJD);
    }
}}