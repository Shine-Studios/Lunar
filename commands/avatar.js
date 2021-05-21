////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "avatar",
    alias: "foto",
    description: "Otros",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
          //Let//
        let miembro = message.mentions.users.first()
         //If//
        if (!miembro) {
             //Mensaje Propio//
            const embed = new Discord.MessageEmbed()
               .setImage(`${message.author.displayAvatarURL({ size: 1024, dynamic : true })}`)
               .setColor(0x66b3ff)
               .setFooter(`Avatar de ${message.author.tag}`);
            message.channel.send(embed);
        } else {
             //Mensaje Mencion//
            const embed = new Discord.MessageEmbed()
               .setImage(`${miembro.displayAvatarURL({ size: 1024, dynamic : true })}`)
               .setColor(0x66b3ff)
               .setFooter(`Avatar de ${miembro.tag}`);
            message.channel.send(embed);
        };
    }
}