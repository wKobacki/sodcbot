const { ButtonInteraction } = require('discord.js');
const ExtendedClient = require('../../structures/ExtendedClient');
const { getTrackerEditModal } = require('../discordModals');
const GuildTools = require('../../tools/guilds');

module.exports = {
    customId: 'trackerEditButton',
    /**
     * 
     * @param {ExtendedClient} client 
     * @param {ButtonInteraction} interaction 
     */
    execute: async (client, interaction) => {
        const guild = await GuildTools.getGuild(interaction.guild.id);
        const tracker = guild.trackers.find((t) => t.messageId === interaction.message.id);
        const modal = getTrackerEditModal(tracker);
        interaction.showModal(modal);
    }
};
