////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////

const nekos = require('nekos.life');
const neko = new nekos()

////////////////////Comando////////////////////

module.exports = {
    name: "pat",
    alias: "caricias",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
         //Codigo//
          //Let//
        let user = message.mentions.users.first()
        let mensaje = `${message.author.username} Ha acariciado a ${user.username}`
        let botid = "803274107512160297"
         //If's//
        if(!message.mentions.users.first()) return message.channel.send("Debes mencionar a alguien!") 
        if(user.id === message.author.id){
            return message.channel.send('No puedes acariciarte a ti mismo/a, Seria raro!')
        }
        if(user.id === botid){
            mensaje = `${message.author.username} Gracias por acariciarme ;P`
        }
         //Mensaje//
        neko.sfw.pat().then(neko => {
            const embed = new Discord.MessageEmbed()
               .setColor("RED")
               .setTitle(`${mensaje}`)
               .setImage(neko.url)
            message.channel.send(embed)
            })
    }
}