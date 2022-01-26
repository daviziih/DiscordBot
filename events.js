const { player } = require(".");
const { MessageEmbed } = require('discord.js');

module.exports = async (client) => {

  player.on("trackStart", async (queue, track) => {

    client.user.setActivity(track.title, { type: "LISTENING" });

    const Embed = new MessageEmbed()
    
	  .setColor('RANDOM')
	  .setAuthor({ name: '🎧 Estou tocando agora: 🎧' })
    .setTitle(`\`${track.title}\``)
    .setURL(track.url)
	  .addField('Duração', track.duration, true)
    .addField('Cantor(es)', track.author, true)
	  .setImage(track.thumbnail)
	  .setTimestamp()
	  .setFooter({ text: '© Todos os Direitos Reservados', iconURL: client.avatarURL });

    queue.metadata.channel.send({ embeds: [Embed] });

  });

  player.on("trackAdd", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Adicionando a playlist \`${track.title}\``);
  });

  player.on("trackEnd", async (quere, track) => {
    client.user.setActivity("daviziih.tk || !help");
  });
};