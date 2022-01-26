const { player } = require(".");

module.exports = async (client) => {

  player.on("trackStart", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Tocando \`${track.title}\``);
  });

  player.on("trackAdd", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Adicionando a playlist \`${track.title}\``);
  });

  player.on("trackEnd", async (quere, track) => {
    client.user.setActivity("Your Song", { type: "LISTENING" });
  })
};