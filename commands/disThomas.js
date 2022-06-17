const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require("node:timers/promises").setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dis_thomas')
		.setDescription('Dis Thomas... + pose ta question, ou pas !')
        .addStringOption(option => option.setName('question')
		.setDescription('Quelle est ta question, si tu en as une ?')),
	async execute(interaction) {
		if (interaction.user.id === process.env.TY_ZUHL_ID) {
			await interaction.reply("Tu veux te poser une question à toi même ?");
			return;
		}
        const string = interaction.options.getString('question');
		await wait(2000);
		await interaction.channel.send(string ? `@Ty_Zulh Dis Thomas, ${string}` : `Dis Thomas, c'est normal que l'url change à chaque merge ?`);
		await wait(2000);
		await interaction.reply("N'hésite pas à poser d'autres questions, Thomas est toujours dispo !");
	},
};