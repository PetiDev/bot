const {Client,Intents, MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "8-ball",
    run: function (bot, message, args) {

        const ball = new MessageEmbed()
            .setTitle("8-ball")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);
        if (!args.length) {
            ball.addField("Eredmény: Hiba ", `${botconfig.error.nball}`)
            message.channel.send(ball);
            return;
        }
        let d = Math.floor(Math.random() * args.length);
        let rand = args[d];

        ball.addField("Eredmény: ", `${rand}`)
        message.channel.send({ embeds: [ball]});
    }
}