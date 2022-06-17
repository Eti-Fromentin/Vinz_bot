const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("titre")
    .setDescription("Oh le bô titre !"),
  async execute(interaction) {
    const gif = new MessageEmbed()
      .setDescription("Le beau titre!")
      .setImage("https://c.tenor.com/6cZvdzn0zskAAAAC/bruce-titre.gif");
    await interaction.reply({ content: "en cours", ephemeral: true });
    await interaction.channel.send(`Ohh, Qu'il est beau !`);
    await interaction.channel.send({ embeds: [gif] });
  },
};
