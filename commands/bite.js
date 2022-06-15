const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder().setName("sub").setDescription("sub ?!?"),
  async execute(interaction) {
    if (interaction.user.id !== process.env.GASPO_ID) {
      await interaction.reply(
        `Cette commande est n'est pas pour n'importe qui !`
      );
    } else {
      await interaction.reply(`Va sucer une bite !`);
      await wait(2000);
      await interaction.followUp(`N'importe laquelle !`);
      await wait(2000);
      await interaction.followUp(` Mais vas-y !`);
    }
  },
};
