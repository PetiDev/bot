const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const { RedditSimple } = require("reddit-simple"); //reddit meme
const botconfig = require('./botconfig.json');



bot.on("ready", async () => {
    console.log(`${bot.user.username} > Elindultam`);
    let prefix = botconfig.prefix;
    bot.user.setActivity(botconfig.elfoglaltsag.elfoglaltsag.replace(/pref-/g, prefix), { type: botconfig.elfoglaltsag.type });
});
bot.on("message", async (message) => {
    const prefix = botconfig.prefix;
    if (message.author.bot) return;
    if (message.channel.type == "dm" && message.content.startsWith(prefix)) { 
   if(message.author.id != botconfig.creatorid){ message.author.send("Nem futtathatsz parancsot dm-ben");
    return;}else{
}
}
    
    const mctlc = message.content.toLowerCase();
    //help
    if (mctlc.startsWith(prefix + 'help')) {
        const hrlp = new Discord.MessageEmbed()
        .setTitle("Help")
        .setTimestamp(Date.now())
        .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        .setColor("RANDOM");
        Object.entries(botconfig.help).forEach((key,value) => {
            hrlp.addField(prefix + key[0], key[1].replace(/pref-/g,prefix));
            })
        if (message.author.id == botconfig.creatorid) {
            hrlp.addField("\n __**Admin help**__ \n",`${botconfig.ahelp.lisdef}`);
            Object.entries(botconfig.ahelp).forEach((key,value) => {
                hrlp.addField(prefix + key[0], key[1].replace(/pref-/g,prefix));
                }) } else {}
        message.channel.send(hrlp);
    }
    //ping
    if (mctlc.startsWith(prefix + 'ping')) {
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
    if (mctlc.startsWith(prefix + 'calc')) {
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
    if (mctlc.startsWith(prefix + 'howgay')) {
        let szemelyek = message.mentions.users.first();
        let szemely;
        let küldő = message.author;
        var szama = 0;
        try {
            szemely = szemelyek.username;
        } catch (erro) {
            const gay = new Discord.MessageEmbed()
                .setTitle("Howgay")
                .addField("Error: ", `${botconfig.error.howgay.replace(/pref-/g, prefix)}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(gay);
            return;
        }
        if (szemelyek.id == botconfig.creatorid) {
            var szama = 0;
        } else {
            if (message.author.id == szemelyek.id) {
                var szama = Math.floor(Math.random() * 50);
            } else {
                var szama = Math.floor(Math.random() * 100);
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
    if (mctlc.startsWith(prefix + '8-ball')) {
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
    if (mctlc.startsWith(prefix + 'idő')) {

        try {
            let date = new Date();
            const ido = new Discord.MessageEmbed()
                .setTitle("Idő: " + date.toLocaleString())
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("RANDOM");
            message.channel.send(ido);
        } catch (err) { console.log("Idő lekérési hiba: \n" + err); }
    }
    //stop
    if (mctlc.startsWith(prefix + 'stop')) {

        if (message.author.id == botconfig.creatorid) {
            const stopped = new Discord.MessageEmbed()
                .setTitle("Leállítás...")
                .addField("Sikeresen leállítva ", `${message.author.username} által`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
                .setColor("#FF0000")
            message.channel.send(stopped);
            setTimeout(stop, 1000);
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
            message.channel.send(NincsJD);
        }
    }
    //bc
    if (mctlc.startsWith(prefix + 'bc')) {

        if (message.author.id == "336233673911173120" || message.author.id == botconfig.creatorid) {
            let me = message.content.replace(prefix, '').replace("bc ", '').replace(message.mentions.channels.array()[0], '');
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
    if (mctlc.startsWith(prefix + 'server_info')) {
        const serstat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Server Info")
            .setThumbnail(message.guild.iconURL())
            .addField("Név: ", `${message.guild}`)
            .addField("Tulaj ID:", `${message.guild.owner}`)
            .addField("Tagok:", `${message.guild.memberCount} tag van a szerveren`)
            .addField("Emojik:", `${message.guild.emojis.cache.size} emoji van`)
            .addField("Rangok:", `${message.guild.roles.cache.size} rang van`)
            .addField("Ping:", `${bot.ws.ping}ms`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`);
        message.channel.send(serstat);
    }
    //info
    if (mctlc.startsWith(prefix + 'info')) {
        const stat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Infók " + message.author.username + "-ról")
            .setThumbnail(message.author.avatarURL())
            .addField("Név:", `${message.author.username}`)
            .addField("ID:", `${message.author.id}`)
            .addField("Felhasználó létrehozva:", `${message.author.createdAt}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(stat);
    }
    //bot_info
    if (mctlc.startsWith(prefix + 'bot_info')) {
        const botstat = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle("Infók a botról.")
            .setThumbnail(bot.user.avatarURL())
            .addField("Név:", `${bot.user.username}`)
            .addField("Ramhasználat:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(3)}Mb/${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(3)}Mb`)
            .addField("Ennyi szerveren van bent: ", `${bot.guilds.cache.size}`)
            .addField("Bot létrehozva:", `${bot.user.createdAt}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(botstat);
    }
    //redditmeme
    if (mctlc.startsWith(prefix + 'meme')) {
        function randomFromArray(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
        const reddits = ['dankmemes', 'programmerHumor', 'holdup', 'cursedcomments']
        const memee = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setAuthor(bot.user.username, bot.user.avatarURL())
            .setDescription("Keresés...")
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        const msg = await message.channel.send(memee);
        RedditSimple.RandomPost(randomFromArray(reddits)).then(async res => {
            const m = {
                img: res[0].data.url,
                title: res[0].data.title,
                url: 'https://reddit.com' + res[0].data.permalink
            }
            memee.setTitle(m.title)
                .setURL(m.url)
                .setImage(m.img)
                .setDescription("")
            msg.edit(memee)
        }).catch(e => {
            console.log("Meme hiba: \n" + e);
        });
    }
    //szavazás
    if (mctlc.startsWith(prefix + 'szavazás')) {
        let vote = message.content.replace(prefix, '').replace('szavazás', '');
        try {

            const votembed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Szavazás:")
                .addField(vote, `By: ${message.author.username}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(votembed)
                .then(function (message) {
                    message.react("✔")
                    message.react("❌")
                });
        } catch (err) {
            const votembedE = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("Szavazás:")
                .addField(botconfig.error.vote, `To: ${message.author.username}`)
                .setTimestamp(Date.now())
                .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            message.channel.send(votembedE)
        }


    }
    //coin
    if (mctlc.startsWith(prefix + 'coin')) {
        let tip = message.content.replace(prefix, '').replace('coin ', '');
        if (tip == "coin") tip = "Nem adtál meg semmit";
        let ek = Math.floor(Math.random() * 2 + 1);
        let coin;
        let wol = "Vesztettél";
        if (ek > 1) coin = "fej";
        if (ek < 2) coin = "írás";
        if (tip == coin) {
            wol = "Nyertél";
        }
        const coinf = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(wol)
            .addField("Eredmény:", `${coin}`)
            .addField("A Tipped:", `${tip}`)
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
        message.channel.send(coinf);
    }
    //love
    if (mctlc.startsWith(prefix + 'love')) {
        let parok = message.content.replace(prefix, '').replace('love ', '').split(' ');
        if (parok == 'love') {
            const lovembedhiba = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Szerelem?")
                .setDescription(`${botconfig.error.love}`)
            message.channel.send(lovembedhiba);
            return;
        }
        let lovmeter = Math.floor(Math.random() * 100);
        let sziv;
        if (lovmeter <= 20) sziv = "💔";
        if (lovmeter >= 20 && lovmeter <= 50) sziv = "❤";
        if (lovmeter >= 50 && lovmeter <= 75) sziv = "💖";
        if (lovmeter >= 75) sziv = "💘";
        const lovembed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Szerelem?")
            .setDescription(`${parok[0]} és ${parok[1]}`)
            .addField(`${lovmeter}%-ban össze illenek`, `${sziv}`)
        message.channel.send(lovembed);
    }
    //dm
    if (mctlc.startsWith(prefix + 'dm')) {
        if (message.author.id == botconfig.creatorid) {
            let ember = message.mentions.users.first();
            let azm = message.content.replace(prefix, '').replace('dm ', '').split(' ');
            let azuzi = message.content.replace(prefix, '').replace('dm ', '').replace(azm[0], '');
            
            try { ember.send(azuzi); } catch {
                const dmHiba = new Discord.MessageEmbed()
                    .setColor('RANDOM')
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
        }
    }

});
bot.on("guildMemberAdd", (member) => {

    const join = new Discord.MessageEmbed()
        .setTitle("Üdv itt")
        .setDescription(member.username)
        .setTimestamp(Date.now())
        .setColor("RANDOM");
    const channel = bot.channels.cache.find(ch => ch.name === 'üdvözlő');
    channel.send(join);
});
bot.login(process.env.TOKEN);