const { Client, Collection } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const dotenv = require("dotenv");
const wait = require("node:timers/promises").setTimeout;
dotenv.config();

const token = process.env.TOKEN;

// Create a new client instance
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS"],
});
client.commands = new Collection();
const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
    return;
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error while executing this command!",
      ephemeral: true,
    });
  }
});
// :regional_indicator_f: 🔮   🧙‍♀️
// 🇷  🇦  🇳  🇳  🇨  🇭 🇪  🇲  🇹 🇫  🇼  🇮  🇱  🇰   🇺 🇰  🇱 ▫️  🇩   ▪️  ❕  🍑  🍟  🍔 🥚
client.on("messageCreate", async (msg) => {
  const shitRegex = /\b(?:Wild|Tu Duy|Vicky)\b/gi;
  const starfoullaRegex= /\b(?:starfoullah)\b/gi;
  const reactRegex= /\b(?:react)\b/gi;
  const jsRegex= /\b(?:javascript|js)\b/gi;
  console.log("test");

  if (
    msg.content.includes("hey Dumdum!") &&
    msg.author.id === process.env.IRMA_ID
  ) 
  {
    const gifIrmaComing = new MessageEmbed()
		.setDescription("Cover !")
		.setImage(
		  "https://c.tenor.com/CdZP6w3-bZcAAAAC/irma-hurricane.gif"
		);
    await wait(2000);
    msg.channel.send("Comment elle parle à mes copains Irma ? Starfoullah !");
    await wait(2000);
    await interaction.channel.send({
      embeds: [gifIrmaComing],
    });
  } else if (
    msg.author.id === process.env.IRMA_ID &&
    !msg.content.includes("hey Dumdum!")
  )
   {
    msg.react("✨");
    msg.react("🇮");
    msg.react("🇷");
    msg.react("🇲");
    msg.react("🇦");
    msg.react("🧙‍♀️");
    msg.react("🔮");
  }
  if (msg.author.id === process.env.VINZ_ID) {
    msg.react("🥚");
    if (msg.content.match(starfoullaRegex)) {
      msg.react("🥚");
      msg.reply("Starfoullah ! \n  Ahh Vinz, voilà un gars qui sait vivre, Starfoullah !");
    }
  }
  if (msg.content.match(shitRegex)) {
    msg.react("💩");
  }
  if (msg.content.includes("back")) {
    msg.reply(`Un back qui claque des fesses j'espère !!`);
  }
  if (msg.content.includes("gras")) {
    msg.reply(`LE GRAS C'EST LA VIE !`);
  }
  if (msg.content.match(reactRegex)) {
    msg.reply("jsx c'est du javaScript pour les adultes");
  }
  if (msg.content.match(jsRegex)) {
    msg.reply("Si je puis me permettre, c'est du Javastrip");
  }
});

// Login to Discord with your client's token
client.login(token);
