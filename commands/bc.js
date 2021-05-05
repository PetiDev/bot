const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "bc",
    run: function (bot, message, args) {

        if (!(message.author.id == botconfig.bendi || message.author.id == botconfig.creatorid)) return;

        let Message = args.join(' ').replace(/<#(\d)+>/, '');
        let channelName = message.mentions.channels.first().name;
        const channel = message.guild.channels.cache.find(channelList => channelList.name === channelName);
        const bc = new Discord.MessageEmbed()
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);
        if (!channel) {
            bc.setDescription("Meg kell jelölnöd egy létező csatornát")
        } else {
            bc.setDescription(Message)
        }
        channel.send(bc);

    }
}