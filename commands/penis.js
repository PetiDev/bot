const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"penis",
    
run: function(bot,message){
    let personMention = message.mentions.users.first();
    let sender = message.author;
    let num;
    let ppLength = '';
   
    let person = (personMention)? personMention.username : sender.username;
    let personId = (personMention)? personMention.id : sender.id;
    
    if (personId == botconfig.creatorid) {
        num = Math.floor(Math.random() * 65);
    } else {
            num = Math.floor(Math.random() * 50);
        }
        
    for(count=num;count>=0;count--){
        ppLength += '=';
    }
    const penis = new Discord.MessageEmbed()
        .addField(person + " pénisze\n", `8${ppLength}D`)
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
    message.channel.send(penis);
}}