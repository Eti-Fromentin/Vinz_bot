const {
  SlashCommandBuilder
} = require("@discordjs/builders");
const {
    MessageActionRow,
    MessageSelectMenu} = require("discord.js");
const { quoteAndSound } = require("../georgesData");

const shufledSelectQuotes = [...quoteAndSound]
  .sort(() => Math.random() - 0.5)
  .slice(0, 20);
const georgesArray = shufledSelectQuotes.map((elt) => {
  return {
    label: `#${elt.name}`,
    value: elt.name,
  };
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("georges")
    .setDescription(
      `Qu'est ce que Georges et ses amis ont à nous dire aujourd'hui ?`
    ),
  async execute(interaction) {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("selectGeorges")
        .setPlaceholder("De l'absurde...")
        .addOptions(georgesArray)
    );
    await interaction.reply({
      content: `Choisis l'une des options suivantes: `,
      components: [row],
      ephemeral: true,
    });
  },
};
