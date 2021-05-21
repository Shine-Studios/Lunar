const express = require('express');
app = express();
app.get('/', function(req, res) {
	res.send('He iniciado corrrctamente!');
});

let port = process.env.PORT || 3000;

app.listen(port);


////////////////////Inicio////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

////////////////////Require's////////////////////

const db = require('megadb');
const marsnpm = require('marsnpm');
const canvas = require('canvas');
const nekos = require('nekos.life');
const star = require('star-labs');
const fs = require('fs');

////////////////////New's////////////////////

let prefixes = new db.crearDB('prefix');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./comandos").filter(file =>file.endsWith(".js"));

for (const file of commandFiles){
  const commands = require(`./comandos/${file}`);
  client.commands.set(commands.name, commands)
}


////////////////////Evento Ready////////////////////

client.on('ready', () => {
    console.log(`He iniciado correctamente!, Logged in ${client.user.tag}`)
    setInterval(() => {
		let estados = [
			`Utiliza -ayuda`,
			'dsc.gg/lunarbot',
			`Actualmente ${client.users.cache.size} usuarios!`
		];
		let chase_all = Math.floor(Math.random() * estados.length);
		client.user.setPresence({
			status: 'online',
			activity: {
				name: estados[chase_all],
				type: 'PLAYING'
			}
		});
	}, 30000);;
});

////////////////////Evento guildMemberAdd////////////////////

client.on('guildMemberAdd', member => {
    
    if(member.guild.id !== '844649186484813845') return;
    
    member.roles.add('844649466559594607');
});

////////////////////Evento guildCreate////////////////////

client.on(`guildCreate`, (guild, message) => {
    
    let canal = "844647846397607941";
    
    let embed = new Discord.MessageEmbed() 
        .setTitle(':tada: He sido añadido a un servidor! :tada:')
        .setColor("WHITE")
        .addField(':cyclone: Server', `${guild.name}`)
        .addField(`:crown: Owner`, `${guild.owner}`)
        .addField(':id: ID Del Servidor', `${guild.id}`)
        .addField(':trident: Miembros', `${guild.memberCount}`)
        .addField(':globe_with_meridians: Servidores Totales', `${client.guilds.cache.size}`)
        .setImage(guild.iconURL())
    client.channels.resolve(canal).send(embed);
});

////////////////////Evento guildDelete////////////////////

client.on(`guildDelete`, (guild, message) => {
    
    let canal = "844647846397607941";
    
    let embed = new Discord.MessageEmbed() 
        .setTitle(':tada: He sido eliminado de un servidor! :tada:')
        .setColor("RANDOM")
        .addField(':cyclone: Server', `${guild.name}`)
        .addField(`:crown: Owner`, `${guild.owner}`)
        .addField(':id: ID Del Servidor', `${guild.id}`)
        .addField(':trident: Miembros', `${guild.memberCount}`)
        .addField(':globe_with_meridians: Servidores Totales', `${client.guilds.cache.size}`)
        .setImage(guild.iconURL())
    client.channels.resolve(canal).send(embed);
    
    prefixes.delete(`${guild.id}`)
});

////////////////////Evento Message////////////////////

client.on('message', async message => {
         /////Inicio/////
         
    if(message.author.bot) return;
    
    let prefix = prefixes.tiene(`${message.guild.id}`) ? await prefixes.obtener(`${message.guild.id}`) : "-"
    
    if(!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
              ////SetPrefix////
    if(command === "prefix"){
        if(!message.member.permissions.has('MANAGE_GUILD')) return message.channrl.send(`Tu no tienes los suficientes permisos para ejecutar este comando!`);
        if(args[0].length >= "3") return message.channel.send(`Este prefijo es muy largo, Intenta con otro! \`(Debe ser menor a 3 argumentos!)\``);
        if(!args[0]) return message.channel.send(`Debes especificar algun prefijo!`);
        
        prefixes.set(`${message.guild.id}`, args[0]);
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`He establecido actualmente como prefijo **${args[0]}** puedes utilizar **${args[0]}comandos** para ver mis comandos!`)
        .setColor("GREY")
        message.channel.send(embed)
    }
    
        ////Inicio command handler////
    
    let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if (cmd){
        cmd.execute(client, message, args)
    }
});

////////////////////Login////////////////////

client.login(process.env['token']);