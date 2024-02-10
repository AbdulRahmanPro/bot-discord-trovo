const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const Command = require("../Structures/Command");

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      aliases: ["example"],
      description: "Sends a message with three buttons",
      category: "Utilities",
      usage: "/example",
    });
  }

  async run(message) {
    // Create the message embed
    const embed = new EmbedBuilder()
      .setColor("Blue")
      .setTitle("تغير نوع التعليقات")
      .setDescription("بأمكانك الان تغير واجهة التعليقات اتمنى منك اختيار احد المستخدمين المسجلين");

    // Create the buttons
    const row = new ActionRowBuilder()
      .addComponents(
      [
        new ButtonBuilder ()
        .setCustomId('saifi')
        .setLabel('صيفي')
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder ()
        .setCustomId('Genius')
        .setLabel('جنيص')
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder ()
        .setCustomId('AboMrim')
        .setLabel('ابو مريم')
        .setStyle(ButtonStyle.Primary)
      ]
      );

    // Send the message with buttons
    await message.channel.send({ embeds: [embed], components: [row] });
  }
};
