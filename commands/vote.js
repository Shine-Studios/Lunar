////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "vote",
    alias: "votar",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
        
          //Codigo//
        const embed = new Discord.MessageEmbed()
           .setTitle(`:green_circle: Votanos!`)
           .setDescription(`Hola ${message.author.tag}, Recuerda que puedes votar por nosotros en distintas listas de bots, asi llegamos a muchas mas personas!\nㅤ\n`)
           .addField(`<:dbleu:844920100817862717> Discord-BotList.eu`, `Vota por nosotros en [discord-botlist.eu](https://discord-botlist.eu/bots/803274107512160297), Asi podemos llegar a muchas mas personas!\nㅤ\n`)
           .addField(`<:mybot:844920021876342784> MyBot List`, `Vota por nosotros en [portalmybot.com/mybotlist](https://portalmybot.com/mybotlist/bot/803274107512160297), Asi podemos llegar a muchas mas personas!\nㅤ\n`)
           .setColor('GREEN')
        message.channel.send(embed)
    }
}