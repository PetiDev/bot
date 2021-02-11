const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const { RedditSimple } = require("reddit-simple"); //reddit meme
const botconfig = require('./botconfig.json');
const prefix = botconfig.prefix;
exports.kopa = {};


let randomszám;
bot.on("ready", async () => {
    console.log(`${bot.user.username} > Elindultam`);
    bot.user.setActivity(botconfig.elfoglaltsag.elfoglaltsag.replace(/pref-/g, prefix), { type: botconfig.elfoglaltsag.type });
});
bot.on("message", async (message) => {
    const prefix = botconfig.prefix;
    if (message.author.bot) return;
    if (message.channel.type == "dm" && message.content.startsWith(prefix)) { message.author.send("Nem futtathatsz parancsot dm-ben"); return; }
    if (message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = require(`./commands/${command}.js`);

    if (!cmd) return;

    cmd.run(bot, message, args);


});

bot.on('messageReactionAdd', (reaction, user) => {
    if (this.kopa[reaction.message.id]) {
        const cucc = this.kopa[reaction.message.id];
        if (user.id != cucc.author) return;
        const kopapirolo = new Discord.MessageEmbed()
        .setTitle("Kő Papír Olló")
        .setTimestamp(Date.now())
        .setColor("RANDOM")
        let kopi;
        switch (reaction.emoji.name) {
            case '👊':
                kopi = 0
                break;
            case '📜':
                kopi = 1;
                break;
            case '✂':
                kopi = 2;
                break;
        }
        if(kopi == cucc.randomszam){
            kopapirolo.setDescription("🎉Nyertél🎉")
                        .addField("Tipped:",`${reaction.emoji.name}`);
                        switch(cucc.randomszam){
                            case 0:
                            kopapirolo.addField("Eredmény:",'👊');
                            break;
                            case 1: 
                            kopapirolo.addField("Eredmény:",'📜');
                            break;
                            case 2:
                            kopapirolo.addField("Eredmény:",'✂');
                        }
        }else{
            kopapirolo.setDescription("Vesztettél")
                        .addField("Tipped:",`${reaction.emoji.name}`);
                        switch(cucc.randomszam){
                            case 0:
                            kopapirolo.addField("Eredmény:",'👊');
                            break;
                            case 1: 
                            kopapirolo.addField("Eredmény:",'📜');
                            break;
                            case 2:
                            kopapirolo.addField("Eredmény:",'✂');
                        }
        }
        
        reaction.message.edit(kopapirolo);
        this.kopa[reaction.message.id] = undefined;
    }

})
bot.on("guildMemberAdd", (member) => {

    const join = new Discord.MessageEmbed()
        .setTitle("Üdv itt")
        .setDescription(member.username)
        .setTimestamp(Date.now())
        .setColor("RANDOM");
    const channel = bot.channels.cache.find(ch => ch.name === 'üdvözlő');
    if(!join)return;
    channel.send(join);
});
bot.login(process.env.TOKEN);