const { REST } = require('@discordjs/rest');
const fs = require('node:fs');
const { Routes } = require('discord-api-types/v9');
const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config();

const token = process.env.TOKEN; 
const clientId = process.env.CLIENT_ID;
// const guildId = process.env.GUILD_ID;
//to use while testing on TestGaspo server
const guildId = process.env.TEST_GUILD_ID;

const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
