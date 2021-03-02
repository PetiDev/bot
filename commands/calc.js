const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"calc",
run: function(bot,message,args){
        const szam = message.content.replace(prefix,'').replace("calc",'').replace(/[C-Zc-z]/g,'')    //.replace(/write/g, '').replace(/process/g, '').replace(/destroy/g, '').replace(/bot/g, '').replace(/clear/g, '').replace(/kill/g, '').replace(/eval/g, '').replace(/botconfig/g, '').replace(/exit/g, '').replace(/fs/g, '').replace(/require/g, '').replace(/req/g, '').replace(prefix, '').replace(/calc/, '');
        console.log(szam)
        try {
            const eredmeny = eval(szam);
            const calce = new Discord.MessageEmbed()
                .setTitle("Eredmény: " + eredmeny)
                .addField("Számolás: ", `${szam}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(calce);
        } catch (err) {
            const calce = new Discord.MessageEmbed()
                .setTitle("Eredmény: " + botconfig.error.hiba)
                .addField("Számolás: Hiba", `${botconfig.error.calc}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(calce);
        }
    
}}