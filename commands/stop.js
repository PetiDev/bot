const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"stop",
run: function(bot,message,args){
    
    if (message.author.id == botconfig.creatorid) {
        const stopped = new MessageEmbed()
            .setTitle("Leállítás...")
            .addField("Sikeresen leállítva ", `${message.author.username} által`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("#FF0000")
        message.channel.send({embeds:[stopped]});
        setTimeout(stop, 1000);
        function stop() {
            console.log("Leállítva " + message.author.username + " által");
            process.exit(0);
        }
    } else {
        const NincsJD = new MessageEmbed()
            .setTitle("Nincs jogod ehez!!")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send({embeds:[NincsJD]});
    }
}}