const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"mute",
run: function(bot,message,args){

    let member = message.mentions.members.first();
    let role;
    try{
        message.guild.roles.cache.forEach(element => {
            if(element.name == "Muted"|| element.name == "muted" ){
                role = element;

                return;
            }
        });
    }catch(e){}
  
    member.roles.add(role);
    args[0]='';
    let reason = args.join(' ');
    const ping = new Discord.MessageEmbed()
        .setTitle("Pong <a:pinghammer:809461559117348904>")
        .setDescription(`${member} le lett némítva`)
        .addField(`Indok:`,`${reason}`)
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor(`${botconfig.color}`);
    message.channel.send(ping);
}}