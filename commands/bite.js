const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("sub")
    .setDescription("sub ?!?")
    .addStringOption((option) =>
      option.setName("name").setDescription("A qui est-ce destiné ?")
    ),
  async execute(interaction) {
    const recipient = `${interaction.options.getString("name")}, ` || "";
    if (interaction.user.id !== process.env.TY_ZULH_ID) {
      await interaction.reply({
        content: `Cette commande n'est pas pour toi !`,
        ephemeral: true,
      });
    } else if (interaction.user.id === process.env.TY_ZULH_ID) {
      await interaction.reply({ content: "en cours", ephemeral: true });
      await wait(2000);
      await interaction.channel.send(`${recipient} Va sucer une bite !`);
      await wait(2000);
      await interaction.channel.send(`N'importe laquelle !`);
      await wait(2000);
      await interaction.channel.send(`Mais vas-y !`);
    }
  },
};
