const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token, config } = require('./config.json');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

if (message.author.bot) return;

	if (message.author.id == '491355138347368463' || message.author.id == '675391536451682324' || message.author.id == '537486856384675852') {
		message.channel.send(message.content);
	}

if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

if (message.content === "!invite") {message.channel.send("https://discord.com/api/oauth2/authorize?client_id=764271962087751731&permissions=346176&scope=bot");}

const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
if (!command) return;

try {
	command.execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('there was an error trying to execute that command!');
}
});

client.login(token);
