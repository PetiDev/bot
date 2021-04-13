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
        if (tip == "coin"){
            const coinf = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Coin flipp")
            .addField("Error: ", `Meg kell adnod a tipped(fej/írás)`)
            coinf.setTimestamp(Date.now())
            coinf.setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(coinf);
        }else{
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
            .setTitle("Coin flipp")
            .setDescription(wol)
            .addField("Eredmény:", `${coin}`,true)
            .addField("A Tipped:", `${tip}`,true)
            coinf.setTimestamp(Date.now())
            coinf.setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(coinf);
    }
}}