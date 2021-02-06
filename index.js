const Discord = require('discord.js');
const bot = new Discord.Client({
     disableEvryone: true ,
     partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
    });
const Minesweeper = require('discord.js-minesweeper');/*Minesweeper game*/
const botconfig = require('./botconfig.json');
const tkn = require('./tkn.json');

bot.on("ready", async () => {
    console.log(`${bot.user.username} > Elindultam`);
    bot.user.setActivity(botconfig.elfoglaltsag.elfoglaltsag, { type: botconfig.elfoglaltsag.type });
});
bot.on("message", message => {
    if (message.author.bot) return;
    let prefix = botconfig.prefix;
//help
    if (message.content.toLowerCase().startsWith(prefix + 'help')) {
        let x = JSON.stringify(botconfig.help, null, 1).replace('{', '').replace('}', '').replace(/"/g, '');
        let xx = JSON.stringify(botconfig.ahelp, null, 1).replace('{', '').replace('}', '').replace(/"/g, '');
        if(message.author.id == botconfig.creatorid){
            const ahlep = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription(x + "\n Admin commandok \n" + xx, `A készítő: ${botconfig.creator}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
            message.channel.send(ahlep);
        }else{
        
        const hlep = new Discord.MessageEmbed()
            .setTitle("Help")
            .setDescription(x, `A készítő: ${botconfig.creator}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
            message.channel.send(hlep);
        }
        
    }
//ping
    if (message.content.toLowerCase().startsWith(prefix + 'ping')) {
        console.log("pung = " + bot.ws.ping + "ms")
        const ping = new Discord.MessageEmbed()
            .setTitle("Pong")
            .addField("A ping: ", `${bot.ws.ping}ms`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(ping);

    }
//calc
    if (message.content.toLowerCase().startsWith(prefix + 'calc')) {
        const szam = message.content.replace(/write/g, '').replace(/process/g, '').replace(/destroy/g, '').replace(/bot/g, '').replace(/clear/g, '').replace(/kill/g, '').replace(/eval/g, '').replace(/botconfig/g, '').replace(/exit/g, '').replace(/fs/g, '').replace(/require/g, '').replace(/req/g, '').replace(prefix, '').replace(/calc/, '');
        try {
            const eredmeny = eval(szam);
            const calce = new Discord.MessageEmbed()
                .setTitle("Eredmény: " + eredmeny)
                .addField("Számolás: ", `${szam}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(calce);

        } catch (err) {
            console.error("Calc Error: \n" + err + "\n -------------")
            const calce = new Discord.MessageEmbed()
                .setTitle("Eredmény: " + botconfig.error.hiba)
                .addField("Számolás: Hiba", `${botconfig.error.calc}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(calce);
        }
    }
//howgay
    if (message.content.toLowerCase().startsWith(prefix + 'howgay')) {


        let szemelyek = message.mentions.users.first();
        let szemely;
        let küldő = message.author;
        var szama = 0;
        try {
            szemely = szemelyek.username;
        } catch (erro) {
            const gay = new Discord.MessageEmbed()
                .setTitle("Howgay")
                .addField("Error: ", `${botconfig.error.howgay}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(gay);

            return;
        }

        if (küldő.id == botconfig.creatorid) {
            var szama = 0;
        } else {
            if (message.author.username == szemely) {
                var szama = Math.floor(Math.random() * 51);

            } else {
                var szama = Math.floor(Math.random() * 101);
            }
        }
        const gay = new Discord.MessageEmbed()
            .setTitle("Howgay")
            .addField(szemely + " ", `${szama}% gay`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor("RANDOM");
        message.channel.send(gay);
    }
//8-ball
    if (message.content.toLowerCase().startsWith(prefix + '8-ball')) {
        try {
            let ar = message.content.replace(prefix, '').replace("8-ball", '').replace(' ', '').split(',');
            let d = Math.floor(Math.random() * ar.length);
            let rand = ar[d];

            const ball = new Discord.MessageEmbed()
                .setTitle("8-ball")
                .addField("Eredmény: ", `${rand}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(ball);
        } catch (e) {
            const ball = new Discord.MessageEmbed()
                .setTitle("8-ball")
                .addField("Eredmény: Hiba ", `${botconfig.error.nball}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(ball);
        }
    }
//idő
    if (message.content.toLowerCase().startsWith(prefix + 'idő')) {

        try {
            let date = new Date();
            const ido = new Discord.MessageEmbed()
                .setTitle("Idő: " + date.toLocaleString())

                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(ido);
        } catch (err) { console.log(err); }
    }
//stop
    if (message.content.toLowerCase().startsWith(prefix + 'stop')) {

        if (message.author.id == botconfig.creatorid) {
            const Stopped = new Discord.MessageEmbed()
                .setTitle("Sikeresen leállítva " + message.author.username + " által")
                .setTimestamp(Date.now())
                .setFooter("Lefuttatta: ", `${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(Stopped);
            setTimeout(stop, 100);
            function stop() {
                console.log("Leállítva " + message.author.username + " által");
                process.exit(0);
            }
        } else {
            const NincsJD = new Discord.MessageEmbed()
                .setTitle("Nincs jogod ehez!!")
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(NincsJD)
        }
    }
//bc
    if (message.content.toLowerCase().startsWith(prefix + 'bc')) {

        if (message.author.id == "336233673911173120" || message.author.id == botconfig.creatorid) {
            let me = message.content.replace(prefix, '').replace("bc ", '').replace(message.mentions.channels.array()[0], '');
            console.log(me);
            let csat = message.mentions.channels.array()[0].name;
            const channel = message.guild.channels.cache.find(ch => ch.name === csat);
            if (!channel) return;

            const bcMe = new Discord.MessageEmbed()
                .setTitle(me)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");

            channel.send(bcMe);
        } else {
            return;
        }
    }
//server_info
    if (message.content.toLowerCase().startsWith(prefix + 'server_info')) {
        
        const serstat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL())
            .addField("Név: ", `${message.guild}`)
            .addField("Tulaj ID:", `${message.guild.owner}`)
            .addField("Tagok:", `${message.guild.memberCount} tag van a szerveren`)
            .addField("Emojik:", `${message.guild.emojis.cache.size} emoji van`)
            .addField("Rangok:", `${message.guild.roles.cache.size} rang van`)
            .addField("Ping:", `${bot.ws.ping}ms`);
        message.channel.send(serstat);
    }
//info
    if (message.content.toLowerCase().startsWith(prefix + 'info')) {
        const stat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Infók " + message.author.username + "-ról")
            .setThumbnail(message.author.avatarURL())
            .addField("Név:", `${message.author.username}`)
            .addField("ID:", `${message.author.id}`)
            .addField("Felhasználó létrehozva:", `${message.author.createdAt}`)

        message.channel.send(stat);
    }
//bot_info
    if (message.content.toLowerCase().startsWith(prefix + 'bot_info')) {
        const botstat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Infók a botról.")
            .setThumbnail(bot.user.avatarURL())
            .addField("Név:", `${bot.user.username}`)
            .addField("Ramhasználat:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3)}Mb/${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(3)}Mb`)
            .addField("Ennyi szerón van bent: ", `${bot.guilds.cache.size}`)
            .addField("Bot létrehozva:", `${bot.user.createdAt}`)

        message.channel.send(botstat);
    }


});


bot.on("guildMemberAdd", (member) => {
    console.log(member.user.username + " belépett");
    const join = new Discord.MessageEmbed()
        .setTitle("Üdv itt")
        .addField(member)
        .setTimestamp(Date.now())
        .setColor("RANDOM");
    const channel = bot.channels.cache.find(ch => ch.name === 'üdvözlő');
    channel.send(join);

});

bot.login(tkn.token);