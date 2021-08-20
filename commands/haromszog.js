const {Client,Intents,MessageEmbed}= require('discord.js');
const bot = new Client({
    intents:[Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] ,
    partials: ['MESSAGE', 'REACTION', 'GUILD_MEMBER', 'USER']
});
const botconfig = require('../botconfig.json');
const prefix = botconfig.prefix;
module.exports = {
    name: "ping",
    run: function (bot, message, args) {

        let alpha;
        let beta;
        let delta;

        let alpha2;
        let beta2;
        let delta2;

        if(args[0] != 0){
            alpha = parseInt(args[0])
        }
        if(args[1] != 0){
            beta = parseInt(args[1])
        }
        if(args[2] != 0){
            delta = parseInt(args[2])
        }

        if(args[3] != 0){
            alpha2 = parseInt(args[3])
        }
        if(args[4] != 0){
            beta2 = parseInt(args[4])
        }
        if(args[5] != 0){
            delta2 = parseInt(args[5])
        }



        finder()
        function finder() {
            
            if (alpha && beta && delta && alpha2 && beta2 && delta2) {
                logger()
                return;
            }

            //alpha,beta,delta
            if (!alpha) {
                if (!alpha2) {
                    if (!(beta && delta)) {
                        alpha = 180 - (180 - (beta2 + delta2));
                        finder()
                        return;
                    }
                    alpha = 180 - (beta + delta);
                    finder()
                    return;
                }
                alpha = 180 - alpha2;
                finder()
                return;
            }

            if (!beta) {
                if (!beta2) {
                    if (!(alpha && delta)) {
                        beta = 180 - (180 - (alpha2 + delta2));
                        finder()
                        return;
                    }
                    beta = 180 - (alpha + delta);
                    finder()
                    return;
                }
                beta = 180 - beta2;
                finder()
                return;
            }

            if (!delta) {
                if (!delta2) {
                    if (!(beta && alpha)) {
                        delta = 180 - (180 - (beta2 + alpha2));
                        finder()
                        return;
                    }
                    delta = 180 - (beta + alpha);
                    finder()
                    return;
                }
                delta = 180 - delta2;
                finder()
                return;
            }

            //alpha2,beta2,delta2
            if (!alpha2) {
                if (!alpha) {
                    if (!(beta2 && delta2)) {
                        alpha2 = 180 - (180 - (beta + delta));
                        finder()
                        return;
                    }
                    alpha2 = 180 - (beta2 + delta2);
                    finder()
                    return;
                }
                alpha2 = 180 - alpha;
                finder()
                return;
            }

            if (!beta2) {
                if (!beta) {
                    if (!(alpha2 && delta2)) {
                        beta2 = 180 - (180 - (alpha + delta));
                        finder()
                        return;
                    }
                    beta2 = 180 - (alpha2 + delta2);
                    finder()
                    return;
                }
                beta2 = 180 - beta;
                finder()
                return;
            }

            if (!delta2) {
                if (!delta) {
                    if (!(beta2 && alpha2)) {
                        delta2 = 180 - (180 - (beta + alpha));
                        finder()
                        return;
                    }
                    delta2 = 180 - (beta2 + alpha2);
                    finder()
                    return;
                }
                delta2 = 180 - delta;
                finder()
                return;
            }

        }

        

        function logger() {
            
            const szog = new MessageEmbed()
            .setTimestamp(Date.now())
            .setFooter(`Lefuttatta: ${message.author.username}#${message.author.discriminator}`)
            .setColor(`${botconfig.color}`);

            let check = alpha + beta + delta;
            let check2 = alpha2 + beta2 + delta2;


            if (check != 180) {
                szog.setDescription("nincs megoldás")
                message.channel.send(szog);
                return;
            }
            if (check2 != 360) {
                szog.setDescription("nincs megoldás");
                message.channel.send({embeds:[szog]});
                return;
            }

            
            
            szog.setTitle("Szögek")
            .addField("Alfa : ", `${alpha}°`)
            .addField("Béta : ", `${beta}°`)
            .addField("Delta : ", `${delta}°`)
            .addField("Alfa. : ", `${alpha2}°`)
            .addField("Béta. : ", `${beta2}°`)
            .addField("Delta. : ", `${delta2}°`);
            message.channel.send(szog);
        }

        
            
          function send() {
            
          }  
        
    }
}