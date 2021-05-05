const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"kick",
run: function(bot,message,args){
    const kick = new Discord.MessageEmbed()
    if(!message.member.hasPermission('KICK_MEMBERS')) {
        kick.setTitle("Kick")
        .setDescription("Nincs jogod kickelni")
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
        message.channel.send(kick);
        return;
    };
    let mentionMember = message.mentions.members.first();
        
        if(!mentionMember) {
            kick.setTitle("Kick")
            .setDescription("Meg kell jelölnöd valakit")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);
            message.channel.send(kick);
            return;
        }
        let mess = message.content.replace(prefix,'').replace('kick','').split('|');
        
        mentionMember.kick()
            .then(() => {
                kick.setTitle("Kick")
            .addField(`${mess[0]} sikeresen kickelve`,`Indok: ${mess[1]}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);
            message.channel.send(kick);
        })
            .catch(console.error);
    
}}