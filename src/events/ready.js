const { Events } = require('discord.js');
const ExtendedClient = require('../structures/ExtendedClient');
const { log } = require('../util/logger');

module.exports = {
	name: Events.ClientReady,
	once: true,
	/**
	 * 
	 * @param {ExtendedClient} client
	 */
	execute(client){
		log(`Logged in as ${client.user.tag}`, 'done');
	},
};