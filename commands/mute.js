const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name:"mute",
run: function(bot,message,args){

    if (!message.author.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nincs jogod hozzá");

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
    const mute = new MessageEmbed()
        .setTitle("Mute")
        .setDescription(`${member} le lett némítva`)
        .addField(`Indok:`,`${reason}`)
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor(`${botconfig.color}`);
    message.channel.send({embeds:[mute]});
}}