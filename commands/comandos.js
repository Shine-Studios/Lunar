////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "comandos",
    alias: "cmd",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
        
          //Codigo//
        const embed = new Discord.MessageEmbed()
           .setTitle('Lunar')
           .setDescription(`A continuación, te dejare todos mis comandos divididos por categorías!\nㅤ\n`)
           .addField(`:joy: Anime`, `\n\`${prefix}kiss\` •> **Besa a alguien!**\n\`${prefix}pat\` •> **Acaricia a alguien!**\n\`${prefix}slap\` •> **Golpea a alguien!**\n\`${prefix}kill\` •> **Acaba con la vida de alguien!**\n\`${prefix}angry\` •> **Demuestra que te has enfadado!**\n\`${prefix}bored\` •> **Te aburres mucho!**\n\`${prefix}cry\` •> **Con este comando lloras!** ;(\n\`${prefix}sleep\` •> **Hay sueño no?**\n`)
           .addField(`❕ Información`, `\n\`${prefix}info\` •> **Muestra mi información!**\n\`${prefix}help\` •> **Muestra el apartado de ayudas!**\n`)
           .addField(`:rainbow: Otros`, `\n\`${prefix}meme\` •> **Mira unos buenos memes!**\n\`${prefix}howcute\` •> **Porcentaje del 1 al 100 de lo bonito que ere!s**\n\`${prefix}8ball\` •> **Pregunta algo que lo respondere!**\n\`${prefix}avatar\` •> **Mira tu avatar!**`)
           .addField(`:lock: Soporte`, `\n\`${prefix}invite\` •> **Invitame a tus servidores!**\n\`${prefix}server\` •> **Unete a mi servidor de soporte!**\n\`${prefix}bug\` •> **Reporta un bug!**\n`)
           .setFooter(`${message.author.username}, Utiliza ${prefix}vote para votarnos!`, message.author.displayAvatarURL())
        message.channel.send(embed)
    }
}