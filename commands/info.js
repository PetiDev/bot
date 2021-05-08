const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "info",
    run: function (bot, message, args) {


        function changeDate(getDate){
            const d = new Date(getDate);
                date = d.getHours() + ":" + d.getMinutes() + ", " + d.toDateString();
                return date;
        }

        const info = new Discord.MessageEmbed()
            .setColor(`${botconfig.color}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`);
  

        switch (args[0]) {
            case "user":

               

                let personMention = message.mentions.users.first();
                let person = (personMention) ? personMention : message.author;

                
                info.setTitle("Infók " + person.username + "-ról")
                    .setThumbnail(person.avatarURL())
                    .addField("Név:", `${person.username}`, true)
                    .addField("ID:", `${person.id}`, true)
                    .addField("Felhasználó létrehozva:", `${changeDate(person.createdAt)}`);
                break;
            case "bot":

                info.setTitle("Infók a botról.")
                    .setThumbnail(bot.user.avatarURL())
                    .addField("Név:", `${bot.user.username}`)
                    .addField("Ramhasználat:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3)}Mb`)
                    .addField("Ennyi szerveren van bent: ", `${bot.guilds.cache.size}db`)
                    .addField("Bot létrehozva:", `${changeDate(bot.user.createdAt)}`)
                    .addField("Prefix:", prefix,true)
                    .addField("Ping:",`${bot.ws.ping}ms`,true)

                break;
            case "server":

                info.setTitle("Server Info")
                    .setThumbnail(message.guild.iconURL())
                    .addField("Név: ", `${message.guild}`)
                    .addField("Tulaj ID:", `${message.guild.owner}`)
                    .addField("Tagok:", `${message.guild.memberCount} db`, true)
                    .addField("Emojik:", `${message.guild.emojis.cache.size} db`, true)
                    .addField("Rangok:", `${message.guild.roles.cache.size} db`, true);

                break;
            default:
                info.setTitle("Info help")
                    .setDescription(`${prefix}info [user,bot,server]`)
        }


        message.channel.send(info);
    }
}