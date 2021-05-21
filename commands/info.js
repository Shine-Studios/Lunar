////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

let days = 0;
let week = 0;

////////////////////Comando////////////////////

module.exports = {
    name: "info",
    alias: "botinfo",
    description: "Sistema de información"
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"]
    run: async(client, message, args) => {
        
          //Codigo//
        let uptime = ``; 
        let owner = `803267589153357844`
        let totalSeconds = (client.uptime / 1000);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;  
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        
         //If's//
        if(hours > 23){
            days = days + 1;
            hours = 0;
        }

        if(days == 7){
            days = 0;
            week = week + 1;
        }

        if(week > 0){
            uptime += `${week} week, `;
        }

       if(minutes > 60){
           minutes = 0;
       }
         //Mensaje//
       uptime += `${days} Dias, ${hours} Horas, ${minutes} Minutos ${seconds} seconds`; 
       const botinfo = new Discord.MessageEmbed()
          .setAuthor(`Informacion del bot`, client.user.avatarURL())
          .addField(`<:staff:838582198306209822> Desarrollador`, `<@${owner}>`)
          .addField("<:loop:841306670503034924> Servidores: ",
            "```\n " + client.guilds.cache.size + "\n```")
          .addField(":clock10: Uptime: ", "```\n" + uptime + "\n```")
          .addField(
            ":chart_with_upwards_trend: RAM: ",
            "```\n" +
            (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +
            "MB\n```"
            )
          .addField("<:1618_users_logo:838569022458298379> Usuarios: ", "```\n" + client.users.cache.size + "\n```")
          .addField("<:js:838576696033542164> Lenguaje: ", '```\nNode.JS\n```')
          .addField("<:js:838576696033542164> Libreria: ", "```\nDiscord.js v12.3.2\n```")
          .setFooter(`Informacion del bot solicitada por ${message.author.username}`)
          .setColor("RANDOM");
       message.channel.send(botinfo);
    }
}