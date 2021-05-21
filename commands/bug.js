////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Definiciones////////////////////


////////////////////Comando////////////////////

module.exports = {
    name: "bug",
    alias: "reportbug",
    description: "Sistema de información",
    botPermissions: ["SEND_MESSAGES", "VIEW_CHANNEL"],
    run: async(client, message, args) => {
        
         //Codigo//
         //Lets//
        let bug = args.slice(0).join(" ")
        let owner = "803267589153357844"
        let sv = client.guilds.cache.get("844647846397607937")
        let channel = sv.channels.cache.get("844647846397607941")
        let lugar = ""
        let mensaje = ""
        
         //If's//
        if(!bug) return message.channel.send("**No has escrito algun Bug o Error**")
        if(message.channel.type === 'dm') {
          lugar = "Enviado Desde Mensaje Directo"
          mensaje = message.author
        } else {
          lugar = `Enviado Desde el servidor \`${message.guild.name}\`` 
          mensaje = message.channel
        }
        
         //Mensaje//
        let embed = new Discord.MessageEmbed()
           .setTitle("Se ha reportado un Error")
           .setDescription(`**Reportado por:** ${message.author.tag}\n${lugar}\n**Descripcion:** ${bug}`)
           .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        channel.send(`<@${owner}> han reportado un bug!`)
        channel.send(embed)
        message.delete()
        mensaje.send("¡Reporte Enviado, Gracias por ayudar a mejorar \`LunarBot\`!")
    }
}