const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"coin",
run: function(bot,message,args){
    
    let tip = message.content.replace(prefix, '').replace('coin ', '');
        if (tip == "coin") tip = "Nem adtál meg semmit";
        let ek = Math.floor(Math.random() * 2 + 1);
        let coin;
        let wol = "Vesztettél";
        if (ek > 1) coin = "fej";
        if (ek < 2) coin = "írás";
        if (tip == coin) {
            wol = "Nyertél";
        }
        const coinf = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(wol)
            .addField("Eredmény:", `${coin}`)
            .addField("A Tipped:", `${tip}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(coinf);
}}