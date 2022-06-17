const { SlashCommandBuilder } = require("@discordjs/builders");
const wait = require("node:timers/promises").setTimeout;
const { MessageEmbed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("invoke")
    .setDescription("Invoke ?!?")
    .addStringOption((option) =>
      option
        .setName("input")
        .setDescription("Qui veux tu invoquer ?")
        .setRequired(true)
        .addChoices(
          { name: "Vinz", value: "Vinz" },
          { name: "Sophie", value: "Sophie" },
          { name: "PE", value: "PE" },
          { name: "Ambre", value: "Ambre" },
          { name: "Charlotte", value: "Charlotte" },
          { name: "Thomas", value: "Thomas" }
        )
    ),

  async execute(interaction) {
    const string = interaction.options.getString("input");
    const userName = interaction.user.username;
    interaction.reply({ content: `Invocation en cours...`, ephemeral: true });
    await wait(2000);
    interaction.channel.send(`${userName} invoque ${string}`);
    await wait(3000);
    switch (string) {
      case "Vinz":
        const gifVinz = new MessageEmbed()
          .setDescription("Starfoullah")
          .setImage(
            "https://c.tenor.com/V8uuTiixUEEAAAAC/starwarsfoullah-starfoullah.gif"
          );
        await interaction.channel.send(`Starfoullah ! Tu t'attendais à quoi ?`);
        await wait(1000);
        await interaction.channel.send({
          embeds: [gifVinz],
        });
        break;
      case "Sophie":
		const gifSo = new MessageEmbed()
		.setDescription("Qui d'autre ?")
		.setImage(
		  "https://c.tenor.com/Hwyh8MC3D5UAAAAC/rfcdscd.gif"
		);
        await interaction.channel.send(
          `Les gens trop propres, ça m'exaspère !!`
        );
        await wait(1000);
        await interaction.channel.send({
          embeds: [gifSo],
        });
        break;
      case "PE":
		const gifPe = new MessageEmbed()
		.setDescription("hou hou")
		.setImage(
		  "https://c.tenor.com/vB2P29MEUjAAAAAC/kaamelott-arthur.gif"
		);
        await interaction.channel.send(`Personne n'est nul part !`);
        await wait(1000);
        await interaction.channel.send({
          embeds: [gifPe],
        });
        break;
      case "Ambre":
		const gifAm = new MessageEmbed()
		.setDescription("Fight !")
		.setImage(
		  "https://c.tenor.com/2co4feAipsYAAAAd/hasbulla-hasbik.gif"
		);
        await interaction.channel.send(
          `Je veux pas que tu me rassures mec, je veux qu'on se fight !`
        );
        await wait(1000);
        await interaction.channel.send({
          embeds: [gifAm],
        });
        break;
      case "Charlotte":
		const gifCh = new MessageEmbed()
		.setDescription("Burn!")
		.setImage(
		  "https://c.tenor.com/Jl-mymXzhywAAAAC/elmo-fire.gif"
		);
		await interaction.channel.send(
		  `Toi de toutes façons, t'as soit envie de brûler des trucs, soit de botter des culs !`
		);
        await wait(1000);
        await interaction.channel.send({
          embeds: [gifCh],
        });
        break;
      case "Thomas":
		const gifTh = new MessageEmbed()
		.setDescription("Every day !")
		.setImage(
		  "https://c.tenor.com/bCUkRcXp8JYAAAAC/painting-bob-ross.gif"
		);
        await interaction.channel.send(
          `Je m'en peins allégrement les couilles avec le pinceau de l'indifférence !`
        );
        await wait(1000);
        await interaction.channel.send({
          embeds: [gifTh],
        });
        break;
    }
  },
};
