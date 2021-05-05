const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"dm",
run: function(bot,message,args){
    
    if (message.author.id == botconfig.creatorid) {
        let ember = message.mentions.users.first();
        let azm = message.content.replace(prefix, '').replace('dm ', '').split(' ');
        let azuzi = message.content.replace(prefix, '').replace('dm ', '').replace(azm[0], '');
        
        try { ember.send(azuzi); } catch {
            const dmHiba = new Discord.MessageEmbed()
            .setColor(`${botconfig.color}`)
                .setTitle("DM")
                .setDescription(`${botconfig.error.dm.replace(/pref-/g, prefix)}`)

            message.channel.send(dmHiba);
            return;
        }
        const MsgSent = new Discord.MessageEmbed()
            .setTitle("Üzenet elküldve")
            .setDescription(`${ember}-nek/nak`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(MsgSent);
    } else {
        const DmNincsJD = new Discord.MessageEmbed()
            .setTitle("Nincs jogod ehez!!")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(DmNincsJD);
}}}