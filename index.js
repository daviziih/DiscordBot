const { Client } = require("discord.js");
const { Player } = require("discord-player");
const { prefix, token } = require("./config.json");

const client = new Client({
  restTimeOffset: 0,
  shards: "auto",
  intents: 641,
});

const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: true,
  leaveOnEmptyCooldown: 5000,
  autoSelfDeaf: false,
  initialVolume: 50,
  bufferingTimeout: 3000,
});

client.on("ready", () => {
  console.log("bot is already activated 🤖");
  client.user.setActivity("daviziih.tk || !help");
});

module.exports = { player, client };
require("./events")(client);

client.on("messageCreate", (msg) => {
  if (!msg.guild || msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  require("./commands")(client, msg, args, command);
});

client.login(token);