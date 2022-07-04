const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "poll",
  description: "Create a poll",
  data: new SlashCommandBuilder()
    .setName("sondage")
    .setDescription("Ecris la question et les réponse possible !")
    .addStringOption((option) =>
      option
        .setName("question")
        .setDescription("Quelle est ta question ?")
        .setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("reponses")
        .setDescription(
          `Ecris les réponses au sondage séparées d'un point virgules (;).`
        )
    ),
  async execute(interaction) {
    await interaction.reply(`Nouveau sondage de ${interaction.user.username}`);
    const question = interaction.options.getString("question");
    const options = interaction.options.getString("reponses");
    if (!options) {
      const embed = new MessageEmbed()
        .setTitle("📊 " + question).setDescription('Votez ! \n\n')
        .setColor("#00D1CD");
      await interaction.channel.send({ embeds: [embed] }).then((msg) => {
        msg.react("👍");
        msg.react("👎");
      });
    } else {
      const responses = options.split(";");
      const numbers = [
        "0️⃣",
        "1️⃣",
        "2️⃣",
        "3️⃣",
        "4️⃣",
        "5️⃣",
        "6️⃣",
        "7️⃣",
        "8️⃣",
        "9️⃣",
      ];
      if (responses.length > numbers.length) {
        await interaction.reply({
          content: `Tu as vu trop grand ! Pas plus de 10 réponses possibles !`,
          ephemeral: true,
        });
        return;
      }
      const choices = [];
      for (let i = 0; i < responses.length; i++) {
        choices.push(numbers[i] + " =>  " + responses[i]);
      }
      const embed = new MessageEmbed()
        .setTitle("📊 " + question)
        .setDescription(`Votez ! \n\n\n  ${choices.join("\n\n")}`)
        .setColor("#00D1CD");
      await interaction.channel.send({ embeds: [embed] }).then((msg) => {
        for (let i = 0; i < choices.length; i++) {
          msg.react(numbers[i]);
        }
      });
    }
  },
};
