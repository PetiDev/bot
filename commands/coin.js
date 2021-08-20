const {Client,Intents, MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"coin",
run: function(bot,message,args){
    
    let tip = args[0];
    if(!(tip.includes('fej')||tip.includes('írás')))return;
    const num = Math.round(Math.random()*1);
    const coinFlipp = new MessageEmbed()
        .setTitle('Coinflipp')
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor(`${botconfig.color}`)
        .addField("Tipped: ",`${tip}`,true)

        if(num == 1){
            coinFlipp.addField("Érme:","írás",true)
        }else {
            coinFlipp.addField("Érme:","fej",true)
        }
        if((num == 1 && tip == 'fej') || (num == 0 && tip == 'írás')){
            coinFlipp.addField("Eredmény:","Vesztettél")
        }else{
            coinFlipp.addField("Eredmény:","Nyertél")
        }
        message.channel.send({embeds:[coinFlipp]})
}}