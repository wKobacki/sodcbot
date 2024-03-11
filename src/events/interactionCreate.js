const { Events } = require('discord.js');
const ExtendedClient = require('../class/ExtendedClient');

/**
 * 
 * @param {ExtendedClient} client
 */

module.exports = {
	name: Events.InteractionCreate,
	async execute(client, interaction){
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.collection.interactioncommands.get(interaction.commandName);

		if (!command){
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(client, interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred){
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};