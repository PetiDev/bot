const Discord = require('discord.js');
const bot = new Discord.Client({
    disableEvryone: true,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const { RedditSimple } = require("reddit-simple"); //reddit meme
const botconfig = require('./botconfig.json');
const prefix = botconfig.prefix;


bot.on("ready", async () => {
    console.log(`${bot.user.username} > Elindultam`);
    bot.user.setActivity(botconfig.elfoglaltsag.elfoglaltsag.replace(/pref-/g, prefix), { type: botconfig.elfoglaltsag.type });
});
bot.on("message", async (message) => {
    const prefix = botconfig.prefix;
    if (message.author.bot) return;
    if (message.channel.type == "dm" && message.content.startsWith(prefix)) {message.author.send("Nem futtathatsz parancsot dm-ben");return;}
    if (message.content.indexOf(prefix) !== 0) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();
  
    const cmd = require(`./commands/${command}.js`);
  
    if (!cmd) return;
  
    cmd.run(bot, message, args);
    
    const mctlc = message.content.toLowerCase();
    
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