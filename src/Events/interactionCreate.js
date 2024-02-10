const Event = require("../Structures/Event");
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
const { handleSaifiButton, handleGeniusButton, handleAboMriamButton } = require("../utils/functions")
module.exports = class extends Event {
  async run(interaction) {
    // Check if the interaction is a slash command
    if (interaction.isCommand()) {
      const cmd = interaction.commandName;

      const command =
        this.client.slashcommands.get(cmd.toLowerCase()) ||
        this.client.slashcommands.get(
          this.client.slashaliases.get(cmd.toLowerCase())
        );
      if (command) {
        command.run(interaction);
      }
    }

    // Check if the interaction is a button
    else if (interaction.isButton()) {
      const buttonId = interaction.customId;
      let embed, row;

      // Here you handle the button interaction
      switch (buttonId) {
        case 'saifi':
          embed = new EmbedBuilder()
            .setColor("Blue") // استخدم الألوان على شكل رقم ست عشري
            .setTitle("الأحداث المتوفرة للصيفي")
            .setDescription("أنت الآن بواجهة لاستعمال الأحداث الموجودة للصيفي");

          row = new ActionRowBuilder()
            .addComponents(
              [
                new ButtonBuilder()
                  .setCustomId('win')
                  .setLabel('حالة الفوز')
                  .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                  .setCustomId('lose')
                  .setLabel('حالة الخسارة')
                  .setStyle(ButtonStyle.Danger),
                new ButtonBuilder()
                  .setCustomId('saifi-default')
                  .setLabel('تلقائي')
                  .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                  .setCustomId('return_home')
                  .setLabel('الرئيسية')
                  .setStyle(ButtonStyle.Secondary),
              ]
            );
          break;
        case 'Genius':
          embed = new EmbedBuilder()
            .setColor("Red")
            .setTitle("الجنيص")
            .setDescription("أنت الآن بواجهة لاستعمال الأحداث الموجود للجنيص");
          row = new ActionRowBuilder()
            .addComponents(
              [
                new ButtonBuilder()
                  .setCustomId('genius_defualt')
                  .setLabel('تلقائي')
                  .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                  .setCustomId('return_home')
                  .setLabel('الرئيسية')
                  .setStyle(ButtonStyle.Secondary),
              ]
            );
          break;
        case 'AboMrim':
          embed = new EmbedBuilder()
            .setColor("Red")
            .setTitle("أبو مريم")
            .setDescription("اختر الحدث الخاص بأبو مريم:");

          row = new ActionRowBuilder()
            .addComponents(
              [
                new ButtonBuilder()
                  .setCustomId('abomrim_defualt')
                  .setLabel('تلقائي')
                  .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                  .setCustomId('return_home')
                  .setLabel('الرئيسية')
                  .setStyle(ButtonStyle.Primary)
              ]
              // ...إضافة المزيد من الأزرار حسب الحاجة...
            );
          break;
        case 'return_home':
          // Create the main embed for the home interface using EmbedBuilder instead of MessageEmbed
          embed = new EmbedBuilder()
            .setColor("Blue") // تأكد من استخدام الألوان بشكل صحيح
            .setTitle("تغير نوع التعليقات")
            .setDescription("بأمكانك الان تغير واجهة التعليقات اتمنى منك اختيار احد المستخدمين المسجلين");
          // Create the buttons for the home interface
          row = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                .setCustomId('saifi')
                .setLabel('الصيفي')
                .setStyle(ButtonStyle.Primary),
              new ButtonBuilder()
                .setCustomId('Genius')
                .setLabel('الجنيص')
                .setStyle(ButtonStyle.Primary),
              new ButtonBuilder()
                .setCustomId('AboMrim')
                .setLabel('أبو مريم')
                .setStyle(ButtonStyle.Primary)
            );
          break;
        case 'win':
          await handleSaifiButton(interaction, "win")
          break;
        case 'lose':
          await handleSaifiButton(interaction, "lose")
          break;
        case 'saifi-default':
          await handleSaifiButton(interaction, "default")
          break;
        case 'abomrim_defualt':
          handleAboMriamButton(interaction, "default")
          break;
        case 'genius_defualt':
          handleGeniusButton(interaction, "default")
          break;
        // Add other cases here...
        default:
          // If the button doesn't match any known ID
          return interaction.reply({ content: 'Unknown button clicked.', ephemeral: true });
      }
      // Check if the components were set in the switch case and if so, update the message
      if (embed && row) {
        await interaction.update({ embeds: [embed], components: [row] });
      }
    }
  }
};