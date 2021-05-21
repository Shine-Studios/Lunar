////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const marsnpm = require('marsnpm');

////////////////////Comando////////////////////

module.exports = {
    name: "bored",
    alias: "aburrirse",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
         //Let's//
        let respuesta = ["Se ha aburrido", "Esta por dormirse del aburrimiento", "No tiene nada que hacer y se aburre", "Se aburre mucho"]
        let autor = message.author.username;
        let sleepe = await marsnpm.bored();
         //Var//
        var random = respuesta[Math.floor(Math.random() * respuesta.length)]
         //Mensaje//
        const embed = new Discord.MessageEmbed()
           .setTitle(`${autor} ${random} 😪`) 
           .setColor("RANDOM")
          .setImage(sleepe);
        message.channel.send(embed);
    }
}