////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "ayuda",
    alias: "help",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
        const embed = new Discord.MessageEmbed()
           .setAuthor(`${client.user.username}`)
           .setDescription(`LunarBot es la forma más fácil de divertirse en su Servidor de Discord.
           
Para empezar, Tienes que añadir el bot a tu servidor, luego de hacer esto debes ir a un canal cualquiera y poner el comando \`-help\`, para ver todos mis comandos y así poder divertirte a lo grande!\nㅤ\n`)
           .setColor('BLUE')
           .addField(`Comandos`, `Puedes ver todos mis comandos utilizando **[${prefix}comandos](https://dsc.gg/lunarserv)**\nㅤ\n`)
           .addField(`Invitame`, `¡Lunar se puede agregar a tantos servidores como tu lo desees!, [Haciendo click aqui puedes agregarlo al tuyo.](https://dsc.gg/lunarbot)\nㅤ\n`)
           .addField(`Servidor de Soporte`, `[Haga clic aquí](https://dsc.gg/lunarserv) para hablar con nuestro equipo de soporte si tiene problemas o dudas`)
        message.channel.send(embed)
    }
}