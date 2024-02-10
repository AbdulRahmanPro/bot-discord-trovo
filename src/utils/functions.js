// في ملف interactions/buttonHandlers.js
const axios = require("axios");
const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle } = require('discord.js');
let url = process.env.URLSERRVER;

async function handleSaifiButton(interaction, TypeAction) {
    try {
        if (!interaction.deferred) await interaction.deferReply(); // تأجيل الرد

        const data = { user: "saifi", action: TypeAction };

        const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
        if (response.status === 200) {
            // تحديث الرد بدلاً من إنشائه من جديد
            await interaction.editReply({ content: `${TypeAction} تم تعيين الحدث إلى ` });
        }
    } catch (error) {
        console.error(error);
        // تحقق إذا كان الرد قد تم تأجيله قبل محاولة تحديثه
        if (interaction.deferred) {
            await interaction.editReply({ content: `هناك مشكلة في تعيين الحدث، تواصل مع المطور.` });
        } else {
            // هذا السطر لن يتم تنفيذه إذا كانت هناك محاولة للرد بعد `deferReply`
            // لكنه مفيد للحالات التي لم يتم فيها تأجيل الرد بعد
            await interaction.reply({ content: `هناك مشكلة في تعيين الحدث، تواصل مع المطور.` });
        }
    }
}

async function handleGeniusButton(interaction, TypeAction) {
    try {
        if (!interaction.deferred) await interaction.deferReply(); // تأجيل الرد

        const data = { user: "Genius", action: TypeAction };

        const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
        if (response.status === 200) {
            // تحديث الرد بدلاً من إنشائه من جديد
            await interaction.editReply({ content: `${TypeAction} تم تعيين الحدث إلى ` });
        }
    } catch (error) {
        console.error(error);
        // تحقق إذا كان الرد قد تم تأجيله قبل محاولة تحديثه
        if (interaction.deferred) {
            await interaction.editReply({ content: `هناك مشكلة في تعيين الحدث، تواصل مع المطور.` });
        } else {
            // هذا السطر لن يتم تنفيذه إذا كانت هناك محاولة للرد بعد `deferReply`
            // لكنه مفيد للحالات التي لم يتم فيها تأجيل الرد بعد
            await interaction.reply({ content: `هناك مشكلة في تعيين الحدث، تواصل مع المطور.` });
        }
    }
}


async function handleAboMriamButton(interaction, TypeAction) {
    try {
        if (!interaction.deferred) await interaction.deferReply(); // تأجيل الرد

        const data = { user: "AboMrim", action: TypeAction };

        const response = await axios.post(url, data, { headers: { 'Content-Type': 'application/json' } });
        if (response.status === 200) {
            // تحديث الرد بدلاً من إنشائه من جديد
            await interaction.editReply({ content: `${TypeAction} تم تعيين الحدث إلى ` });
        }
    } catch (error) {
        console.error(error);
        // تحقق إذا كان الرد قد تم تأجيله قبل محاولة تحديثه
        if (interaction.deferred) {
            await interaction.editReply({ content: `هناك مشكلة في تعيين الحدث، تواصل مع المطور.` });
        } else {
            // هذا السطر لن يتم تنفيذه إذا كانت هناك محاولة للرد بعد `deferReply`
            // لكنه مفيد للحالات التي لم يتم فيها تأجيل الرد بعد
            await interaction.reply({ content: `هناك مشكلة في تعيين الحدث، تواصل مع المطور.` });
        }
    }
}

// تصدير الوظائف لاستخدامها خارجيًا
module.exports = {
    handleSaifiButton,
    handleGeniusButton,
    handleAboMriamButton
};
