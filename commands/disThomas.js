const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dis_thomas')
		.setDescription('Dis Thomas... + pose ta question, ou pas !')
        .addStringOption(option => option.setName('input')
		.setDescription('Quelle est ta question, si tu en as une ?')),
	async execute(interaction) {
        const string = interaction.options.getString('input');
		await interaction.reply(string ? `@Ty_Zulh Dis Thomas, ${string}` : `Dis Thomas, c'est normal que l'url change à chaque merge ?`);
	},
};