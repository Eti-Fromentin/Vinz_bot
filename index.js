const { Client, Collection } = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
const dotenv = require("dotenv");
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
  console.log("test");
  // console.log(msg);

  // if (msg.content.includes("hello")) {
  //   msg.react("🇫");
  //   msg.react("🇺");
  //   msg.react("🇨");
  //   msg.react("🇰");
  //   msg.react("▫️");
  //   msg.react("🇹");
  //   msg.react("🇭");
  //   msg.react("🇪");
  //   msg.react("▪️");
  //   msg.react("🇼");
  //   msg.react("🇮");
  //   msg.react("🇱");
  //   msg.react("🇩");
  //   msg.react("❕");
  // }
  if (msg.content.includes("hey Dumdum!") && msg.author.id === process.env.IRMA_ID) {
    msg.reply("Comment tu parles à mes copains toi ? Starfoullah !");
  } else  if (msg.author.id === process.env.IRMA_ID && !msg.content.includes("hey Dumdum!")) {
    msg.react('✨');
    msg.react('🇮');
    msg.react('🇷');
    msg.react('🇲');
    msg.react('🇦');
    msg.react('🧙‍♀️');
    msg.react('🔮');
  }
  if (msg.content.includes("Wild") && msg.author.id === process.env.GASPO_ID) {
    msg.react('💩');
    msg.reply('La Wild, 💩 ...')
  } 
   if (msg.content.includes("back") && msg.author.id === process.env.GASPO_ID) {
    msg.reply(`Un back qui claque des fesses j'espère !!`)
  }
  // if (msg.content.includes("hey Dumdum!")) {
  //   msg.reply("Comment tu parles à mes copains toi ? Starfoullah !");
  // }
});

// client.on("messageCreate", (msg) => {
//   console.log('test');
//   if (msg.content.includes("bite")) {
//     msg.reply("bite ?");
//   }
//   });

// Login to Discord with your client's token
client.login(token);
